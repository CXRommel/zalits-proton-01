import { useState } from 'react';

const tableHeaders = {
  es: {
    name: "Nombre",
    description: "Descripción",
    price: "Precio",
  },
  en: {
    name: "Name",
    description: "Description",
    price: "Price",
  },
};

function MenuItemsList({ items, lang, currency }) {
  if (!items || items.length === 0) {
    return null;
  }

  const headers = tableHeaders[lang] || tableHeaders.es;

  const tableRows = items.map((item) => {
    return (
      <tr className="block md:table-row border-b border-gray-700 hover:bg-gray-700" key={item.id}>
        <td className="block md:table-cell p-3 border-b border-gray-700 md:border-b-0">
          <span className="md:hidden font-medium text-gray-400 mr-2">
            {headers.name}:
          </span>
          <span className="font-medium text-white">
            {item.name[lang]}
          </span>
        </td>

        <td className="block md:table-cell p-3 border-b border-gray-700 md:border-b-0">
          <span className="md:hidden font-medium text-gray-400 mr-2">
            {headers.description}:
          </span>
          <span className="text-sm text-gray-300">
            {item.description ? item.description[lang] : ""}
          </span>
        </td>

        <td className="block md:table-cell p-3 text-left md:text-right">
          <span className="md:hidden font-medium text-gray-400 mr-2">
            {headers.price}:
          </span>
          <span className="font-semibold text-white">
            {item.price ? `$${item.price[currency]}` : ""}
          </span>
        </td>
      </tr>
    );
  });

  return (
    <table className="w-full">
      <thead className="hidden md:table-header-group">
        <tr>
          <th className="p-3 bg-gray-700 text-left font-semibold uppercase text-sm text-gray-300 border-b-2 border-gray-700">
            {headers.name}
          </th>
          <th className="p-3 bg-gray-700 text-left font-semibold uppercase text-sm text-gray-300 border-b-2 border-gray-700">
            {headers.description}
          </th>
          <th className="p-3 bg-gray-700 text-right font-semibold uppercase text-sm text-gray-300 border-b-2 border-gray-700">
            {headers.price}
          </th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {tableRows}
      </tbody>
    </table>
  );
}

function MenuHeader({ menuItem, lang, currency, currencies, handleCurrencyChange }) {
  const { sections } = menuItem;
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!sections || sections.length === 0) {
    return null;
  }

  const activeSection = sections[selectedIndex];

  return (
    <div>
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center p-4 bg-gray-800 rounded-xl border border-gray-700 shadow-md mb-8">

        <h1 className="text-3xl font-bold mb-6 text-center text-white w-full border-b border-gray-700 pb-4">
          {menuItem.name[lang]}
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 w-full">

          {sections.map((section, index) => (
            <button key={section.name[lang]} onClick={() => setSelectedIndex(index)} title={section.name[lang]}
              className={`p-2 rounded-full transition-all duration-200 ease-in-out
                ${index === selectedIndex
                  ? 'bg-blue-500 shadow-lg scale-110'
                  : 'bg-gray-700 opacity-70 hover:opacity-100 hover:scale-105'
                }
              `}>
              <img src={section.icon} alt={section.name[lang] + " icon."} className="w-10 h-10 object-contain bg-white rounded-full p-1"/>
            </button>
          ))}

          <div className="flex items-center justify-center pl-4 border-l border-gray-600 ml-2">
            <select
              className="w-fit text-sm rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              id="currency-select" value={currency} onChange={handleCurrencyChange}>
              {currencies.map((currencyCode) => (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>

      <section className="w-full max-w-2xl place-items-center mx-auto bg-gray-800 rounded-xl border border-gray-700 shadow-md p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <img src={activeSection.icon} alt={activeSection.name[lang] + " icon."} className="w-10 h-10 object-contain bg-white rounded-full p-1 shadow-sm"/>
          <h2 className="text-2xl font-bold text-white">
            {activeSection.name[lang]}
          </h2>
        </div>

        {activeSection.description && (
          <p className="text-base text-gray-300 mb-6">
            {activeSection.description[lang]}
          </p>
        )}

        <MenuItemsList items={activeSection.items} lang={lang} currency={currency} />
      </section>
    </div>
  );
}

function MenuSection({ menus, lang, currency, currencies, handleCurrencyChange }) {

  const menusSection = menus.map((menuItem) => {
    return (
      <div key={menuItem.name[lang]}>
        <MenuHeader menuItem={menuItem} lang={lang} currency={currency} currencies={currencies} handleCurrencyChange={handleCurrencyChange}/>
      </div>
    );
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      {menusSection}
    </div>
  );
}

export default MenuSection;
