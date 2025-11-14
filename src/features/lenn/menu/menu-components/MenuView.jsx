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

  const [lang, setLang] = useState("en");
  const [currency, setCurrencies] = useState("usd");

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

  useEffect(() => {
    const fetchData = async () => {
      setLang(client.intl.defaultLanguage);
      setCurrencies(client.intl.defaultCurrency);
    };
    fetchData();
  }, []);

  const cardStyle =
    "px-6 py-4 bg-white hover:bg-stone-50 text-stone-700 break-all rounded-xl border border-stone-200 hover:border-stone-300 transition-all duration-200 shadow-sm hover:shadow-md";

  return (
    <div className="@container w-full m-auto sm:w-8/12 bg-stone-100 min-h-screen select-none">
      <div className="bg-white border-b border-stone-200 py-4 px-4">
        <IntlManager
          supportCurrencies={supportCurrencies}
          supportLangs={supportLangs}
          changeLang={changeLang}
          changeCurrency={changeCurrency}
        />
      </div>

      <div className="py-8 bg-gradient-to-b from-white to-stone-50">
        <RestaurantProfile
          slogan={client.profile.slogan[lang]}
          logo={client.profile.logo}
          name={client.name}
          size="lg"
        />
      </div>

      <div className="px-4 pb-4">
        <ScheduleCard schedule={client.schedule} lang={lang} />
      </div>

      <div className="m-4 grid grid-rows-2 @lg:grid-cols-2 @lg:grid-rows-1 gap-4">
        <RestaurantAddressCard className={cardStyle} address={client.address} />
        <RestaurantContactCard className={cardStyle} contact={client.contact} />
      </div>

      <div className="m-4 mb-8">
        <MenuItem menu={client.menus[0]} lang={lang} currency={currency} />
      </div>
    </div>
  );
}
