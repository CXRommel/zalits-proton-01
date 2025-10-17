# Course Feature - Documentación

Este feature implementa la página principal del curso Zalits Proton con una arquitectura modular y educativa.

## 📁 Estructura de Archivos

```
src/features/course/
├── sections/                    # Secciones principales de la página
│   ├── HeroSection.jsx         # Sección de bienvenida con logo, descripción, tech stack
│   └── TeamSection.jsx         # Sección del equipo ByteForge con tarjetas interactivas
│
├── ui/                         # Componentes reutilizables de interfaz
│   ├── Button.jsx              # Botón con variantes y tamaños
│   ├── Card.jsx                # Tarjeta con composición (Header, Body, Footer)
│   ├── Badge.jsx               # Insignia con colores y tamaños
│   ├── Avatar.jsx              # Avatar con imagen/fallback y gradientes
│   └── index.js                # Exportaciones centralizadas
│
├── shared/                     # Código compartido entre componentes
│   ├── hooks/                  # Hooks personalizados
│   │   ├── useModal.js         # Gestión de estado para modals
│   │   ├── useAnimation.js     # Animaciones temporales
│   │   ├── useInteractiveCard.js # Interacciones divertidas en tarjetas
│   │   └── index.js            # Exportaciones de hooks
│   │
│   ├── hoc/                    # Higher-Order Components
│   │   ├── withClickEffects.jsx # HOC para efectos de ripple en clics
│   │   └── index.js            # Exportaciones de HOCs
│   │
│   └── utils/                  # Utilidades y funciones auxiliares
│       ├── phraseUtils.js      # Manejo de frases aleatorias personalizadas
│       └── index.js            # Exportaciones de utilidades
│
├── data/                       # Datos y configuración
│   ├── team.json              # Información básica del equipo ByteForge
│   ├── phrases.json           # Frases aleatorias organizadas por categorías
│   └── PHRASES_SYSTEM.md      # Documentación del sistema de frases
│
├── CoursePage.jsx             # Componente principal que compone las secciones
├── index.js                   # Exportaciones del feature
└── README.md                  # Este archivo de documentación
```

## 🎯 Conceptos Educativos Demostrados

### 1. **Arquitectura de Componentes**

- **Composición**: Componentes pequeños que se combinan para formar componentes más grandes
- **Separación de responsabilidades**: Lógica, presentación y datos separados
- **Reutilización**: Componentes UI que se pueden usar en múltiples lugares

### 2. **Hooks Personalizados**

- `useModal`: Gestión de estado para modals con funciones descriptivas
- `useAnimation`: Manejo de animaciones temporales con cleanup automático
- `useInteractiveCard`: Lógica compleja de interacciones con estado múltiple

### 3. **Higher-Order Components (HOCs)**

- `withClickEffects`: Añade efectos de ripple a cualquier componente
- Demuestra el patrón HOC para funcionalidad transversal

### 4. **Patrones de Código Limpio**

- **Destructuring**: Extracción clara de propiedades
- **Naming conventions**: Nombres descriptivos y consistentes
- **Comments**: Documentación educativa para estudiantes
- **Barrel exports**: Importaciones centralizadas

### 5. **Gestión de Estado**

- Estado local con `useState`
- Estado temporal con timeouts
- Cleanup de efectos secundarios

### 6. **Sistema de Frases Dinámicas**

- **phraseUtils.js**: Utilidades para manejo de frases aleatorias
- **phrases.json**: Frases organizadas por categorías (programming, creativity, etc.)
- **Personalización por miembro**: Cada miembro tiene categorías específicas asignadas
- **Algoritmo de selección**: Combina frases generales con frases categorizadas
- **Funciones puras**: Lógica separada y reutilizable para manejo de contenido

## 🚀 Cómo Usar

### Importar el feature completo:

```jsx
import { CoursePage } from "../features/course";
```

### Importar componentes específicos:

```jsx
import { Button, Card, Badge, Avatar } from "../features/course/ui";
import { useModal, useAnimation } from "../features/course/shared/hooks";
import { withClickEffects } from "../features/course/shared/hoc";
import {
  getRandomPhraseForMember,
  getPhraseStats,
} from "../features/course/shared/utils";
```

### Usar componentes UI:

```jsx
// Botón con variantes
<Button variant="primary" size="lg" onClick={handleClick}>
  Acción Principal
</Button>

// Tarjeta con composición
<Card>
  <Card.Header>
    <h3>Título</h3>
  </Card.Header>
  <Card.Body>
    <p>Contenido</p>
  </Card.Body>
  <Card.Footer>
    <Button>Acción</Button>
  </Card.Footer>
</Card>
```

### Usar hooks personalizados:

```jsx
function MyComponent() {
  const { isOpen, openModal, closeModal } = useModal();
  const { isAnimating, triggerAnimation } = useAnimation();

  return (
    <Button
      onClick={() => {
        openModal();
        triggerAnimation();
      }}
    >
      Abrir Modal
    </Button>
  );
}
```

### Usar HOCs:

```jsx
const ButtonWithEffects = withClickEffects(Button)

// El botón ahora tiene efectos de ripple automáticamente
<ButtonWithEffects>¡Haz clic!</ButtonWithEffects>
```

### Usar sistema de frases:

```jsx
import { getRandomPhraseForMember, getPhraseStats } from "../shared/utils";

function MemberCard({ memberName }) {
  const [phrase, setPhrase] = useState("");

  const handlePartyMode = () => {
    // Obtener frase personalizada para el miembro
    const newPhrase = getRandomPhraseForMember(memberName);
    setPhrase(`${newPhrase} 🎊`);
  };

  // Ver estadísticas de frases disponibles
  const stats = getPhraseStats(memberName);
  console.log(`${memberName} tiene ${stats.totalPhrases} frases disponibles`);

  return <div onClick={handlePartyMode}>{phrase && <p>{phrase}</p>}</div>;
}
```

## 📚 Para Estudiantes

### Conceptos Clave a Estudiar:

1. **Component Composition**: Cómo combinar componentes pequeños
2. **Custom Hooks**: Extraer lógica reutilizable
3. **HOC Pattern**: Funcionalidad transversal
4. **State Management**: Gestión de estado local y temporal
5. **CSS-in-JS**: Estilos dinámicos con JavaScript
6. **Event Handling**: Manejo de eventos del mouse y teclado

### Recursos Adicionales:

- [React Hooks Documentation](https://react.dev/reference/react)
- [HOC Pattern](https://legacy.reactjs.org/docs/higher-order-components.html)
- [Component Composition](https://react.dev/learn/passing-props-to-a-component)
- [CSS-in-JS with styled-jsx](https://github.com/vercel/styled-jsx)
