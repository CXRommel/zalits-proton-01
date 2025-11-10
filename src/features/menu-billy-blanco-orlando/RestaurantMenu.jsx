import { useState } from "react";
import clientData from "../../data/client.json";

function BillyMenuComponent() {
  // ========================================================================
  // STATE
  // ========================================================================
  const [language, setLanguage] = useState("es");

  // ========================================================================
  // HELPERS
  // ========================================================================

  // Obtener el menú principal
  const menu = clientData.menus[0];

  // Obtener texto según idioma
  const getText = (textObj) => {
    return textObj[language] || textObj.es;
  };

  // Obtener precio según idioma
  const getPrice = (priceObj) => {
    const currency = language === "en" ? "usd" : "mxn";
    const symbol = language === "en" ? "$" : "$";
    const price = priceObj[currency];
    return `${symbol}${price}`;
  };

  // Cambiar idioma
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      {/* Header con logo y cambio de idioma */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-orange-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <img
              src={clientData.profile.logo.url}
              alt="Billy Blanco"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-orange-600">
                {clientData.name}
              </h2>
              <p className="text-sm text-gray-600">
                {getText(clientData.profile.slogan)}
              </p>
            </div>
          </div>

          {/* Botón de cambio de idioma */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* Info de contacto */}
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            📍 {clientData.address.street}, {clientData.address.city}
          </p>
          <p>📞 {clientData.contact.phone}</p>
        </div>
      </div>

      {/* Secciones del menú */}
      {menu.sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
        >
          {/* Título de la sección */}
          <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-orange-500">
            {section.icon && (
              <img src={section.icon} alt="" className="w-8 h-8" />
            )}
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                {getText(section.name)}
              </h3>
              {section.description && (
                <p className="text-sm text-gray-500">
                  {getText(section.description)}
                </p>
              )}
            </div>
          </div>

          {/* Items de la sección */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">
                    {getText(item.name)}
                  </h4>
                  <span className="text-orange-600 font-bold ml-2">
                    {getPrice(item.price)}
                  </span>
                </div>

                {item.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {getText(item.description)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Footer simple */}
      <div className="text-center text-sm text-gray-500 py-4">
        <p>
          🍔 {language === "es" ? "¡Disfruta tu comida!" : "Enjoy your meal!"}
        </p>
      </div>
    </div>
  );
}

export default BillyMenuComponent;
