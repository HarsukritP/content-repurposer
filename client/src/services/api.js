import axios from 'axios';

// Use environment variables for API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
const API_ENDPOINTS_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: API_ENDPOINTS_BASE,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        console.error('❌ API Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response) => {
        console.log(`✅ API Response: ${response.status} ${response.config.url}`);
        return response;
      },
      (error) => {
        console.error('❌ API Response Error:', error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }

  // Transform content for all platforms
  async transformContent(content) {
    try {
      const response = await this.api.post('/transform', { content });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get platform specifications
  async getPlatforms() {
    try {
      const response = await this.api.get('/platforms');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Health check
  async healthCheck() {
    try {
      const response = await axios.get(`${API_BASE_URL}/health`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Error handler
  handleError(error) {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      return {
        success: false,
        error: data.error || `Server error: ${status}`,
        status
      };
    } else if (error.request) {
      // Request was made but no response received
      return {
        success: false,
        error: 'Unable to connect to server. Please check your connection.',
        status: 0
      };
    } else {
      // Something else happened
      return {
        success: false,
        error: error.message || 'An unexpected error occurred',
        status: 0
      };
    }
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService; 