import { useState } from "react";
import { MenuSection } from "./MenuSection";

const ButtonClass = {
  selected:
    "bg-neutral-900 text-white rounded-2xl px-5 py-3 shadow-lg transform scale-105",
  Idle: "bg-white text-stone-700 hover:bg-stone-50 rounded-2xl px-5 py-3 border border-stone-200 hover:border-stone-300 shadow-sm",
};

export function MenuItem({ menu, lang, currency }) {
  const { sections } = menu;
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className="relative">
      <div className="sticky -top-1 z-10 backdrop-blur-sm py-4 my-6 mt-16 overflow-x-auto w-full md:place-items-center">
        <div className="flex gap-3 min-w-max px-5">
          {sections.map((section, index) => {
            const isActive = section === currentSection;
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentSection(section);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 font-bold text-sm ${
                isActive ? ButtonClass.selected : ButtonClass.Idle
                }`}
              >
                <img
                  src={section.icon}
                  alt={section.name[lang]}
                  className={`w-5 h-5 object-contain ${isActive ? "invert" : ""}`}
                />
                {section.name[lang]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6  shadow-xl border border-stone-100">
        <MenuSection section={currentSection} lang={lang} currency={currency} />
      </div>
    </div>
  );
}
