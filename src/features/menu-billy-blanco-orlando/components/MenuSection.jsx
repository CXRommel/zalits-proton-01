import { text } from "../helpers/text";
import MenuItem from "./MenuItem";

export default function MenuSection({ section, language, currency }) {
  return (
    <div className="space-y-6">
      {section.map((section) => (
        <div
          key={text(section.name, language)}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-orange-500">
            {section.icon && (
              <img src={section.icon} alt="" className="w-8 h-8" />
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {text(section.name, language)}
              </h1>
              {section.description && (
                <h2 className="text-sm text-gray-500 mt-1">
                  {text(section.description, language)}
                </h2>
              )}
            </div>
          </div>

          <MenuItem
            items={section.items}
            language={language}
            currency={currency}
          />
        </div>
      ))}
    </div>
  );
}
