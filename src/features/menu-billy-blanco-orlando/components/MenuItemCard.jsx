import React from "react";
import { formatPrice } from "../utils/formatPrice";

export default function MenuItemCard({ item, theme }) {
  return (
    <div
      className="p-4 border rounded-lg"
      style={{
        backgroundColor: theme.components.menuItem.background,
        color: theme.components.menuItem.titleColor,
      }}
    >
      <h3>{item.name.es}</h3>
      {item.description && <p>{item.description.es}</p>}
      <p style={{ color: theme.components.menuItem.priceColor }}>
        {formatPrice(item.price.mxn, "mxn")}
      </p>
    </div>
  );
}
