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
      <tr className="border border-gray-300 dark:border-gray-600" key={item.id}>
        <td>{item.name[lang]}</td>
        <td>{item.description ? item.description[lang] : ""}</td>
        <td >{item.price ? `$${item.price[currency]}` : ""}</td>
      </tr>
    );
  });

  return (
    <table className="border-collapse border-spacing-1 border border-gray-400 dark:border-gray-500 table-auto">
      <thead>
        <tr className="border border-gray-300 dark:border-gray-600">
          <th>{headers.name}</th>
          <th>{headers.description}</th>
          <th>{headers.price}</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

function MenuHeader({ menuItem, lang, currency }) {
  const { sections } = menuItem;

  const menuHeaderSections = sections.map((section) => {
    return (
      <section className="bg-amber-500 py-4 rounded-3xl md:mx-auto max-w-screen-md border-2 border-gray-800 mt-3 place-items-center" key={section.name[lang]}>
        <h2>{section.name[lang]}</h2>
        <img src={section.icon} alt={section.name[lang] + " icon."} />
        {section.description && <p>{section.description[lang]}</p>}

        <MenuItemsList items={section.items} lang={lang} currency={currency} />
      </section>
    );
  });

  return <div>{menuHeaderSections}</div>;
}

function MenuSection({ menus, lang, currency }) {
  const menusSection = menus.map((menuItem) => {
    return (
      <div key={menuItem.name[lang]}>
        <h1>{menuItem.name[lang]}</h1>
        <MenuHeader menuItem={menuItem} lang={lang} currency={currency} />
      </div>
    );
  });

  return <div>{menusSection}</div>;
}

export default MenuSection;
