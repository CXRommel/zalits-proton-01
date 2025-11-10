import React from "react";
import MenuSection from "./MenuSection";

export default function MenuList({ menus, theme }) {
  const mainMenu = menus[0]; // En tu JSON solo hay uno
  return (
    <div>
      {mainMenu.sections.map((section) => (
        <MenuSection key={section.name.es} section={section} theme={theme} />
      ))}
    </div>
  );
}
