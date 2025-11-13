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

export const QuestionType = {
  Text: 1,
  ChooseOptions: 2,
  StarRate: 3,
  MultilineText: 4,
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
                    <div className="grid grid-cols-2 place-content-center bg-white hover:bg-stone-50 p-4 rounded-xl border border-stone-200 hover:border-stone-300 transition-all">
                      <h1 className="text-stone-800 font-semibold text-lg text-start md:text-center">
                        {item.name[lang]}
                      </h1>
                      <h1 className="text-neutral-900 font-bold text-lg text-end md:text-center self-center">
                        $ {item.price[currency]}
                      </h1>
                    </div>
                  </summary>
                  {item.description && (
                    <p className="py-3 px-4 text-stone-600 text-sm text-start leading-relaxed">
                      {item.description[lang]}
                    </p>
                  )}
                </details>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
