# Content Repurposing Tool - MVP Visual Design

## Application Layout Overview

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                        CONTENT REPURPOSING TOOL                             ║
║                      "Paste once, get content for 3 platforms instantly"    ║
╚══════════════════════════════════════════════════════════════════════════════╝

┌──────────────────────────────────────────────────────────────────────────────┐
│                              INPUT SECTION                                  │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │                                                                        │  │
│  │  📝 Paste your long-form content here...                              │  │
│  │                                                                        │  │
│  │  Whether it's a blog post, article, video script, or any written      │  │
│  │  content - just paste it here and watch the magic happen!             │  │
│  │                                                                        │  │
│  │  [Content will be automatically transformed as you type/paste]        │  │
│  │                                                                        │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  Character count: 1,247 characters                                          │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│                             OUTPUT SECTION                                  │
│                                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │   🐦 TWITTER    │  │  💼 LINKEDIN    │  │  📸 INSTAGRAM   │              │
│  │                 │  │                 │  │                 │              │
│  │ ┌─────────────┐ │  │ ┌─────────────┐ │  │ ┌─────────────┐ │              │
│  │ │Transform    │ │  │ │Professional │ │  │ │Visual story │ │              │
│  │ │your content │ │  │ │summary with │ │  │ │with emojis  │ │              │
│  │ │into engaging│ │  │ │industry     │ │  │ │and hashtags │ │              │
│  │ │tweets with  │ │  │ │insights and │ │  │ │that engages │ │              │
│  │ │hashtags     │ │  │ │call-to-     │ │  │ │your audience│ │              │
│  │ │#content...  │ │  │ │action.      │ │  │ │✨📱💡      │ │              │
│  │ └─────────────┘ │  │ │             │ │  │ │#content...  │ │              │
│  │                 │  │ │What are your│ │  │ └─────────────┘ │              │
│  │ 245/280 chars   │  │ │thoughts?    │ │  │                 │              │
│  │ ✅ Under limit  │  │ └─────────────┘ │  │ 1,156/2,200     │              │
│  │                 │  │                 │  │ ✅ Under limit  │              │
│  │ [📋 Copy Tweet] │  │ 890/1,300 chars│  │                 │              │
│  │                 │  │ ✅ Under limit  │  │ [📋 Copy Post]  │              │
│  │                 │  │                 │  │                 │              │
│  │                 │  │ [📋 Copy Post]  │  │                 │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## User Flow Visualization

```
START
  │
  ▼
┌─────────────────────────────────────┐
│  User lands on homepage             │
│  ┌─────────────────────────────────┐ │
│  │  Large, inviting text area      │ │
│  │  "Paste your content here..."   │ │
│  └─────────────────────────────────┘ │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  User pastes/types content          │
│  ┌─────────────────────────────────┐ │
│  │  "How to build a successful     │ │
│  │   startup in 2024..."          │ │
│  │  [Content being typed...]       │ │
│  └─────────────────────────────────┘ │
└─────────────────────────────────────┘
  │
  ▼ (Automatic - Real-time)
┌─────────────────────────────────────┐
│  Content processed instantly        │
│  ┌───────┐ ┌───────┐ ┌───────┐     │
│  │Twitter│ │LinkedIn│ │Insta │     │
│  │ ⚡    │ │   ⚡   │ │  ⚡   │     │
│  │Loading│ │Loading │ │Loading│     │
│  └───────┘ └───────┘ └───────┘     │
└─────────────────────────────────────┘
  │
  ▼ (< 1 second)
┌─────────────────────────────────────┐
│  Results appear in 3 cards         │
│  ┌───────┐ ┌───────┐ ┌───────┐     │
│  │✅Tweet│ │✅Post │ │✅Post │     │
│  │Ready! │ │Ready! │ │Ready! │     │
│  │[Copy] │ │[Copy] │ │[Copy] │     │
│  └───────┘ └───────┘ └───────┘     │
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  User clicks copy button           │
│  ┌───────┐                         │
│  │✅Tweet│ ← User clicks here       │
│  │Copied!│                         │
│  │[✓]    │                         │
│  └───────┘                         │
└─────────────────────────────────────┘
  │
  ▼
END - Content ready to paste on platform!
```

## Mobile Layout Design

```
┌─────────────────────┐
│ Content Repurposing │
│        Tool         │
├─────────────────────┤
│                     │
│ ┌─────────────────┐ │
│ │                 │ │
│ │ Paste content   │ │
│ │ here...         │ │
│ │                 │ │
│ │                 │ │
│ │                 │ │
│ └─────────────────┘ │
│                     │
│ 1,247 characters    │
├─────────────────────┤
│                     │
│ ┌─────────────────┐ │
│ │   🐦 TWITTER    │ │
│ │                 │ │
│ │ Your engaging   │ │
│ │ tweet content   │ │
│ │ with #hashtags  │ │
│ │                 │ │
│ │ 245/280 ✅      │ │
│ │ [📋 Copy Tweet] │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │  💼 LINKEDIN    │ │
│ │                 │ │
│ │ Professional    │ │
│ │ summary with    │ │
│ │ call-to-action  │ │
│ │                 │ │
│ │ 890/1,300 ✅    │ │
│ │ [📋 Copy Post]  │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │  📸 INSTAGRAM   │ │
│ │                 │ │
│ │ Visual story    │ │
│ │ with emojis ✨  │ │
│ │ #hashtags       │ │
│ │                 │ │
│ │ 1,156/2,200 ✅  │ │
│ │ [📋 Copy Post]  │ │
│ └─────────────────┘ │
└─────────────────────┘
```

## Component Breakdown

### ContentInput Component
```
┌──────────────────────────────────────────────────────────────┐
│                      ContentInput.js                        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │  <textarea>                                            │  │
│  │    placeholder="Paste your content here..."            │  │
│  │    onChange={handleContentChange}                      │  │
│  │    value={content}                                     │  │
│  │  />                                                    │  │
│  │                                                        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  Character count: {content.length} characters                │
│                                                              │
│  [Triggers API call on content change with debounce]        │
└──────────────────────────────────────────────────────────────┘
```

### PlatformCard Component
```
┌──────────────────────────────────────────────────────────────┐
│                     PlatformCard.js                         │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────┐                                        │
│  │ {platform.icon} │  Props:                                │
│  │ {platform.name} │  - platform: "twitter"|"linkedin"|... │
│  │                 │  - content: transformed content        │
│  │ ┌─────────────┐ │  - characterCount: number              │
│  │ │{content}    │ │  - characterLimit: number              │
│  │ │             │ │  - onCopy: function                    │
│  │ │             │ │                                        │
│  │ └─────────────┘ │                                        │
│  │                 │                                        │
│  │ {count}/{limit} │                                        │
│  │ {status_icon}   │                                        │
│  │                 │                                        │
│  │ [📋 Copy {type}]│                                        │
│  └─────────────────┘                                        │
└──────────────────────────────────────────────────────────────┘
```

### ResultsGrid Component
```
┌──────────────────────────────────────────────────────────────┐
│                     ResultsGrid.js                          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  <div className="results-grid">                             │
│    {platforms.map(platform => (                             │
│      <PlatformCard                                           │
│        key={platform.name}                                  │
│        platform={platform}                                  │
│        content={results[platform.name]?.content}            │
│        characterCount={results[platform.name]?.count}       │
│        onCopy={handleCopy}                                   │
│      />                                                      │
│    ))}                                                       │
│  </div>                                                      │
│                                                              │
│  CSS Grid Layout:                                            │
│  - Desktop: 3 columns                                        │
│  - Tablet: 2 columns                                         │
│  - Mobile: 1 column                                          │
└──────────────────────────────────────────────────────────────┘
```

## API Flow Visualization

```
Frontend                           Backend
   │                                 │
   │ POST /api/transform             │
   │ { content: "..." }              │
   ├────────────────────────────────▶│
   │                                 │
   │                                 │ contentProcessor.js
   │                                 │ ┌─────────────────┐
   │                                 │ │ 1. Split into   │
   │                                 │ │    sentences    │
   │                                 │ └─────────────────┘
   │                                 │ ┌─────────────────┐
   │                                 │ │ 2. Extract key  │
   │                                 │ │    phrases      │
   │                                 │ └─────────────────┘
   │                                 │ ┌─────────────────┐
   │                                 │ │ 3. Apply        │
   │                                 │ │    platform     │
   │                                 │ │    rules        │
   │                                 │ └─────────────────┘
   │                                 │
   │ {                               │
   │   success: true,                │
   │   results: {                    │
   │     twitter: {...},             │
   │     linkedin: {...},            │
   │     instagram: {...}            │
   │   }                             │
   │ }                               │
   │◀────────────────────────────────┤
   │                                 │
   │ Update UI with results          │
   │                                 │
```

## Error States Design

```
┌──────────────────────────────────────────────────────────────┐
│                      Error Handling                         │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Empty Content State:                                        │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                                                         │ │
│  │  📝 Ready to transform your content?                    │ │
│  │                                                         │ │
│  │  Paste any long-form content above to see it           │ │
│  │  transformed for Twitter, LinkedIn, and Instagram!     │ │
│  │                                                         │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  Loading State:                                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │   TWITTER   │ │  LINKEDIN   │ │ INSTAGRAM   │            │
│  │             │ │             │ │             │            │
│  │     ⚡      │ │     ⚡      │ │     ⚡      │            │
│  │ Processing  │ │ Processing  │ │ Processing  │            │
│  │             │ │             │ │             │            │
│  └─────────────┘ └─────────────┘ └─────────────┘            │
│                                                              │
│  API Error State:                                            │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                                                         │ │
│  │  ⚠️ Oops! Something went wrong                          │ │
│  │                                                         │ │
│  │  We couldn't process your content right now.           │ │
│  │  Please try again in a moment.                         │ │
│  │                                                         │ │
│  │  [🔄 Try Again]                                         │ │
│  │                                                         │ │
│  └─────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

## Success States & Feedback

```
┌──────────────────────────────────────────────────────────────┐
│                    Success Feedback                         │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Copy Success Animation:                                     │
│  ┌─────────────────┐                                        │
│  │   🐦 TWITTER    │                                        │
│  │                 │                                        │
│  │ ┌─────────────┐ │                                        │
│  │ │Your tweet   │ │                                        │
│  │ │content here │ │                                        │
│  │ └─────────────┘ │                                        │
│  │                 │                                        │
│  │ 245/280 ✅      │                                        │
│  │                 │                                        │
│  │ [✅ Copied!]    │ ← Changes to this for 2 seconds        │
│  └─────────────────┘                                        │
│                                                              │
│  Character Limit Indicators:                                 │
│  ✅ Under limit (green)                                      │
│  ⚠️  Near limit (yellow, 90%+)                              │
│  ❌ Over limit (red)                                         │
│                                                              │
│  Real-time Updates:                                          │
│  - Content updates as user types                             │
│  - Character counts update instantly                         │
│  - Visual feedback for all interactions                      │
└──────────────────────────────────────────────────────────────┘
```

## Responsive Breakpoints

```
Desktop (1200px+)     Tablet (768px-1199px)    Mobile (< 768px)
┌─────────────────┐   ┌─────────────────┐      ┌─────────────┐
│ [Input Area]    │   │ [Input Area]    │      │[Input Area] │
│                 │   │                 │      │             │
│ ┌───┐ ┌───┐ ┌───┐   │ ┌─────┐ ┌─────┐ │      │ ┌─────────┐ │
│ │ T │ │ L │ │ I │   │ │  T  │ │  L  │ │      │ │    T    │ │
│ │ w │ │ i │ │ n │   │ │  w  │ │  i  │ │      │ └─────────┘ │
│ │ i │ │ n │ │ s │   │ │  i  │ │  n  │ │      │ ┌─────────┐ │
│ │ t │ │ k │ │ t │   │ │  t  │ │  k  │ │      │ │    L    │ │
│ │ t │ │ e │ │ a │   │ │  t  │ │  e  │ │      │ │    i    │ │
│ │ e │ │ d │ │ g │   │ │  e  │ │  d  │ │      │ │    n    │ │
│ │ r │ │ I │ │ r │   │ │  r  │ │  I  │ │      │ │    k    │ │
│ │   │ │ n │ │ a │   │ │     │ │  n  │ │      │ │    e    │ │
│ └───┘ └───┘ └───┘   │ └─────┘ └─────┘ │      │ │    d    │ │
│                 │   │ ┌─────────────┐ │      │ └─────────┘ │
│                 │   │ │ Instagram   │ │      │ ┌─────────┐ │
│                 │   │ │             │ │      │ │Instagram│ │
│                 │   │ └─────────────┘ │      │ └─────────┘ │
└─────────────────┘   └─────────────────┘      └─────────────┘
```

This design document provides a complete visual representation of the MVP Content Repurposing Tool, showing the user interface, user flow, component structure, and responsive behavior across different devices. 