import { text } from "../helpers/text";

export default function MenuItem({ items, language, currency }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          {item.name && <h3>{text(item.name, language)}</h3>}
          {item.description && <p>{text(item.description, language)}</p>}
          {item.price && (
            <p>
              {currency} {item.price[currency]}
            </p>
          )}
        </div>
      ))}
    </>
  );
}
