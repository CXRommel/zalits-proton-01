import React, { useState } from "react";
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

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="md:w-1/3 w-full">
          <InfoComponent menuData={menuData} lang={lang} />
        </div>

        <div className="md:w-2/3 w-full">
          <MenuComponent menuData={menuData} language={lang} currency={curr} />
        </div>
      </div>
    </div>
  );
}

export default MenuDonajiComponent;
