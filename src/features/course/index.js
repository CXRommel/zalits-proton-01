/**
 * Course Feature - Exportación principal
 *
 * Este archivo centraliza las exportaciones del feature de curso
 * siguiendo el patrón de barrel exports para facilitar las importaciones.
 *
 * Estructura del feature:
 * ├── sections/          - Secciones principales de la página
 * │   ├── HeroSection.jsx
 * │   └── TeamSection.jsx
 * ├── ui/               - Componentes reutilizables de interfaz
 * │   ├── Button.jsx
 * │   ├── Card.jsx
 * │   ├── Badge.jsx
 * │   └── Avatar.jsx
 * ├── shared/           - Hooks, HOCs y utilidades compartidas
 * │   ├── hooks/
 * │   └── hoc/
 * ├── data/             - Archivos de datos y configuración
 * │   └── team.json
 * ├── CoursePage.jsx    - Componente principal
 * └── index.js          - Exportaciones (este archivo)
 */

// Exportación principal del feature
export { default as CoursePage } from "#src/features/course/CoursePage";

// Secciones principales
export { default as HeroSection } from "#src/features/course/sections/HeroSection";
export { default as TeamSection } from "#src/features/course/sections/TeamSection";
