import { getText, getPrice } from "../helpers/menuHelpers";

function MenuItem({ item, language }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800">
          {getText(item.name, language)}
        </h4>
        <span className="text-orange-600 font-bold ml-2">
          {getPrice(item.price, language)}
        </span>
      </div>

      {item.description && (
        <p className="text-sm text-gray-600 leading-relaxed">
          {getText(item.description, language)}
        </p>
      )}
    </div>
  );
}

export default MenuItem;
