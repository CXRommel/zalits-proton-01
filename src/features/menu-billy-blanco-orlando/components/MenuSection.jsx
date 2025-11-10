import { getText } from "../helpers/menuHelpers";
import MenuItem from "./MenuItem";

function MenuSection({ section, language }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {/* Título de la sección */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-orange-500">
        {section.icon && <img src={section.icon} alt="" className="w-8 h-8" />}
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {getText(section.name, language)}
          </h3>
          {section.description && (
            <p className="text-sm text-gray-500">
              {getText(section.description, language)}
            </p>
          )}
        </div>
      </div>

      {/* Items de la sección */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {section.items.map((item) => (
          <MenuItem key={item.id} item={item} language={language} />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
