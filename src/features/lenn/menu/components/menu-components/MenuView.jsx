import client from "#src/data/client.json";
import { useEffect } from "react";
import { useState } from "react";
import { RestaurantInfo } from "../restaurant/RestaurantInfo";
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
    "h-full bg-stone-50 p-6 rounded-2xl grid place-items-center text-stone-700 break-all rounded-3xl hover:shadow-sm transition-all duration-300 group";

  return (
    <div className="@container m-auto bg-stone-100 select-none rounded-2xl">
      <div className="p-8 max-w-5xl m-auto">
        <div className="bg-white/80 border-b border-white/20 shadow-sm p-4 rounded-3xl mb-10">
          <IntlManager
            supportCurrencies={supportCurrencies}
            supportLangs={supportLangs}
            changeLang={changeLang}
            changeCurrency={changeCurrency}
          />
        </div>

        <div className="pb-8">
          <RestaurantInfo
            slogan={client.profile.slogan}
            logo={client.profile.logo}
            name={client.name}
            size="lg"
            schedule={client.schedule}
            address={client.address}
            contact={client.contact}
            lang={lang}
            className={cardStyle}
          />

          {client.menus.map((menu, index) => (
            <div key={index}>
              <MenuItem menu={menu} lang={lang} currency={currency} />
            </div>
          ))}

          <footer className="grid place-items-center pt-20">
            <SurveyComponent survey={client.survey} lang={lang} />
          </footer>
        </div>
      </div>
    </div>
  );
}
