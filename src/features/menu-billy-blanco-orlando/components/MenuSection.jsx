import { text } from "../helpers/text";
import MenuItem from "./MenuItem";

export default function MenuSection({ section, language, currency }) {
  return (
    <>
      {section.map((section) => (
        <div key={text(section.name)}>
          <h1>{text(section.name, language)}</h1>
          {section.description && (
            <h2>{text(section.description, language)}</h2>
          )}

          <MenuItem
            items={section.items}
            language={language}
            currency={currency}
          />
        </div>
      ))}
    </>
  );
}
