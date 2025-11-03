# Fight Registry - Shared Component Registry

This is the **shared registry** where all developers register their Fight Section components.

## 🎯 Purpose

The Fight Registry is the central hub that connects all developer-created components to the Fight Section. It's the **only shared file** that multiple developers need to coordinate on.

## 📁 Location

```
src/shared/fight-registry/
└── registry.js    # The registry file
```

## 🚀 How to Register Your Component

### Quick Steps

1. **Create your feature** in `src/features/your-feature-name/`
2. **Export your component** from your feature's `index.js`
3. **Open this registry file**: `registry.js`
4. **Add import** in the IMPORTS section
5. **Add registration** in the componentRegistry array
6. **Save and test**!

### Example Registration

```javascript
// 1. Import your component (add to IMPORTS section)
import { MyComponent } from '#src/features/my-awesome-feature';

// 2. Register it (add to componentRegistry array)
{
  id: 'my-awesome-component',
  name: 'My Awesome Component',
  author: 'Your Name',
  description: 'A brief description of what this component does',
  Component: MyComponent,
}
```

## 📋 Registration Rules

### Required Fields

Every component registration **must** include:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | string | Unique identifier (kebab-case) | `'todo-list-widget'` |
| `name` | string | Human-readable display name | `'Todo List Widget'` |
| `author` | string | Your name or username | `'Jane Developer'` |
| `description` | string | Brief description (1-2 sentences) | `'A simple todo list with add/remove'` |
| `Component` | function | React component reference | `TodoComponent` |

### ID Guidelines

**✅ Good IDs:**
- `'counter-basic'`
- `'timer-advanced'`
- `'calculator-widget'`
- `'color-picker-tool'`
- `'alice-game-component'`

**❌ Bad IDs:**
- `'component1'` (not descriptive)
- `'MyComponent'` (not kebab-case)
- `'test'` (too generic)
- `'c'` (too short)

### ID Must Be Unique!

Before adding your component, check that your chosen ID doesn't already exist in the registry.

```javascript
// ❌ This will cause errors - duplicate IDs
{
  id: 'counter',  // Already exists!
  name: 'My Counter',
  // ...
}

// ✅ Use a unique ID
{
  id: 'counter-advanced',  // Unique!
  name: 'My Counter',
  // ...
}
```

## 🗂️ Component Requirements

Your component **must** follow these rules to work in the Fight Section:

### ✅ Must Have

1. **Self-contained**: No props required
2. **React component**: Valid functional or class component
3. **State management**: Use `useState`/`useEffect` for state
4. **Proper exports**: Exported from your feature's `index.js`
5. **Cleanup**: Return cleanup functions in `useEffect`

### ❌ Must Not

1. **No props**: Don't require props from parent
2. **No breaking layout**: Stay within container
3. **No memory leaks**: Clean up intervals, listeners, etc.
4. **No external dependencies**: Only use what's in `package.json`

## 📝 Full Example

Here's a complete example of adding a new component:

### Step 1: Create Your Feature

```bash
cd src/features
cp -r _template-fight-component color-picker-feature
cd color-picker-feature
```

### Step 2: Implement Component

```jsx
// src/features/color-picker-feature/ColorPicker.jsx
import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#8b5cf6");

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4">
      <h3 className="text-2xl font-bold text-white">Color Picker</h3>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-24 h-24 rounded-lg cursor-pointer"
      />
      <div
        style={{ backgroundColor: color }}
        className="w-32 h-32 rounded-lg border-4 border-white/20"
      />
      <p className="text-slate-300 font-mono">{color}</p>
    </div>
  );
}

export default ColorPicker;
```

### Step 3: Export from Feature

```javascript
// src/features/color-picker-feature/index.js
export { default as ColorPicker } from './ColorPicker';
```

### Step 4: Register Here

```javascript
// src/shared/fight-registry/registry.js

// Add to IMPORTS section
import { ColorPicker } from '#src/features/color-picker-feature';

// Add to componentRegistry array
const componentRegistry = [
  // ... other components ...
  
  {
    id: 'color-picker',
    name: 'Color Picker',
    author: 'Jane Developer',
    description: 'Pick a color and see it displayed with hex code',
    Component: ColorPicker,
  },
];
```

### Step 5: Test

1. Save all files
2. Refresh browser
3. Navigate to Fight Section
4. Find "Color Picker" in dropdown
5. Select and test!

## 🔍 Utility Functions

The registry provides helper functions:

### `getAvailableComponents()`

Returns all registered components.

```javascript
import { getAvailableComponents } from '#src/shared/fight-registry/registry';

const components = getAvailableComponents();
// Returns: [{ id, name, author, description, Component }, ...]
```

### `getComponentById(id)`

Get a specific component by ID.

```javascript
import { getComponentById } from '#src/shared/fight-registry/registry';

const component = getComponentById('example-counter');
// Returns: { id, name, author, description, Component } or null
```

### `validateComponent(component)`

Validate a component registration object.

```javascript
import { validateComponent } from '#src/shared/fight-registry/registry';

const isValid = validateComponent({
  id: 'my-component',
  name: 'My Component',
  author: 'Me',
  description: 'Does things',
  Component: MyComponent,
});
// Returns: true or false
```

### `getComponentsByAuthor(author)`

Get all components by a specific author.

```javascript
import { getComponentsByAuthor } from '#src/shared/fight-registry/registry';

const myComponents = getComponentsByAuthor('Jane Developer');
// Returns: Array of components by that author
```

## 🤝 Team Coordination

### Multiple Developers Adding Components

When multiple developers are adding components simultaneously:

1. **Communicate**: Let team know you're adding a component
2. **Quick add**: Add your import and registration, then commit
3. **Pull first**: Always pull latest changes before adding
4. **Resolve conflicts**: If conflict occurs, it's easy to resolve:
   - Keep all imports
   - Keep all registry entries
   - Ensure no duplicate IDs

### Git Best Practices

```bash
# Before adding your component
git pull origin main

# Add your feature and registry entry
git add src/features/my-feature
git add src/shared/fight-registry/registry.js

# Commit with clear message
git commit -m "Add: My Awesome Component for Fight Section"

# Push
git push origin feature/my-component
```

## 🐛 Troubleshooting

### Component doesn't appear in dropdown

**Check:**
- [ ] Did you save `registry.js`?
- [ ] Is the import path correct?
- [ ] Is your component exported from your feature's `index.js`?
- [ ] Is the ID unique?
- [ ] Are all required fields present?
- [ ] Did you refresh the browser?

### Import errors

**Verify:**
- [ ] Your feature folder exists in `src/features/`
- [ ] Your component is exported in your feature's `index.js`
- [ ] Import uses `#src/features/` prefix
- [ ] Component name matches in import and export
- [ ] No typos in paths or names

### Duplicate ID error

**Solution:**
- Choose a different, unique ID
- Check existing IDs in the registry
- Use descriptive IDs to avoid collisions

## 📊 Current Components

To see all currently registered components, open `registry.js` and look at the `componentRegistry` array.

Example components included:
- **example-counter**: Basic counter with history
- **example-timer**: Countdown timer with controls

## 📚 Additional Resources

- **Main Documentation**: `src/features/course/sections/fight/README.md`
- **Quick Start**: `src/features/course/sections/fight/QUICKSTART.md`
- **Architecture**: `src/features/course/sections/fight/STRUCTURE.md`
- **Template**: `src/features/_template-fight-component/README.md`

## 🎓 Learning Path

1. Study the example components (`example-counter`, `example-timer`)
2. Copy the template feature
3. Build your component
4. Register it here
5. Test in the Fight Section
6. Share with your team!

## ⚠️ Important Notes

- **This is a shared file**: Be respectful when editing
- **Coordinate with team**: Avoid simultaneous edits if possible
- **Keep it clean**: Follow the existing format
- **Test before committing**: Make sure your component works
- **Don't remove others' components**: Only add your own

## 🎯 Summary

**To add a component to Fight Section:**

1. Create feature in `src/features/your-feature/`
2. Build your component following the rules
3. Export from `index.js`
4. **Come here and register** (import + add to array)
5. Test and enjoy!

---

**Questions?** Check the main README or ask your team!

**Ready to register?** Open `registry.js` and add your component!