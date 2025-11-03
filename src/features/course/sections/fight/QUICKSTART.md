# Fight Section - Quick Start Guide

Get started in 5 minutes! 🚀

## 🎯 What You Need to Know

The Fight Section lets you create components and compare them side-by-side. Each developer creates their component in their own feature folder!

## ⚡ Quick Start (30 seconds)

1. **See it in action**: Open your app and scroll to the Fight Section
2. **Try the examples**: Select "Example Counter" and "Example Timer" from the dropdowns
3. **Watch them work**: Click buttons, interact, compare!

## 🎨 Create Your First Component (5 minutes)

### Step 1: Copy the Template Feature

```bash
cd src/features
cp -r _template-fight-component my-first-feature
cd my-first-feature
```

### Step 2: Rename and Edit Your Component

```bash
# Rename the component file
mv MyComponent.jsx MyFirstComponent.jsx
```

Open `MyFirstComponent.jsx` and customize it:

```jsx
import { useState } from "react";

function MyFirstComponent() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      <h3 className="text-3xl font-bold text-white">
        My First Component! 🎉
      </h3>
      
      <div className="text-6xl font-bold text-purple-400">
        {clicks}
      </div>
      
      <button
        onClick={() => setClicks(clicks + 1)}
        className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-semibold"
      >
        Click me!
      </button>
    </div>
  );
}

export default MyFirstComponent;
```

### Step 3: Update Your Feature's index.js

```javascript
export { default as MyFirstComponent } from './MyFirstComponent';
```

### Step 4: Register It in the Shared Registry

Open `src/shared/fight-registry/registry.js` and add:

```javascript
// 1. Import at the top (in the IMPORTS section)
import { MyFirstComponent } from '#src/features/my-first-feature';

// 2. Add to the componentRegistry array
const componentRegistry = [
  // ... other components ...
  {
    id: 'my-first-component',
    name: 'My First Component',
    author: 'Your Name',
    description: 'My awesome first component!',
    Component: MyFirstComponent,
  },
];
```

### Step 5: See It Live!

1. Save all files
2. Refresh your browser
3. Find "My First Component" in the dropdown
4. Select it and watch it appear! 🎊

## 🎓 Learn from Examples

Check out these feature folders to learn different techniques:

- **`src/features/example-counter/`** - Learn: state, buttons, styling
- **`src/features/example-timer/`** - Learn: useEffect, intervals, cleanup

## 📝 The Rules (Keep These in Mind)

✅ **DO:**
- Create your component in your own feature folder
- Use `useState` and `useEffect`
- Make it self-contained (no props)
- Use Tailwind CSS classes
- Clean up intervals/listeners
- Register in the shared registry

❌ **DON'T:**
- Put your component in someone else's feature
- Require props from parent
- Break out of the container
- Make memory leaks
- Use fixed positioning

## 🗂️ Folder Structure

```
src/
├── features/
│   ├── _template-fight-component/    ← Copy this!
│   ├── example-counter/               ← Example to learn from
│   ├── example-timer/                 ← Another example
│   ├── my-first-feature/              ← Your feature goes here
│   └── your-other-feature/            ← You can create multiple!
└── shared/
    └── fight-registry/
        └── registry.js                ← Register here only!
```

## 💡 Component Ideas

Start simple, then level up:

**Beginner:**
- Click counter
- Color changer
- Text input echo

**Intermediate:**
- Todo list
- Calculator
- Random quote generator

**Advanced:**
- Mini game (tic-tac-toe)
- Data visualization
- Animation showcase

## 🔥 Pro Tips

1. **Copy the template**: Always start from `_template-fight-component`
2. **One feature per developer**: Keep your code isolated
3. **Test as you go**: Select your component after each change
4. **Use the examples**: Learn by studying example-counter and example-timer
5. **Keep it simple**: Start small, add features later
6. **Have fun**: This is your creative playground!

## 🆘 Troubleshooting

**Component doesn't show in dropdown?**
→ Check you saved `registry.js` and imported correctly
→ Make sure your component ID is unique
→ Verify your feature exports the component in index.js

**Component breaks the page?**
→ Use `max-w-md` to limit width: `<div className="max-w-md">`
→ Avoid `fixed` or `absolute` positioning

**State not updating?**
→ Use `setCount(count + 1)` not `count = count + 1`
→ Use functional updates: `setCount(prev => prev + 1)`

**Need help?**
→ Read the full README.md in the fight section
→ Check example-counter and example-timer features
→ Ask your team!

## 🎮 Challenge Yourself

Try building these in order:

1. ✅ Click counter (you just did this!)
2. ⬜ Button that changes color on each click
3. ⬜ Input field that displays what you type
4. ⬜ Todo list with add/remove
5. ⬜ Timer that counts up
6. ⬜ Your own creative idea!

## 📁 Your Feature Checklist

Before registering your component:

- [ ] Created feature folder in `src/features/`
- [ ] Component file created and working
- [ ] `index.js` exports your component
- [ ] Imported in `registry.js`
- [ ] Added to `componentRegistry` array
- [ ] Unique ID chosen
- [ ] Tested in both left and right panels
- [ ] No console errors

## 📚 Next Steps

- Read `fight/README.md` for detailed documentation
- Check `fight/STRUCTURE.md` to understand the architecture
- Explore example feature folders
- Create something awesome and share with your team!

---

**Ready? Copy that template and start coding! 🚀**