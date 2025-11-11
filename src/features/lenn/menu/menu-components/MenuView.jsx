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

  return (
    <div className=" w-full m-auto sm:w-8/12 md:m-auto">
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
        size={180}
      />

      <div className="mt-4 grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4">
        <RestaurantAddressCard address={client.address} />
        <RestaurantContactCard contact={client.contact} />
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
