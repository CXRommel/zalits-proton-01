import React, { useState, useEffect } from "react";
import menuData from "#src/data/client.json";

function MenuComponent({ language, currency }) {
  const theme = menuData.theme || {};
  const sections = menuData.menus?.[0]?.sections || {};
  return (
    <>
      <div className="grid h-screen">
        <h1
          className="text-center text-orange-900 font-extrabold"
          style={{
            fontFamily: theme.typography?.fontFamily?.sectionTitle,
            fontSize: "3rem",
          }}
        >
          {language === "es"
            ? menuData.menus[0].name.es
            : menuData.menus[0].name.en}
        </h1>
        <div className="justify-center mt-6">
          {sections.map((sec, i) => (
            <div
              key={i}
              className={` m-5 text-center p-3 rounded-xl font-serif bg-orange-300`}
              style={{
                border: `1px solid ${theme.components?.navigation?.borderColor}`,
              }}
            >
              <h2 className="text-3xl font-semibold text-black">
                {language === "es" ? sec.name?.es : sec.name?.en}
              </h2>
              <img
                src={sec.icon}
                alt={sec.name?.[language]}
                className="mx-auto my-4 w-20 h-20 object-contain"
              />
              <div>
                {sec.items.map((item, j) => (
                  <div
                    key={j}
                    className="bg-white rounded-xl shadow-md p-4 flex gap-4 items-start mb-4"
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-red-950">
                          {language === "es" ? item.name.es : item.name.en}
                        </h3>

                        <span className="font-bold text-orange-700">
                          {currency === "mxn"
                            ? `$${item.price.mxn}`
                            : `$${item.price.usd}`}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-orange-700 mt-1">
                          {language === "es"
                            ? item.description.es
                            : item.description.en}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuComponent;
