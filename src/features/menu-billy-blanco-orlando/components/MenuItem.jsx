import { text } from "../helpers/text";

export default function MenuItem({ items, language, currency }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start mb-2">
            {item.name && (
              <h3 className="font-semibold text-gray-800">
                {text(item.name, language)}
              </h3>
            )}
            {item.price && (
              <p className="text-orange-600 font-bold ml-2">
                ${item.price[currency]}
              </p>
            )}
          </div>
          {item.description && (
            <p className="text-sm text-gray-600 leading-relaxed">
              {text(item.description, language)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
