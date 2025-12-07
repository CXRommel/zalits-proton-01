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

function MenuItemCard({ item, lang, currency }) {
  const [isOpen, setIsOpen] = useState(false);
  const description = item.description ? item.description[lang] : null;
  const hasDescription = description && description.trim().length > 0;

  const toggleOpen = () => {
    if (hasDescription) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      onClick={toggleOpen} className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${hasDescription ? "cursor-pointer hover:bg-gray-700/50 border-gray-700 bg-gray-800/40" : "cursor-default border-gray-700/30 bg-gray-800/20"} ${isOpen ? "bg-gray-700/60 border-blue-500/30 ring-1 ring-blue-500/20" : ""}`}>
      <div className="p-4 flex justify-between items-center gap-4">

        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-100 leading-tight">
            {item.name[lang]}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          {item.price && (
            <span className="font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full text-sm whitespace-nowrap">
              ${item.price[currency]}
            </span>
          )}

          {hasDescription && (
            <div className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-400" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {hasDescription && isOpen && (
        <div className="px-4 pb-4 pt-0 animate-fadeIn">
          <div className="h-px w-full bg-gray-700/50 mb-3"></div>
          <p className="text-sm text-gray-300 leading-relaxed font-medium">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

function MenuItemsList({ items, lang, currency }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="w-full grid grid-cols-1 gap-3">
      {items.map((item) => (
        <MenuItemCard key={item.id || item.name[lang]} item={item} lang={lang} currency={currency} />
      ))}
    </div>
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
