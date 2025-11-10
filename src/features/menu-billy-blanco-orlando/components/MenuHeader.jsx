import { getText } from "../helpers/menuHelpers";

function MenuHeader({ clientData, language, onLanguageToggle }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-orange-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/51/51771.png"
            alt="Billy Blanco"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-orange-600">
              {clientData.name}
            </h2>
            <p className="text-sm text-gray-600">
              {getText(clientData.profile.slogan, language)}
            </p>
          </div>
        </div>

        {/* Botón de cambio de idioma */}
        <button
          onClick={onLanguageToggle}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>

      {/* Información de contacto */}
      <div className="text-sm text-gray-600 space-y-1">
        <p>
          {clientData.address.street}, {clientData.address.city}
        </p>
        <p>{clientData.contact.phone}</p>
      </div>
    </div>
  );
}

export default MenuHeader;
