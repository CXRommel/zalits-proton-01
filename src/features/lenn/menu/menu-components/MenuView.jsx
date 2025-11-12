import client from "#src/data/client.json";
import { useEffect } from "react";
import { useState } from "react";
import { RestaurantAddressCard } from "../restaurant/RestaurantAddressCard";
import { ScheduleCard } from "../restaurant/ScheduleCard";
import { RestaurantContactCard } from "../restaurant/RestaurantContactCard";
import { RestaurantProfile } from "../restaurant/RestaurantProfile";
import { IntlManager } from "../intl/IntlManager";
import { MenuItem } from "./MenuItem";

export default function MenuView() {
  const supportLangs = client.intl.languages;
  const supportCurrencies = client.intl.currencies;

  //#region states
  const [lang, setLang] = useState("en");
  const [currency, setCurrencies] = useState("usd");

  //#endregion

  //#region handlers
  const changeLang = (lang) => {
    if (lang && supportLangs.includes(lang)) {
      setLang(lang);
    } else {
      setLang("en");
    }
  };

  const changeCurrency = (curr) => {
    if (curr && client.intl.currencies.includes(curr)) {
      setCurrencies(curr);
    } else {
      setCurrencies("usd");
    }
  };
  //#endregion

  //#region effects
  useEffect(() => {
    const fetchData = async () => {
      setLang(client.intl.defaultLanguage);
      setCurrencies(client.intl.defaultCurrency);
    };
    fetchData();
  }, []);
  //#endregion

  //#region styles
  const cardStyle =
    "px-6 py-3 bg-amber-100 hover:bg-amber-200/30 text-lg text-amber-800 rounded-lg border-2 border-amber-300 hover:border-amber-400 transition-all duration-200";
  //#endregion

  return (
    <div className=" w-full m-auto sm:w-8/12 md:m-auto bg-amber-50">
      <IntlManager
        supportCurrencies={supportCurrencies}
        supportLangs={supportLangs}
        changeLang={changeLang}
        changeCurrency={changeCurrency}
      />

      <RestaurantProfile
        slogan={client.profile.slogan[lang]}
        logo={client.profile.logo}
        name={client.name}
        size="lg"
      />

      <div className="m-4 grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4">
        <RestaurantAddressCard className={cardStyle} address={client.address} />
        <RestaurantContactCard className={cardStyle} contact={client.contact} />
      </div>

      <div>
        <ScheduleCard schedule={client.schedule} lang={lang} />
      </div>
      <div>
        <MenuItem menu={client.menus[0]} lang={lang} currency={currency} />
      </div>
    </div>
  );
}
