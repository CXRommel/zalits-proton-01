# Fight Section - File Structure

This document explains the organization of the Fight Section feature with the new feature-based architecture.

## 📁 Project Structure

```
src/
├── features/
│   ├── _template-fight-component/          # Template for new components
│   │   ├── MyComponent.jsx                 # Template component file
│   │   ├── index.js                        # Template export
│   │   └── README.md                       # Template documentation
│   │
│   ├── example-counter/                    # Example feature
│   │   ├── CounterComponent.jsx            # Counter implementation
│   │   └── index.js                        # Export file
│   │
│   ├── example-timer/                      # Example feature
│   │   ├── TimerComponent.jsx              # Timer implementation
│   │   └── index.js                        # Export file
│   │
│   ├── your-feature-1/                     # Developer feature
│   │   ├── YourComponent.jsx               # Your component
│   │   └── index.js                        # Export file
│   │
│   ├── your-feature-2/                     # Another developer feature
│   │   ├── AnotherComponent.jsx            # Another component
│   │   └── index.js                        # Export file
│   │
│   └── course/
│       └── sections/
│           └── fight/
│               ├── FightSection.jsx        # Main arena component
│               ├── ComponentSelector.jsx   # Dropdown selector
│               ├── index.js                # Public exports
│               ├── README.md               # Main documentation
│               ├── STRUCTURE.md            # This file
│               └── QUICKSTART.md           # Quick start guide
│
└── shared/
    └── fight-registry/
        └── registry.js                     # SHARED REGISTRY - Register here!
```

## 🏗️ Architecture Overview

### Separation of Concerns

The Fight Section uses a **distributed feature architecture**:

1. **Features** (`src/features/*`): Each developer owns their feature folder
2. **Shared Registry** (`src/shared/fight-registry/`): Central registration point
3. **Fight Section** (`src/features/course/sections/fight/`): Display and comparison logic

### Why This Architecture?

**Benefits:**
- ✅ **Isolation**: Developers don't interfere with each other's code
- ✅ **Scalability**: Easy to add unlimited components
- ✅ **Maintainability**: Each feature is self-contained
- ✅ **Collaboration**: Only one shared file to coordinate (registry.js)
- ✅ **Git Friendly**: Minimal merge conflicts

## 📄 File Descriptions

### Core Fight Section Files

#### `FightSection.jsx`
- **Purpose**: Main container for the component comparison arena
- **Location**: `src/features/course/sections/fight/`
- **Responsibilities**:
  - Render left and right comparison panels
  - Manage state for selected components
  - Dynamically mount selected components
  - Display UI (VS badge, instructions, etc.)
- **Dependencies**: `ComponentSelector`, `registry.js`
- **State**:
  - `leftComponent`: Currently selected left component
  - `rightComponent`: Currently selected right component

#### `ComponentSelector.jsx`
- **Purpose**: Dropdown component for selecting components
- **Location**: `src/features/course/sections/fight/`
- **Responsibilities**:
  - Render styled select dropdown
  - Show available components from registry
  - Handle selection changes
  - Display component metadata
- **Props**:
  - `availableComponents`: Array of component objects
  - `selectedComponent`: Currently selected component
  - `onSelect`: Callback function
  - `side`: 'left' or 'right' (affects styling)

### Shared Registry

#### `registry.js`
- **Purpose**: Central registry for all Fight Section components
- **Location**: `src/shared/fight-registry/`
- **Responsibilities**:
  - Import all registered components
  - Maintain `componentRegistry` array
  - Provide utility functions for component lookup
  - Document registration rules
- **Key Functions**:
  - `getAvailableComponents()`: Returns all registered components
  - `getComponentById(id)`: Returns specific component by ID
  - `validateComponent(component)`: Validates component structure
  - `getComponentsByAuthor(author)`: Returns components by author
- **Important**: This is the ONLY file developers need to modify to register

### Feature Folders

#### `_template-fight-component/`
- **Purpose**: Template for creating new Fight Section components
- **Contents**:
  - `MyComponent.jsx`: Boilerplate component with extensive comments
  - `index.js`: Export configuration
  - `README.md`: Step-by-step instructions
- **Usage**: Copy this entire folder to start a new feature
- **Note**: NOT registered in registry (it's a template, not a real component)

#### `example-counter/`
- **Purpose**: Example implementation showing basic patterns
- **Contents**:
  - `CounterComponent.jsx`: Interactive counter with history
  - `index.js`: Export file
- **Demonstrates**:
  - State management with `useState`
  - Event handlers
  - Conditional styling
  - Action tracking
  - Statistics display

#### `example-timer/`
- **Purpose**: Example implementation showing advanced patterns
- **Contents**:
  - `TimerComponent.jsx`: Countdown timer with controls
  - `index.js`: Export file
- **Demonstrates**:
  - Effects with `useEffect`
  - Interval management
  - Proper cleanup
  - Multiple state variables
  - Complex interactions

#### `your-feature/` (Developer Features)
- **Purpose**: Individual developer's component implementation
- **Minimum Contents**:
  - `YourComponent.jsx`: The component implementation
  - `index.js`: Export file
- **Optional Contents**:
  - `README.md`: Documentation for complex components
  - `helpers.js`: Helper functions
  - `constants.js`: Constants and configuration
  - `utils.js`: Utility functions
  - Additional component files (if needed)

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      FightSection.jsx                       │
│                    (Main Container)                         │
└─────────────────────────────────────────────────────────────┘
                             │
                             │ Calls on mount
                             ▼
                    getAvailableComponents()
                             │
                             │ Returns array
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                      registry.js                            │
│                   (Shared Registry)                         │
│                                                             │
│  imports:                                                   │
│  - CounterComponent from example-counter                   │
│  - TimerComponent from example-timer                       │
│  - YourComponent from your-feature                         │
│  - ... all registered components                           │
└─────────────────────────────────────────────────────────────┘
                             │
                             │ Returns to FightSection
                             ▼
┌─────────────────────────────────────────────────────────────┐
│              ComponentSelector (Left & Right)               │
│                                                             │
│  - Renders dropdown with all components                    │
│  - User selects a component                                │
│  - Calls onSelect(selectedComponent)                       │
└─────────────────────────────────────────────────────────────┘
                             │
                             │ User selects component
                             ▼
              ┌──────────────────────────────┐
              │  setLeftComponent(component) │
              │          or                  │
              │ setRightComponent(component) │
              └──────────────────────────────┘
                             │
                             ▼
┌──────────────────────────┬──────────────────────────────────┐
│     Left Panel           │         Right Panel              │
│                          │                                  │
│  Renders:                │  Renders:                        │
│  <leftComponent.         │  <rightComponent.                │
│    Component />          │    Component />                  │
│                          │                                  │
│  (Independent instance)  │  (Independent instance)          │
└──────────────────────────┴──────────────────────────────────┘
```

## 🛠️ Developer Workflow

### Creating a New Component

```
Step 1: Copy Template
├── cd src/features
├── cp -r _template-fight-component my-awesome-feature
└── cd my-awesome-feature

Step 2: Develop Component
├── Rename MyComponent.jsx to AwesomeComponent.jsx
├── Implement component logic
├── Use useState/useEffect as needed
└── Style with Tailwind CSS

Step 3: Export Component
├── Update index.js
└── export { default as AwesomeComponent } from './AwesomeComponent';

Step 4: Register Component
├── Open src/shared/fight-registry/registry.js
├── Add import: import { AwesomeComponent } from '#src/features/my-awesome-feature';
└── Add to componentRegistry array:
    {
      id: 'my-awesome-component',
      name: 'My Awesome Component',
      author: 'Your Name',
      description: 'Does awesome things',
      Component: AwesomeComponent,
    }

Step 5: Test
├── Save all files
├── Refresh browser
├── Navigate to Fight Section
└── Select your component from dropdown
```

## 📦 Component Registration Schema

Every component registered in `registry.js` must follow this structure:

```javascript
{
  id: string,           // Unique identifier (kebab-case)
                        // Example: 'my-awesome-component'

  name: string,         // Display name (human-readable)
                        // Example: 'My Awesome Component'
                        // This appears in the dropdown

  author: string,       // Developer name
                        // Example: 'Jane Developer'
                        // Shows who created the component

  description: string,  // Brief description (1-2 sentences)
                        // Example: 'A component that does X and Y'
                        // Displayed when component is selected

  Component: function,  // React component (function or class)
                        // The actual component reference
                        // Must be a valid React component
}
```

## 🎯 Import Path Conventions

The project uses path aliases for clean imports:

```javascript
// ✅ Correct: Use path alias
import { MyComponent } from '#src/features/my-feature';
import { getAvailableComponents } from '#src/shared/fight-registry/registry';

// ❌ Incorrect: Relative paths from registry
import { MyComponent } from '../../features/my-feature';

// The '#src' alias resolves to 'src/' at the project root
```

## 🔍 How Components Are Loaded

### Dynamic Component Mounting

```jsx
// In FightSection.jsx
const [leftComponent, setLeftComponent] = useState(null);

// When user selects a component:
// leftComponent = {
//   id: 'example-counter',
//   name: 'Example Counter',
//   author: 'System',
//   description: '...',
//   Component: CounterComponent  // <- The actual component function
// }

// Render the component dynamically:
<leftComponent.Component />

// This is equivalent to:
<CounterComponent />

// But allows us to switch components dynamically!
```

### Lifecycle

1. **Initial Load**: FightSection fetches all components from registry
2. **Selection**: User picks component from dropdown
3. **Mounting**: Component is mounted in panel
4. **Running**: Component runs independently with own state
5. **Unmounting**: When user selects different component, old one unmounts
6. **Cleanup**: useEffect cleanup functions run automatically

## 🗂️ File Organization Best Practices

### Feature Folder Structure

**Simple Component:**
```
my-feature/
├── MyComponent.jsx
└── index.js
```

**Complex Component:**
```
my-feature/
├── MyComponent.jsx        # Main component
├── helpers.js             # Helper functions
├── constants.js           # Constants
├── index.js               # Exports
└── README.md              # Documentation
```

**Very Complex Component:**
```
my-feature/
├── components/
│   ├── MainComponent.jsx
│   ├── SubComponent1.jsx
│   └── SubComponent2.jsx
├── hooks/
│   ├── useCustomHook.js
│   └── useAnotherHook.js
├── utils/
│   ├── helpers.js
│   └── formatters.js
├── constants.js
├── index.js
└── README.md
```

## 🚫 Anti-Patterns to Avoid

### ❌ Don't Modify Other Features
```
src/features/
├── alice-feature/        # Alice's feature
│   └── AliceComponent.jsx
└── bob-feature/          # Bob's feature
    └── BobComponent.jsx

# ❌ Alice should NOT modify Bob's files
# ✅ Each developer owns their own feature
```

### ❌ Don't Create Shared State Between Components
```javascript
// ❌ Bad: Trying to share state
let sharedCounter = 0;  // This won't work across component instances

function MyComponent() {
  sharedCounter++;  // Each instance is isolated!
  // ...
}
```

### ❌ Don't Require Props
```javascript
// ❌ Bad: Component requires props
function MyComponent({ data, onUpdate }) {
  // This won't work in Fight Section!
}

// ✅ Good: Component is self-contained
function MyComponent() {
  const [data, setData] = useState([]);
  // Manages own state
}
```

## 📊 Registry Management

### Adding Component
1. Developer creates feature
2. Developer adds ONE entry to registry.js
3. Component appears in dropdowns

### Removing Component
1. Remove entry from registry.js
2. Component disappears from dropdowns
3. Feature folder can be kept or deleted

### Updating Component
1. Developer edits their own feature files
2. Changes appear immediately (with hot reload)
3. No need to touch registry.js unless changing metadata

## 🔐 Collision Prevention

### Unique IDs
- Each component must have unique ID
- Use descriptive kebab-case names
- Check existing IDs before adding new one

```javascript
// ✅ Good IDs
'todo-list'
'calculator-widget'
'color-picker-advanced'
'john-timer-component'

// ❌ Bad IDs
'component1'  // Not descriptive
'MyComponent'  // Not kebab-case
'test'  // Too generic
```

## 🎨 Styling Conventions

### Color Schemes

**Left Panel**: Blue/Cyan theme
- `bg-blue-500/20`, `text-blue-300`, `border-blue-500`

**Right Panel**: Red/Orange theme
- `bg-red-500/20`, `text-red-300`, `border-red-500`

**Component Internals**: Free choice
- Use any Tailwind colors you like
- Purple, green, yellow are recommended
- Keep it visually appealing

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] Component appears in dropdown
- [ ] Can select in left panel
- [ ] Can select in right panel
- [ ] Component renders without errors
- [ ] Interactions work correctly
- [ ] Layout doesn't break
- [ ] No console errors/warnings
- [ ] Works on mobile/tablet/desktop
- [ ] Cleanup works (no memory leaks)

## 📚 Additional Documentation

- **README.md**: Comprehensive guide for developers
- **QUICKSTART.md**: 5-minute quick start guide
- **Template README**: Instructions in template folder

## 🔄 Version Control

### Git Workflow

**Adding Your Component:**
```bash
git checkout -b feature/my-awesome-component
# Create your feature
# Register in registry.js
git add src/features/my-awesome-feature
git add src/shared/fight-registry/registry.js
git commit -m "Add: My Awesome Component for Fight Section"
git push origin feature/my-awesome-component
```

**Minimizing Conflicts:**
- Only modify registry.js when adding/removing your components
- Keep your feature folder changes separate
- Coordinate with team if multiple people adding components simultaneously

---

**Last Updated**: 2024
**Architecture**: Distributed Feature-Based
**Maintainer**: Development Team