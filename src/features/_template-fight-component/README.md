# Template Fight Component

This is a template feature for creating components for the Fight Section.

## 🚀 Quick Start

### Step 1: Copy This Folder

```bash
cd src/features
cp -r _template-fight-component my-awesome-feature
cd my-awesome-feature
```

### Step 2: Rename Files

Rename `MyComponent.jsx` to match your component:

```bash
mv MyComponent.jsx AwesomeComponent.jsx
```

### Step 3: Update the Component

Open `AwesomeComponent.jsx` and:

1. Rename the function from `MyComponent` to `AwesomeComponent`
2. Implement your component logic
3. Customize the UI

```jsx
function AwesomeComponent() {
  // Your implementation here
  return (
    <div>
      {/* Your UI here */}
    </div>
  );
}

export default AwesomeComponent;
```

### Step 4: Update index.js

Update the export in `index.js`:

```javascript
export { default as AwesomeComponent } from './AwesomeComponent';
```

### Step 5: Register in Registry

Open `src/shared/fight-registry/registry.js` and:

**Add import:**
```javascript
import { AwesomeComponent } from '#src/features/my-awesome-feature';
```

**Add to registry array:**
```javascript
{
  id: 'my-awesome-component',
  name: 'My Awesome Component',
  author: 'Your Name',
  description: 'A brief description of what your component does',
  Component: AwesomeComponent,
},
```

### Step 6: Test It!

1. Save all files
2. Refresh your browser
3. Navigate to Fight Section
4. Select your component from the dropdown
5. Watch it appear! 🎉

## 📋 Component Rules

### ✅ Must Do

- **Self-contained**: No props required
- **State management**: Use `useState` and `useEffect`
- **Styling**: Use Tailwind CSS classes
- **Cleanup**: Return cleanup functions in `useEffect`
- **Responsive**: Test on different screen sizes

### ❌ Don't Do

- Require props from parent
- Break out of container (avoid `fixed` positioning)
- Create memory leaks (missing cleanup)
- Use external CSS files (unless necessary)
- Make assumptions about parent state

## 💡 Examples to Learn From

Check these features for inspiration:

- **`example-counter`** - Simple state management, event handlers
- **`example-timer`** - useEffect, intervals, cleanup

## 🎨 Template Structure

```
my-awesome-feature/
├── README.md              # This file
├── AwesomeComponent.jsx   # Your component
└── index.js               # Export file
```

## 🔧 Common Patterns

### State Management

```jsx
const [value, setValue] = useState(initialValue);

const handleChange = () => {
  setValue(prevValue => prevValue + 1); // Use functional update
};
```

### Effects with Cleanup

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    // Do something
  }, 1000);

  // Cleanup function
  return () => clearInterval(interval);
}, [dependencies]);
```

### Conditional Styling

```jsx
const getColor = () => {
  if (condition) return "text-green-400";
  return "text-red-400";
};

<div className={`text-2xl ${getColor()}`}>
  Content
</div>
```

### Tailwind Button Patterns

```jsx
// Primary action
<button className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg border-2 border-blue-500/50 hover:border-blue-500 transition-all duration-200 font-semibold">
  Click Me
</button>

// Danger action
<button className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg border-2 border-red-500/50 hover:border-red-500 transition-all duration-200 font-semibold">
  Delete
</button>

// Disabled state
<button 
  disabled={isDisabled}
  className="px-6 py-3 bg-slate-500/20 text-slate-400 rounded-lg border-2 border-slate-500/50 opacity-50 cursor-not-allowed"
>
  Disabled
</button>
```

## 🎯 Component Ideas

### Beginner
- Click counter
- Color picker
- Text reverser
- Random emoji generator

### Intermediate
- Todo list
- Calculator
- Quiz component
- Progress tracker

### Advanced
- Mini games (tic-tac-toe, snake)
- Data visualizations
- API data fetcher
- Animation showcases

## 🐛 Troubleshooting

**Component doesn't appear in dropdown?**
- Check registry.js import and registration
- Ensure unique ID
- Save all files

**Layout breaks?**
- Use `max-w-md` or similar to limit width
- Test in both left and right panels
- Use `overflow-hidden` for long content

**State not updating?**
- Use functional updates: `setValue(prev => prev + 1)`
- Don't mutate state directly
- Check useEffect dependencies

**Memory leaks?**
- Always return cleanup function in useEffect
- Clear intervals, timeouts, and subscriptions

## 📝 Checklist

Before registering your component:

- [ ] Component is self-contained (no props)
- [ ] Uses useState/useEffect appropriately
- [ ] All effects have cleanup functions
- [ ] Styled with Tailwind CSS
- [ ] Tested in both left and right panels
- [ ] Responsive on different screen sizes
- [ ] No console errors
- [ ] Unique component ID chosen
- [ ] Added to registry.js
- [ ] index.js exports component

## 🎓 Learning Resources

- React Hooks: https://react.dev/reference/react
- Tailwind CSS: https://tailwindcss.com/docs
- Example components in this project

## 🤝 Tips

1. **Start simple**: Get basic functionality working first
2. **Copy & modify**: Use example components as starting points
3. **Test frequently**: Select your component after each change
4. **Keep it clean**: Comment your code for others
5. **Have fun**: This is your creative space!

---

Happy coding! 🚀