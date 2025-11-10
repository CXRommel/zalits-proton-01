/**
 * Fight Section - Component Registry
 *
 * This is the SHARED registry where all developers register their components.
 * Each developer creates their component in their own feature folder,
 * then adds an entry here to make it available in the Fight Section.
 *
 * WORKFLOW FOR DEVELOPERS:
 *
 * 1. Create your own feature folder: src/features/your-feature-name/
 * 2. Create your component in that folder: YourComponent.jsx
 * 3. Export it from an index.js in your feature folder
 * 4. Import it here and add to the registry array
 * 5. Your component will automatically appear in the Fight Section!
 *
 * COMPONENT RULES:
 *
 * ✅ Must be a valid React component
 * ✅ Must be self-contained (no props required)
 * ✅ Must manage its own state
 * ✅ Must use Tailwind CSS for styling
 * ✅ Must not break the layout
 * ✅ Must clean up effects properly (useEffect cleanup)
 *
 * REGISTRATION FORMAT:
 * {
 *   id: 'unique-identifier',           // Unique ID (use kebab-case)
 *   name: 'Component Display Name',    // Human-readable name
 *   author: 'Your Name',               // Developer name
 *   description: 'Brief description',  // What does it do?
 *   Component: YourComponent,          // The actual React component
 * }
 */

// ============================================================================
// IMPORTS - Add your component imports here
// ============================================================================

// Example components (provided as reference)
import { CounterComponent } from "#src/features/example-counter";
import { TimerComponent } from "#src/features/example-timer";
import { MenuBillyBlanco } from "#src/features/menu-billy-blanco";
import { MenuRestaurant } from "#src/features/menu-billy-blanco-orlando";

// TODO: Import your component here
// Example:
// import { MyComponent } from '#src/features/my-feature';

// ============================================================================
// COMPONENT REGISTRY - Add your component registration here
// ============================================================================

const componentRegistry = [
  // Example: Counter Component
  {
    id: "example-counter",
    name: "Example Counter",
    author: "System",
    description:
      "A simple counter with increment and decrement buttons. Tracks history and displays statistics.",
    Component: CounterComponent,
  },

  // Example: Timer Component
  {
    id: "example-timer",
    name: "Example Timer",
    author: "System",
    description:
      "A countdown timer with start, pause, reset, and preset functionality. Shows progress bar.",
    Component: TimerComponent,
  },

  {
    id: "menu-billy-blanco",
    name: "Menu Billy Blanco",
    author: "Alison Euridice Montufar Pina",
    description:
      "Menú de restaurante que muestra los platillos disponibles con sus precios e imágenes.",
    Component: MenuBillyBlanco,
  },

  {
    id: "menu-billy-blanco-orlando",
    name: "Menu Billy Blanco",
    author: "Orlando Galvan Vargas",
    description:
      "Diseño de menú de restaurante para visualización de platillos con sus precios",
    Component: MenuRestaurant,
  },

  // TODO: Add your component registration here
  // Example:
  // {
  //   id: 'my-awesome-component',
  //   name: 'My Awesome Component',
  //   author: 'Your Name',
  //   description: 'This component does something amazing!',
  //   Component: MyComponent,
  // },
];

// ============================================================================
// UTILITY FUNCTIONS - Don't modify these
// ============================================================================

/**
 * Get all available components
 * @returns {Array} Array of registered components
 */
export function getAvailableComponents() {
  return componentRegistry;
}

/**
 * Get a specific component by ID
 * @param {string} id - Component ID
 * @returns {Object|null} Component object or null if not found
 */
export function getComponentById(id) {
  return componentRegistry.find((component) => component.id === id) || null;
}

/**
 * Validate a component registration
 * @param {Object} component - Component object to validate
 * @returns {boolean} Whether the component is valid
 */
export function validateComponent(component) {
  const required = ["id", "name", "author", "description", "Component"];
  const hasAllFields = required.every((field) =>
    component.hasOwnProperty(field)
  );
  const isComponentValid = typeof component.Component === "function";

  return hasAllFields && isComponentValid;
}

/**
 * Get components by author
 * @param {string} author - Author name
 * @returns {Array} Array of components by that author
 */
export function getComponentsByAuthor(author) {
  return componentRegistry.filter((component) => component.author === author);
}
