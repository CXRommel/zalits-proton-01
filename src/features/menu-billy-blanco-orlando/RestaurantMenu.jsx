import { useState } from "react";
import clientData from "../../data/client.json";
import MenuHeader from "./components/MenuHeader";
import MenuSection from "./components/MenuSection";
import MenuFooter from "./components/MenuFooter";

function RestaurantMenu() {
  const [language, setLanguage] = useState("es");

  const menu = clientData.menus[0];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6 relative">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200">
        <MenuHeader
          clientData={clientData}
          language={language}
          onLanguageToggle={toggleLanguage}
        />
      </div>

      {/* Secciones del menú */}
      {menu.sections.map((section, index) => (
        <MenuSection key={index} section={section} language={language} />
      ))}

      {/* Footer */}
      <MenuFooter />
    </div>
  );
}

export default RestaurantMenu;
