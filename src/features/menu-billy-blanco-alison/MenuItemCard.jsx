const MenuItemCard = ({ item, translation, prices }) => {
  return (
    <div className="bg-[#1a1a1a] w-full rounded-2xl shadow-md border border-orange-500/20 flex flex-col justify-between overflow-hidden">
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-orange-300 truncate">
          {translation(item.name)}
        </h3>
        {item.description && (
          <p className="text-sm text-gray-400 mt-2 flex-1 line-clamp-3">
            {translation(item.description)}
          </p>
        )}
        <div className="mt-4 font-semibold text-right text-orange-400">
          {prices(item)}
        </div>
      </div>
    </div>
  );
};
export default MenuItemCard;
