# Zalits Proton

Zalits Proton es un proyecto de estudio para organizar una aplicación con React desplegando datos del API de Zalits. Este proyecto servirá como base de aprendizaje para explorar diferentes conceptos y patrones de desarrollo frontend moderno.

## 📋 Pasos del Proyecto

Este proyecto seguirá un enfoque incremental, donde cada paso añadirá nueva funcionalidad y complejidad. Los pasos se irán documentando conforme el proyecto evolucione.

### Paso 1: Configuración del Proyecto desde Cero

En este primer paso se establece la base del proyecto utilizando las herramientas modernas de desarrollo frontend.

**Stack tecnológico:**

- ⚡ **[Vite](https://vitejs.dev)** - Build tool de próxima generación con HMR ultra rápido y servidor de desarrollo optimizado
- ⚛️ **[React](https://react.dev)** - Biblioteca JavaScript para construir interfaces de usuario con componentes reutilizables
- 📦 **[pnpm](https://pnpm.io)** - Gestor de paquetes rápido, eficiente en espacio y con strict dependency management
- 🎨 **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utility-first para desarrollo rápido con clases predefinidas
- ✨ **[Prettier](https://prettier.io)** - Formateador de código opinionado que garantiza consistencia en el estilo
- 📝 **[EditorConfig](https://editorconfig.org)** - Configuración universal que mantiene consistencia entre diferentes editores
- 🔍 **[ESLint](https://eslint.org)** - Linter para identificar y reportar patrones en código JavaScript/React

## 🚀 Inicio Rápido

### **Requisitos previos:**

- **Node.js** 18+ - [Descargar aquí](https://nodejs.org/)
- **pnpm** - Instalar con: `npm install -g pnpm`
- **Git** - [Descargar aquí](https://git-scm.com/)

### **Configuración inicial:**

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/CXRommel/zalits-proton-01.git
   cd zalits-proton-01
   ```

2. **Instalar dependencias:**

   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno:**

   ```bash
   # Copiar el archivo de ejemplo
   cp .env.example .env

   # Editar las variables según tu configuración
   # El archivo .env contiene:
   # VITE_PORT=5173  # Puerto de desarrollo (por defecto: 5173)
   ```

4. **Ejecutar el proyecto en desarrollo:**

   ```bash
   pnpm dev
   ```

5. **¡Listo!** El proyecto estará corriendo en `http://localhost:5173` (o el puerto configurado en `.env`)

6. **Scripts disponibles para desarrollo:**
   - `pnpm dev` - Servidor de desarrollo con hot reload
   - `pnpm build` - Construir para producción
   - `pnpm preview` - Vista previa de la build de producción
   - `pnpm lint` - Ejecutar linting y verificar calidad de código
   - `pnpm lint:fix` - Ejecutar linting y corregir errores automáticamente
   - `pnpm format` - Formatear código con Prettier
   - `pnpm format:check` - Verificar formato sin modificar archivos

7. **Comandos de prueba rápida:**
   ```bash
   # Verificar que todo está funcionando
   pnpm lint
   pnpm format:check
   pnpm build
   ```

## � Flujo de Trabajo con Git

### **Reglas de Creación de Branches**

Para mantener un flujo de trabajo organizado y consistente, seguimos estas reglas estrictas para la creación de ramas:

#### **📋 Nomenclatura de Branches:**

**Formato obligatorio:**

```bash
features/{usuario}/{nombre-del-branch}
```

#### **✅ Ejemplos correctos:**

```bash
features/cxrommel/add-user-authentication
features/maria/implement-dark-mode
features/jose/fix-mobile-responsive
features/ana/update-api-endpoints
features/carlos/optimize-performance
```

#### **❌ Ejemplos incorrectos:**

```bash
feature/user-auth          # ❌ Falta usuario
add-dark-mode             # ❌ No sigue el formato
features/implement-api    # ❌ Falta usuario
cxrommel/new-feature      # ❌ Falta prefijo features/
```

### **🚀 Comandos para Crear y Trabajar con Branches:**

1. **Crear y cambiar a nueva rama:**

   ```bash
   git checkout -b features/{tu-usuario}/{nombre-descriptivo}

   # Ejemplo:
   git checkout -b features/cxrommel/add-pokemon-details
   ```

2. **Confirmar que estás en la rama correcta:**

   ```bash
   git branch --show-current
   ```

3. **Hacer commits (puedes hacer tantos como necesites):**

   ```bash
   git add .
   git commit -m "feat: add pokemon detail modal component"
   git commit -m "style: improve modal responsive design"
   git commit -m "fix: resolve pokemon api loading issues"
   ```

4. **Subir tu rama al repositorio:**

   ```bash
   git push origin features/{tu-usuario}/{nombre-del-branch}

   # Ejemplo:
   git push origin features/cxrommel/add-pokemon-details
   ```

### **📝 Reglas de Pull Requests (PR's)**

#### **🎯 Configuración de PR's:**

- **Branch destino**: Todos los PR's deben apuntar a `main` **SIEMPRE**
- **Commits**: Puedes subir tantos commits como necesites en tu rama
- **Revisión**: Los PR's requieren revisión antes de merge
- **Formato**: Usar títulos descriptivos y claros

#### **📋 Plantilla para PR's:**

```markdown
## Descripción

Breve descripción de los cambios realizados

## Tipo de cambio

- [ ] 🐛 Bug fix
- [ ] ✨ Nueva feature
- [ ] 💄 Cambios de UI/estilo
- [ ] ♻️ Refactoring
- [ ] 📝 Documentación
- [ ] ⚡ Mejora de performance

## Cambios realizados

- Cambio 1
- Cambio 2
- Cambio 3

## Testing

- [ ] Se realizaron pruebas locales
- [ ] Se verificó el build (`pnpm build`)
- [ ] Se verificó el linting (`pnpm lint`)
- [ ] Se verificó el formato (`pnpm format:check`)

## Screenshots (si aplica)

Agregar capturas de pantalla de los cambios visuales
```

### **🔄 Flujo de Trabajo Completo:**

1. **Sincronizar con main:**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Crear nueva rama:**

   ```bash
   git checkout -b features/{tu-usuario}/{feature-name}
   ```

3. **Desarrollar y commitear:**

   ```bash
   # Hacer cambios...
   git add .
   git commit -m "descripción del cambio"
   # Repetir según necesites
   ```

4. **Verificar calidad antes del push:**

   ```bash
   pnpm lint
   pnpm format:check
   pnpm build
   ```

5. **Subir cambios:**

   ```bash
   git push origin features/{tu-usuario}/{feature-name}
   ```

6. **Crear PR en GitHub:**
   - Ir a GitHub → Abrir Pull Request
   - Base branch: `main`
   - Compare branch: tu rama `features/{usuario}/{nombre}`
   - Llenar la descripción usando la plantilla
   - Solicitar revisión del equipo

7. **Después del merge:**
   ```bash
   git checkout main
   git pull origin main
   git branch -d features/{tu-usuario}/{feature-name}  # Borrar rama local
   ```

### **⚠️ Reglas Importantes:**

- ✅ **Siempre** crear branches desde `main` actualizado
- ✅ **Todos los PR's** van dirigidos a `main`
- ✅ **Nombre descriptivo** para branches y commits
- ✅ **Testing local** antes de crear PR
- ❌ **Nunca** hacer push directo a `main`
- ❌ **Nunca** mergear tu propio PR sin revisión
- ❌ **No crear** branches sin seguir el formato

## �🏗️ Arquitectura del Proyecto

### **Estructura basada en Features**

El proyecto utiliza una arquitectura basada en características (features), donde cada funcionalidad principal se organiza de manera independiente y auto-contenida.

```
zalits-proton-01/
├── .editorconfig          # Configuración de editores
├── .prettierrc           # Configuración de Prettier
├── .prettierignore       # Archivos ignorados por Prettier
├── .vscode/              # Configuración de VS Code
│   ├── settings.json     # Settings del workspace
│   └── extensions.json   # Extensiones recomendadas
├── public/               # Archivos estáticos
├── src/                  # Código fuente principal
│   ├── main.jsx          # Punto de entrada de React
│   ├── App.jsx           # Componente raíz de la aplicación
│   ├── index.css         # Estilos globales
│   ├── core/             # Funcionalidades del núcleo (vacío por ahora)
│   └── features/         # Características organizadas por dominio
│       └── course/       # Feature: Curso/Información del proyecto
│           ├── index.js              # Barrel export del feature
│           ├── CoursePage.jsx        # Página principal del curso
│           ├── README.md             # Documentación específica
│           ├── assets/               # Recursos específicos del curso
│           │   └── byteforge.png     # Logo del equipo ByteForge
│           ├── data/                 # Datos y configuración
│           │   ├── team.json         # Información del equipo
│           │   └── phrases.json      # Frases divertidas para efectos
│           ├── sections/             # Secciones de página principales
│           │   ├── HeroSection.jsx   # Sección hero con logo y tech stack
│           │   └── TeamSection.jsx   # Sección del equipo con tarjetas
│           ├── ui/                   # Componentes UI reutilizables
│           │   ├── index.js          # Barrel exports de UI
│           │   ├── Avatar.jsx        # Componente de avatar
│           │   ├── Badge.jsx         # Componente de badge/etiqueta
│           │   ├── Button.jsx        # Componente de botón
│           │   ├── Card.jsx          # Componente de tarjeta
│           │   └── Modal.jsx         # Componente de modal
│           └── shared/               # Funcionalidades compartidas
│               ├── hooks/            # Custom hooks
│               │   ├── index.js      # Barrel exports de hooks
│               │   ├── useAnimation.jsx        # Hook para animaciones
│               │   ├── useInteractiveCard.jsx # Hook para interacciones
│               │   ├── useModal.jsx            # Hook para modales
│               │   └── useTitleRotation.jsx   # Hook para rotación de títulos
│               ├── hoc/              # Higher-Order Components
│               │   ├── index.js      # Barrel exports de HOCs
│               │   └── withClickEffects.jsx   # HOC para efectos de clic
│               └── utils/            # Utilidades y helpers
│                   ├── index.js      # Barrel exports de utils
│                   ├── imageUtils.js # Utilidades para imágenes/APIs
│                   └── phraseUtils.js # Utilidades para frases
├── index.html            # Template HTML principal
├── package.json          # Configuración del proyecto y dependencias
├── vite.config.js        # Configuración de Vite
├── eslint.config.js      # Configuración de ESLint
└── README.md             # Documentación del proyecto
```

### **🎯 Ejemplo de Feature: `course`**

El feature `course` demuestra la organización modular del proyecto:

#### **📁 Estructura del Feature:**

- **`CoursePage.jsx`** - Componente principal que orquesta todas las secciones
- **`sections/`** - Secciones grandes de la página (Hero, Team, etc.)
- **`ui/`** - Componentes de interfaz reutilizables específicos del dominio
- **`shared/`** - Lógica compartida entre componentes del feature
  - **`hooks/`** - Custom hooks para estado y efectos
  - **`hoc/`** - Higher-Order Components para funcionalidad transversal
  - **`utils/`** - Funciones de utilidad y helpers
- **`data/`** - Archivos de configuración y datos estáticos
- **`assets/`** - Recursos multimedia específicos del feature

#### **🔄 Flujo de datos:**

1. **`CoursePage.jsx`** importa y renderiza las secciones principales
2. **`sections/`** utilizan componentes de **`ui/`** para construir la interfaz
3. **`shared/hooks/`** manejan estado y efectos complejos
4. **`shared/utils/`** proporcionan funcionalidades como APIs y formateo
5. **`data/`** suministra información estática estructurada

#### **🎨 Características implementadas:**

- **Interfaz interactiva** con efectos de clic y animaciones
- **Integración con APIs externas** (PokeAPI para avatares)
- **Sistema de modales** para información detallada del tech stack
- **Efectos visuales** con animaciones CSS y transiciones
- **Responsive design** con Tailwind CSS

## ⚙️ Herramientas de Desarrollo

### **Configuración de Variables de Entorno:**

El proyecto utiliza variables de entorno para configurar aspectos como el puerto de desarrollo y futuras configuraciones de APIs.

#### **Configuración inicial:**

1. **Copiar el archivo de ejemplo:**

   ```bash
   cp .env.example .env
   ```

2. **Configurar las variables necesarias:**
   ```bash
   # .env (NO incluido en el repositorio)
   VITE_PORT=5173                          # Puerto de desarrollo
   # VITE_API_URL=http://localhost:3000    # URL de API (futuro)
   # VITE_APP_TITLE=Zalits Proton Course  # Título de la app (futuro)
   ```

#### **Variables disponibles:**

| Variable       | Descripción                    | Valor por defecto | Requerida |
| -------------- | ------------------------------ | ----------------- | --------- |
| `VITE_PORT`    | Puerto del servidor desarrollo | `5173`            | No        |
| `VITE_API_URL` | URL base de la API (futuro)    | -                 | No        |

#### **Archivos de entorno:**

- **`.env`** - Variables locales (gitignoreado, no se incluye en el repo)
- **`.env.example`** - Plantilla con variables requeridas (incluido en el repo)
- **`.env.local`** - Variables locales adicionales (gitignoreado)

> **⚠️ Importante:** Nunca incluyas archivos `.env` en el repositorio. Solo el archivo `.env.example` debe estar versionado como referencia.

### **Configuración de Calidad de Código:**

- **`.editorconfig`** - Configuración universal para editores (indentación, encoding, line endings)
- **`.prettierrc`** - Reglas de formateo automático de código
- **`.prettierignore`** - Archivos excluidos del formateo
- **`eslint.config.js`** - Configuración de linting para React y JavaScript

### **Configuración de VS Code:**

- **`.vscode/settings.json`** - Configuración del workspace (formateo automático, integración con Prettier)
- **`.vscode/extensions.json`** - Extensiones recomendadas para el proyecto

### **Configuración de Path Aliases:**

- **`vite.config.js`** - Configuración de alias `#src/*` para imports absolutos
- **`jsconfig.json`** - Configuración de IDE para reconocer los aliases

**Ejemplo de uso de aliases:**

```javascript
// ❌ Imports relativos (antes)
import { Button } from "../../../ui";
import teamData from "../../data/team.json";

// ✅ Imports con alias (ahora)
import { Button } from "#src/features/course/ui";
import teamData from "#src/features/course/data/team.json";
```

### **Stack detallado con características:**

| Herramienta      | Función         | Características Clave                      | Documentación                                |
| ---------------- | --------------- | ------------------------------------------ | -------------------------------------------- |
| **Vite**         | Build Tool      | HMR instantáneo, ES modules, plugins       | [vitejs.dev](https://vitejs.dev)             |
| **React**        | UI Library      | Virtual DOM, Hooks, Components             | [react.dev](https://react.dev)               |
| **pnpm**         | Package Manager | Disk efficient, Fast, Strict               | [pnpm.io](https://pnpm.io)                   |
| **Tailwind**     | CSS Framework   | Utility-first, JIT, Responsive             | [tailwindcss.com](https://tailwindcss.com)   |
| **Prettier**     | Code Formatter  | Opinionated, Auto-format, Multi-language   | [prettier.io](https://prettier.io)           |
| **EditorConfig** | Editor Config   | Cross-editor, Consistent style             | [editorconfig.org](https://editorconfig.org) |
| **ESLint**       | Code Linter     | Error detection, Code quality, React rules | [eslint.org](https://eslint.org)             |

---

_Este README se actualizará conforme el proyecto crezca en complejidad y se añadan nuevas funcionalidades._
