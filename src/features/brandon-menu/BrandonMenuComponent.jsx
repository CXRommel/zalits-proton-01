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
    <div className="bg-gray-900 p-4 md:p-8 space-y-8 min-h-screen">
      <ProfileSection profile={profile} name={name} lang={currentLang} languages={intl.languages} handleLangChange={handleLangChange}/>
      <AddressSection address={address} lang={currentLang}/>
      <ContactSection contact={contact} lang={currentLang}/>
      <ScheduleSection schedule={schedule} lang={currentLang}/>
      <MenuSection menus={menus} lang={currentLang} currency={currentCurrency} currencies={intl.currencies} handleCurrencyChange={handleCurrencyChange}/>
    </div>
  );
}

export default BrandonMenuComponent;
