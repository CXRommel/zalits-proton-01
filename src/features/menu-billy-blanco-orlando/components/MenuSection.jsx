import React from "react";
import MenuItemCard from "./MenuItemCard";

export default function MenuSection({ section, theme }) {
  return (
    <div className="menu-section">
      <h2 style={{ color: theme.components.section.headerTextColor }}>
        {section.name.es}
      </h2>
      <p>{section.description?.es}</p>
      <div className="grid gap-4">
        {section.items.map((item) => (
          <MenuItemCard key={item.id} item={item} theme={theme} />
        ))}
      </div>
    </div>
  );
}
