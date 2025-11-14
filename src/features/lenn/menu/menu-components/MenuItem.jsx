import { useState } from "react";
import { MenuSection } from "./MenuSection";

const ButtonClass = {
  selected:
    "bg-neutral-900 text-white rounded-2xl px-5 py-3 shadow-lg transform scale-105",
  Idle: "bg-white text-stone-700 hover:bg-stone-50 rounded-2xl px-5 py-3 border border-stone-200 hover:border-stone-300 shadow-sm",
};

export function MenuItem({ menu, lang, currency }) {
  const { name, sections } = menu;
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className="">
      <h1
        id={`top-section-${name}`}
        className="text-center text-5xl font-bold text-stone-800 mb-8 tracking-tight"
      >
        {name[lang]}
      </h1>
      <div className="bg-stone-50 rounded-2xl py-16 md:p-16 border border-stone-200">
        <MenuSection section={currentSection} lang={lang} currency={currency} />
        <div className="grid grid-cols-2 gap-4 p-5 mt-6">
          {sections.map((section, index) => {
            const isActive = section === currentSection;
            return (
              <div key={index} className="w-full h-full">
                <button
                  onClick={() => {
                    setCurrentSection(section);
                    document
                      .getElementById(`top-section-${name}`)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full h-full flex flex-col justify-center items-center gap-3 transition-all duration-200 ${ButtonClass[isActive ? "selected" : "Idle"]}`}
                >
                  <img
                    src={section.icon}
                    alt={section.name[lang]}
                    className={`w-12 h-12 object-contain ${isActive && "invert"}`}
                  />
                  <p className="text-sm font-semibold break-all">{section.name[lang]}</p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
