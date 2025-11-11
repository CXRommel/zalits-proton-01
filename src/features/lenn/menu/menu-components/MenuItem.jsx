import { useState } from "react";
import { MenuSection } from "./MenuSection";

export function MenuItem({ menu, lang, currency }) {
  const { name, sections } = menu;
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className="p-4 m-4">
      <h1 className="text-center text-4xl">{name[lang]}</h1>
      <div className="border-2 p-2 rounded-lg">
        <MenuSection section={currentSection} lang={lang} currency={currency} />
        <div className="grid grid-rows-1 grid-cols-2 place-items-center gap-4 p-5 ">
          {sections.map((section, index) => (
            <div key={index} className="w-fit">
              <button onClick={() => setCurrentSection(section)}>
                {section.name[lang]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
