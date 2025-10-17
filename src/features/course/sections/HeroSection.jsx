import { useState } from "react";
import { useModal, useAnimation } from "../shared/hooks";
import { Button } from "../ui";
import Modal from "../ui/Modal";

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
        className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 cursor-pointer transition-all duration-300 hover:scale-110
          ${isAnimating ? "animate-pulse" : ""}
          ${isSpinning ? "animate-spin" : ""}
        `}
      >
        <span
          className={`text-2xl font-bold text-white transition-all duration-300 ${
            isSpinning ? "animate-bounce" : ""
          }`}
        >
          {isSpinning ? "🚀" : "Z"}
        </span>
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
      features: [
        "Inicio ultra rápido",
        "Hot Module Replacement",
        "Optimizado para ES modules",
        "Soporte para TypeScript",
      ],
      website: "https://vitejs.dev",
      why: "Vite revoluciona el desarrollo frontend con tiempos de inicio instantáneos y actualizaciones en caliente súper rápidas.",
    },
    {
      name: "⚛️ React",
      color: "text-blue-400",
      description:
        "Biblioteca de JavaScript para construir interfaces de usuario",
      features: [
        "Virtual DOM",
        "Component-based",
        "Unidirectional data flow",
        "Large ecosystem",
      ],
      website: "https://react.dev",
      why: "React es la biblioteca más popular para crear interfaces modernas, reactivas y escalables.",
    },
    {
      name: "📦 pnpm",
      color: "text-orange-400",
      description: "Gestor de paquetes rápido y eficiente",
      features: [
        "Ahorro de espacio en disco",
        "Instalaciones más rápidas",
        "Strict dependency management",
        "Monorepo support",
      ],
      website: "https://pnpm.io",
      why: "pnpm es hasta 2x más rápido que npm y ahorra gigabytes de espacio en disco mediante enlaces simbólicos.",
    },
    {
      name: "🎨 Tailwind",
      color: "text-purple-400",
      description: "Framework CSS utility-first para desarrollo rápido",
      features: [
        "Utility classes",
        "Responsive design",
        "Customizable",
        "Purge unused CSS",
      ],
      website: "https://tailwindcss.com",
      why: "Tailwind CSS permite crear diseños únicos rápidamente sin escribir CSS personalizado.",
    },
    {
      name: "✨ Prettier",
      color: "text-pink-400",
      description: "Formateador de código opinionado y consistente",
      features: [
        "Formateo automático",
        "Configuración mínima",
        "Soporte multi-lenguaje",
        "Integración con editores",
      ],
      website: "https://prettier.io",
      why: "Prettier elimina debates sobre estilo de código manteniendo consistencia automática en todo el proyecto.",
    },
    {
      name: "📝 EditorConfig",
      color: "text-green-400",
      description:
        "Configuración consistente de editores entre desarrolladores",
      features: [
        "Estilo de código unificado",
        "Soporte universal",
        "Configuración simple",
        "Integración automática",
      ],
      website: "https://editorconfig.org",
      why: "EditorConfig asegura que todos los desarrolladores mantengan el mismo estilo de código independientemente del editor.",
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
    <div className="space-y-4">
      <p className="text-lg">{tech.description}</p>

      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          ¿Por qué lo usamos?
        </h3>
        <p className="text-gray-300">{tech.why}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Características clave:
        </h3>
        <ul className="list-disc list-inside space-y-1">
          {tech.features.map((feature, index) => (
            <li key={index} className="text-gray-300">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4">
        <Button
          as="a"
          href={tech.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          Visitar sitio web
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
        </Button>
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

  const handleLearnMoreClick = () => {
    window.open("https://github.com", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <Button size="lg" onClick={handleStartClick} className="hover:scale-105">
        Comenzar Exploración
      </Button>

      <Button
        variant="secondary"
        size="lg"
        onClick={handleLearnMoreClick}
        className="hover:scale-105"
      >
        Aprender Más
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
