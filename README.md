# Zalits Proton

Zalits Proton es un proyecto de estudio para organizar una aplicación con React desplegando datos del API de Zalits. Este proyecto servirá como base de aprendizaje para explorar diferentes conceptos y patrones de desarrollo frontend moderno.

## 📋 Pasos del Proyecto

Este proyecto seguirá un enfoque incremental, donde cada paso añadirá nueva funcionalidad y complejidad. Los pasos se irán documentando conforme el proyecto evolucione.

### Paso 1: Configuración del Proyecto desde Cero

En este primer paso se establece la base del proyecto utilizando las herramientas modernas de desarrollo frontend.

**Stack tecnológico:**

- ⚡ **Vite** - Build tool y servidor de desarrollo
- ⚛️ **React** - Biblioteca de interfaz de usuario
- 📦 **pnpm** - Gestor de paquetes rápido y eficiente
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- ✨ **Prettier** - Formateador de código
- 📝 **EditorConfig** - Configuración consistente de editores
- 🔍 **ESLint** - Linter para calidad de código

**Configuración inicial:**

1. **Crear el proyecto con Vite:**

   ```bash
   pnpm create vite zalits-proton-01 --template react
   cd zalits-proton-01
   ```

2. **Instalar dependencias:**

   ```bash
   pnpm install
   ```

3. **Ejecutar el proyecto:**

   ```bash
   pnpm dev
   ```

4. **Scripts disponibles:**
   - `pnpm dev` - Servidor de desarrollo
   - `pnpm build` - Construir para producción
   - `pnpm preview` - Vista previa de la build de producción
   - `pnpm lint` - Ejecutar linting
   - `pnpm lint:fix` - Ejecutar linting y corregir errores automáticamente
   - `pnpm format` - Formatear código con Prettier
   - `pnpm format:check` - Verificar formato sin modificar archivos

**Estructura del proyecto:**

```
zalits-proton-01/
├── public/           # Archivos estáticos
├── src/             # Código fuente
│   ├── assets/      # Recursos (imágenes, iconos, etc.)
│   ├── App.jsx      # Componente principal
│   ├── App.css      # Estilos del componente principal
│   ├── main.jsx     # Punto de entrada de la aplicación
│   └── index.css    # Estilos globales
├── index.html       # Template HTML
├── package.json     # Configuración del proyecto
├── vite.config.js   # Configuración de Vite
└── README.md        # Documentación del proyecto
```

---

_Este README se actualizará conforme el proyecto crezca en complejidad y se añadan nuevas funcionalidades._
