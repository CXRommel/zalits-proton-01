import React from "react";

function HeadComponent({ menuData, lang, curr, setLang, setCurr }) {
  return (
    <header
      className="w-full px-6 py-4"
      style={{ backgroundColor: menuData.theme.components.header.background }}
    >
      <div className="w-full flex items-center justify-between shadow-md shadow-amber-800">
        <div className="flex items-center gap-4 flex-wrap">
          <img
            src={
              "data:image/png;base64,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" ||
              menuData.profile.logo.url
            }
            alt="Logo"
            className="w-20 h-20 object-cover rounded-full shadow-lg"
          />
          <h1 className="text-4xl font-extrabold drop-shadow-sm text-center text-orange-950">
            {menuData.name}
          </h1>
          <p className="text-lg font-medium opacity-90 text-center mt-2 text-orange-700">
            {menuData.profile.slogan[lang]}
          </p>
        </div>

        <div className="flex gap-3 mr-2">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="px-3 py-2 rounded-xl border text-sm font-semibold"
            style={{
              borderColor: menuData.theme.components.header.borderColor,
            }}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>

          <select
            value={curr}
            onChange={(e) => setCurr(e.target.value)}
            className="px-3 py-2 rounded-xl border text-sm font-semibold"
            style={{
              borderColor: menuData.theme.components.header.borderColor,
            }}
          >
            <option value="mxn">MXN $</option>
            <option value="usd">USD $</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default HeadComponent;
