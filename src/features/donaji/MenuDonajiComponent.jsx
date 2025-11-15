import React, { useState, useEffect } from "react";
import MenuComponent from "./components/MenuComponent";
import HeadComponent from "./components/HeadComponent";
import InfoComponent from "./components/InfoComponent";
import menuData from "#src/data/client.json";

function MenuDonajiComponent() {
  const defaultLang = menuData.intl?.defaultLanguage || "es";
  const defaultCurr = menuData.intl?.defaultCurrency || "mxn";
  const [lang, setLang] = useState(defaultLang);
  const [curr, setCurr] = useState(defaultCurr);
  return (
    <div className="w-full mx-auto px-4">
      <HeadComponent
        menuData={menuData}
        lang={lang}
        curr={curr}
        setLang={setLang}
        setCurr={setCurr}
      />
      <InfoComponent menuData={menuData} language={lang} />
      <MenuComponent menuData={menuData} language={lang} currency={curr} />
    </div>
  );
}

export default MenuDonajiComponent;
