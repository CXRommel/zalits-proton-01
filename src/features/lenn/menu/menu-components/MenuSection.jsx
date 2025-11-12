export function MenuSection({ section, lang, currency }) {
  const { name, description, display, icon, items } = section;
  return (
    <div>
      <div className="grid place-content-center">
        <img src={icon} className="w-15 place-self-center" />
        <h1 className="text-2xl text-center"> {name[lang]}</h1>
      </div>

      {description && (
        <p className="py-2 text-center font-bold">{description[lang]}</p>
      )}
      <table className="p-2 w-full">
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
            <details className="marker:text-neutral-50/0 ">
              <summary>
                <div className="grid grid-cols-2 place-content-center">
                  <h1 className="text-lg">{item.name[lang]}</h1>{" "}
                  <h1 className="text-end">$ {item.price[currency]}</h1>
                </div>
              </summary>
              {item.description && (
                <p className="px-10 py-2 text-xs italic">
                  {item.description[lang]}
                </p>
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
