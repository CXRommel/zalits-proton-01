import menuData from "#src/data/client.json";
import { useState } from "react";
import ProfileSection from "#src/features/brandon-menu/sections/ProfileSection.jsx";
import AddressSection from "#src/features/brandon-menu/sections/AddressSection.jsx";
import ContactSection from "#src/features/brandon-menu/sections/ContactSection.jsx";
import ScheduleSection from "#src/features/brandon-menu/sections/ScheduleSection.jsx";
import MenuSection from "#src/features/brandon-menu/sections/MenuSection.jsx";

function BrandonMenuComponent() {
  const { name, profile, intl, address, contact, schedule, menus } = menuData;

  const [currentLang, setCurrentLang] = useState(intl.defaultLanguage);
  const [currentCurrency, setCurrentCurrency] = useState(intl.defaultCurrency);

  const handleLangChange = (lang) => {
    setCurrentLang(lang.target.value);
  }

  const handleCurrencyChange = (currency) => {
    setCurrentCurrency(currency.target.value);
  }

  return (
    <div className="text-white bg-gray-800 p-4 space-y-6">
      <div className="grid grid-cols-2 place-content-center">
        <select className="w-fit" id="lang-select" value={currentLang} onChange={handleLangChange}>
          {intl.languages.map((langCode) => (
            <option key={langCode} value={langCode}>
              {langCode.toUpperCase()}
            </option>
          ))}
        </select>

        <select className="w-fit place-self-end" id="currency-select" value={currentCurrency} onChange={handleCurrencyChange}>
          {intl.currencies.map((currencyCode) => (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <ProfileSection profile={profile} name={name} lang={currentLang} />
      <AddressSection address={address} lang={currentLang}/>
      <ContactSection contact={contact} lang={currentLang}/>
      <ScheduleSection schedule={schedule} lang={currentLang}/>
      <MenuSection menus={menus} lang={currentLang} currency={currentCurrency} />
    </div>
  );
}

export default BrandonMenuComponent;
