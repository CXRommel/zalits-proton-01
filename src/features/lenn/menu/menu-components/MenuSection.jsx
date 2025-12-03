/**
 * Constants for menu item types
 */
export const ItemType = {
  Product: 1,
  ProductWithSizes: 2,
  ProductCondense: 3,
};

export const DisplayType = {
  Default: 0,
  WithImage: 1,
  WithIcon: 2,
  Compact: 3,
};

export function MenuSection({ section, lang, currency }) {
  const { name, description, display, icon, items } = section;
  return (
    <div>
      <div className="grid place-content-center mb-8">
        <img src={icon} className="w-16 h-16 place-self-center mb-3" />
        <h1 className="bg-white text-stone-800 font-bold text-2xl px-6 py-3 rounded-xl border border-stone-200 shadow-sm">
          {name[lang]}
        </h1>
      </div>

      <table className="p-2 my-8 w-full">
        {description && (
          <caption className="text-stone-500 p-3 w-full mb-4">
            {description[lang]}
          </caption>
        )}
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <details className="marker:text-transparent px-6 py-2 group">
                  <summary className="cursor-pointer list-none">
                    <div className="relative grid grid-cols-[1fr_auto] gap-4 items-center bg-white hover:bg-stone-50 p-5 rounded-2xl border border-stone-200 hover:border-stone-300 transition-all shadow-sm hover:shadow-md group">
                      <div className="grid grid-rows-1 gap-1 text-start">
                        <h1 className="text-stone-800 font-bold text-lg">
                          {item.name[lang]}
                        </h1>
                        {item.description && (
                          <span className="text-xs font-medium text-stone-400 uppercase flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-stone-400 group-hover:text-green-500" />
                            Ver descripción
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        <h1 className="text-emerald-700 font-bold text-xl">
                          $ {item.price[currency]}
                        </h1>
                        {item.description && (

                          <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-open:bg-emerald-100 group-open:text-emerald-700 transition-colors">
                            <svg className="w-5 h-5 text-stone-400 group-open:text-emerald-600 transition-transform duration-300 group-open:rotate-180">
                              <use href="/lenn/sprites.svg#icon-arrow-down"></use>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </summary>
                  {item.description && (
                    <div className="pt-2 px-4 pb-4">
                      <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                        <p className="text-stone-600 text-sm text-start leading-relaxed">
                          {item.description[lang]}
                        </p>
                      </div>
                    </div>
                  )}
                </details>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
