import { useState } from "react";
import { useModal, useAnimation } from "#src/features/course/shared/hooks";
import { Button } from "#src/features/course/ui";
import Modal from "#src/features/course/ui/Modal";

function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <Logo />
        <Description />
        <TechStack />
        <CallToActionButtons />
        <StepCounter />
      </div>

      <FloatingElements />
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=4800"
        alt="Coding workspace"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-slate-900/70"></div>
    </div>
  );
}

function Logo() {
  const { isAnimating, triggerAnimation } = useAnimation();
  const [logoClicks, setLogoClicks] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoClick = () => {
    setLogoClicks((prev) => prev + 1);
    triggerAnimation();

    if (logoClicks >= 2) {
      setIsSpinning(true);
      setTimeout(() => {
        setIsSpinning(false);
        setLogoClicks(0);
      }, 2000);
    }
  };

  return (
    <div className="mb-8">
      <div
        onClick={handleLogoClick}
        className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 cursor-pointer transition-all duration-300 hover:scale-110 p-2
          ${isAnimating ? "animate-pulse" : ""}
          ${isSpinning ? "animate-spin" : ""}
        `}
      >
        <img
          src="/logo.png"
          alt="Zalits Proton Logo"
          className={`w-full h-full object-contain rounded-full transition-all duration-300 ${
            isSpinning ? "animate-bounce" : ""
          }`}
        />
      </div>

      <h1
        className={`text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-300 ${
          isSpinning ? "animate-pulse" : ""
        }`}
      >
        Zalits{" "}
        <span
          className={`bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ${
            isSpinning ? "animate-bounce" : ""
          }`}
        >
          Proton
        </span>
      </h1>

      {logoClicks > 0 && logoClicks < 3 && (
        <p className="text-sm text-gray-400 animate-pulse">
          ¡Haz clic {3 - logoClicks} vez{3 - logoClicks !== 1 ? "es" : ""} más
          en el logo! 🎯
        </p>
      )}
    </div>
  );
}

function Description() {
  return (
    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
      Una aplicación de estudio moderna construida con las últimas tecnologías
      web. Explora, aprende y conecta con el equipo detrás del proyecto.
    </p>
  );
}

function TechStack() {
  const [selectedTech, setSelectedTech] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  const technologies = [
    {
      name: "⚡ Vite",
      color: "text-cyan-400",
      description: "Build tool de próxima generación para desarrollo frontend",
      version: "v7.1.10",
      features: [
        "Inicio ultra rápido (< 500ms)",
        "Hot Module Replacement instantáneo",
        "Optimizado para ES modules nativos",
        "Soporte para TypeScript sin configuración",
        "Plugins extensibles",
        "Build optimizado con Rollup",
      ],
      benefits: [
        "Desarrollo 10x más rápido que Webpack",
        "Menor uso de memoria",
        "Mejor experiencia de desarrollo",
        "Builds de producción optimizadas",
      ],
      usedFor: [
        "Servidor de desarrollo",
        "Build de producción",
        "Hot reload",
        "Optimización de assets",
      ],
      commands: [
        "pnpm dev - Servidor de desarrollo",
        "pnpm build - Build de producción",
        "pnpm preview - Preview de build",
      ],
      website: "https://vitejs.dev",
      docs: "https://vitejs.dev/guide/",
      why: "Vite revoluciona el desarrollo frontend con tiempos de inicio instantáneos y actualizaciones en caliente súper rápidas. En este proyecto maneja el servidor de desarrollo y la compilación.",
    },
    {
      name: "⚛️ React",
      color: "text-blue-400",
      description: "Biblioteca JavaScript para construir interfaces de usuario",
      version: "v19.1.1",
      features: [
        "Virtual DOM para performance",
        "Componentes reutilizables",
        "Hooks para manejo de estado",
        "JSX para sintaxis declarativa",
        "Unidirectional data flow",
        "Server-side rendering",
      ],
      benefits: [
        "Ecosistema maduro y extenso",
        "Comunidad activa",
        "Performance optimizada",
        "Desarrollado por Meta",
        "Documentación excelente",
      ],
      usedFor: [
        "Componentes de UI interactivos",
        "Manejo de estado local",
        "Ciclo de vida de componentes",
        "Event handling",
      ],
      commands: [
        "Hooks: useState, useEffect, useCallback",
        "JSX para templating",
        "Props para comunicación",
      ],
      website: "https://react.dev",
      docs: "https://react.dev/learn",
      why: "React es la biblioteca más popular para crear interfaces modernas, reactivas y escalables. En este proyecto gestiona toda la interfaz de usuario con componentes como TeamSection y HeroSection.",
    },
    {
      name: "📦 pnpm",
      color: "text-orange-400",
      description: "Gestor de paquetes rápido y eficiente",
      version: "v10.7.0",
      features: [
        "Instalaciones hasta 2x más rápidas",
        "Ahorro de 50-80% de espacio en disco",
        "Strict dependency management",
        "Monorepo support nativo",
        "Content-addressable storage",
        "Symlink-based node_modules",
      ],
      benefits: [
        "Menor uso de espacio en disco",
        "Instalaciones más rápidas",
        "Previene phantom dependencies",
        "Mejor cache global",
        "Experiencia consistente",
      ],
      usedFor: [
        "Gestión de dependencias",
        "Scripts de desarrollo",
        "Cache global eficiente",
        "Workspaces para monorepos",
      ],
      commands: [
        "pnpm install - Instalar dependencias",
        "pnpm add <pkg> - Agregar paquete",
        "pnpm dev - Ejecutar scripts",
      ],
      website: "https://pnpm.io",
      docs: "https://pnpm.io/motivation",
      why: "pnpm es hasta 2x más rápido que npm y ahorra gigabytes de espacio en disco mediante enlaces simbólicos. En este proyecto gestiona todas las dependencias de forma eficiente.",
    },
    {
      name: "🎨 Tailwind",
      color: "text-purple-400",
      description: "Framework CSS utility-first para desarrollo rápido",
      version: "v4.1.14",
      features: [
        "Utility classes predefinidas",
        "JIT compilation",
        "Responsive design automático",
        "Dark mode support",
        "Customización completa",
        "Purge automático de CSS no usado",
      ],
      benefits: [
        "Desarrollo CSS 5x más rápido",
        "CSS bundle más pequeño",
        "Consistencia visual",
        "No más naming conventions",
        "Mobile-first approach",
      ],
      usedFor: [
        "Estilos de componentes",
        "Layout responsive",
        "Animaciones y transiciones",
        "Sistema de colores",
      ],
      commands: [
        "bg-gradient-to-r - Gradientes",
        "hover:scale-105 - Interacciones",
        "md:text-lg - Responsive",
      ],
      website: "https://tailwindcss.com",
      docs: "https://tailwindcss.com/docs",
      why: "Tailwind CSS permite crear diseños únicos rápidamente sin escribir CSS personalizado. En este proyecto maneja todos los estilos con clases utility como gradientes, hover effects y responsive design.",
    },
    {
      name: "✨ Prettier",
      color: "text-pink-400",
      description: "Formateador de código opinionado y consistente",
      version: "v3.6.2",
      features: [
        "Formateo automático al guardar",
        "Configuración mínima requerida",
        "Soporte para 20+ lenguajes",
        "Integración con todos los editores",
        "Reglas opinionadas pero configurables",
        "Preserva funcionalidad del código",
      ],
      benefits: [
        "Elimina debates sobre estilo",
        "Código consistente en todo el equipo",
        "Menos tiempo en code reviews",
        "Focus en lógica, no formato",
        "Adopción cero-configuración",
      ],
      usedFor: [
        "Formateo automático de JS/JSX",
        "Consistencia en el equipo",
        "Integración con CI/CD",
        "Pre-commit hooks",
      ],
      commands: [
        "pnpm format - Formatear archivos",
        "pnpm format:check - Verificar formato",
        "Auto-format on save en VS Code",
      ],
      website: "https://prettier.io",
      docs: "https://prettier.io/docs/en/",
      why: "Prettier elimina debates sobre estilo de código manteniendo consistencia automática en todo el proyecto. En este proyecto formatea automáticamente todo el código JS, JSX, JSON y Markdown.",
    },
    {
      name: "📝 EditorConfig",
      color: "text-green-400",
      description:
        "Configuración consistente de editores entre desarrolladores",
      version: "Universal",
      features: [
        "Configuración cross-editor",
        "Charset y line endings",
        "Indentación consistente",
        "Trim whitespace automático",
        "Insert final newline",
        "Soporte universal en IDEs",
      ],
      benefits: [
        "Consistencia entre editores",
        "Configuración automática",
        "Reduce conflictos de formato",
        "Adoptado por todo el equipo",
        "Zero configuration",
      ],
      usedFor: [
        "Configuración de indentación",
        "Character encoding (UTF-8)",
        "Line endings (LF)",
        "Trailing whitespace control",
      ],
      commands: [
        "Configuración automática en VS Code",
        "Respetado por Prettier",
        "Aplicado en todos los archivos",
      ],
      website: "https://editorconfig.org",
      docs: "https://editorconfig.org/#overview",
      why: "EditorConfig asegura que todos los desarrolladores mantengan el mismo estilo de código independientemente del editor. En este proyecto define UTF-8, LF line endings, espacios para indentación y trim whitespace.",
    },
  ];

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
    openModal();
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {technologies.map((tech, index) => (
          <Button
            key={index}
            variant="tech"
            onClick={() => handleTechClick(tech)}
            className="hover:scale-105"
          >
            <span className={`${tech.color} font-semibold`}>{tech.name}</span>
          </Button>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={selectedTech?.name || ""}
      >
        {selectedTech && <TechStackModalContent tech={selectedTech} />}
      </Modal>
    </>
  );
}

function TechStackModalContent({ tech }) {
  return (
    <div className="space-y-6 max-h-[70vh] overflow-y-auto">
      {/* Header with description and version */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg text-gray-300">{tech.description}</p>
          {tech.version && (
            <span className="text-sm bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {tech.version}
            </span>
          )}
        </div>

        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">
            ¿Por qué lo usamos en este proyecto?
          </h3>
          <p className="text-gray-300">{tech.why}</p>
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Características principales
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {tech.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-gray-300 bg-gray-800/30 p-2 rounded"
            >
              <span className="text-green-400 mr-2">✓</span>
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      {tech.benefits && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Beneficios clave
          </h3>
          <ul className="space-y-2">
            {tech.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-green-400 mr-2 mt-1">🚀</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Used for */}
      {tech.usedFor && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Usado para
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {tech.usedFor.map((use, index) => (
              <div
                key={index}
                className="text-gray-300 bg-purple-900/20 p-2 rounded text-sm"
              >
                • {use}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Commands */}
      {tech.commands && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Comandos / Uso
          </h3>
          <div className="space-y-2">
            {tech.commands.map((command, index) => (
              <code
                key={index}
                className="block text-sm bg-gray-900 text-green-400 p-2 rounded font-mono"
              >
                {command}
              </code>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700">
        <Button
          as="a"
          href={tech.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 flex-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Sitio Oficial
        </Button>

        {tech.docs && (
          <Button
            as="a"
            href={tech.docs}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="inline-flex items-center justify-center gap-2 flex-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Documentación
          </Button>
        )}
      </div>
    </div>
  );
}

function CallToActionButtons() {
  const handleStartClick = () => {
    const teamSection = document.querySelector('[data-section="team"]');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReadmeClick = () => {
    window.open("https://github.com/CXRommel/zalits-proton-01", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <Button size="lg" onClick={handleStartClick} className="hover:scale-105">
        Comenzar Exploración
      </Button>

      <Button
        variant="secondary"
        size="lg"
        onClick={handleReadmeClick}
        className="hover:scale-105"
      >
        Readme
      </Button>
    </div>
  );
}

function StepCounter() {
  const steps = [
    { number: "01", label: "Explorar", description: "Conoce el proyecto" },
    { number: "02", label: "Aprender", description: "Estudia el código" },
    { number: "03", label: "Practicar", description: "Experimenta y mejora" },
    { number: "04", label: "Contribuir", description: "Únete al equipo" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="text-center group">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-lg font-bold text-purple-400">
              {step.number}
            </span>
          </div>
          <h3 className="font-semibold text-white mb-1">{step.label}</h3>
          <p className="text-sm text-gray-400">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

function FloatingElements() {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </>
  );
}

export default HeroSection;
