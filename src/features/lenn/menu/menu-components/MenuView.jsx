import client from "#src/data/client.json";
import { useEffect } from "react";
import { useState } from "react";
import { RestaurantAddressCard } from "../restaurant/RestaurantAddressCard";
import { RestaurantContactCard } from "../restaurant/RestaurantContactCard";
import { RestaurantProfile } from "../restaurant/RestaurantProfile";
import { IntlManager } from "../intl/IntlManager";
import { MenuItem } from "./MenuItem";
import { SurveyComponent } from "../survey/SurveyComponent";

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
    "grid place-items-center px-6 py-6 bg-white/80 backdrop-blur-md text-stone-700 break-all rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group";

  return (
    <div className="@container m-auto bg-stone-100 select-none">
      <div className="bg-white/80 border-b border-white/20 shadow-sm p-4 ">
        <IntlManager
          supportCurrencies={supportCurrencies}
          supportLangs={supportLangs}
          changeLang={changeLang}
          changeCurrency={changeCurrency}
        />
      </div>

      <div className="pb-8">
        <div className="py-10">
          <RestaurantProfile
            slogan={client.profile.slogan[lang]}
            logo={client.profile.logo}
            name={client.name}
            size="lg"
          />
        </div>

        <div className="pt-8 px-4 grid grid-cols-1 @lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <RestaurantAddressCard
            className={cardStyle}
            address={client.address}
            schedule={client.schedule}
            lang={lang}
          />
          <RestaurantContactCard
            className={cardStyle}
            contact={client.contact}
          />
        </div>

        <div className="px-4 max-w-5xl mx-auto">
          <MenuItem menu={client.menus[0]} lang={lang} currency={currency} />
        </div>

        <footer className="grid place-items-center pt-20">
          <SurveyComponent survey={client.survey} lang={lang} />
        </footer>
      </div>
    </div>
  );
}
