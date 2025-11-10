import client from "#src/data/client.json";
import { useEffect } from "react";
import { useState } from "react";
function MenuComponent() {
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
    <div className="text-white">
      <div className="grid grid-cols-2 place-content-between pb-10">
        <select
          name="lang"
          id="lang"
          onChange={(e) => changeLang(e.target.value)}
          className="w-fit"
        >
          {supportLangs.map((lng) => (
            <option key={lng} value={lng}>
              {lng.toUpperCase()}
            </option>
          ))}
        </select>
        <select
          name="currencies"
          id="currencies"
          onChange={(e) => changeCurrency(e.target.value)}
          className="w-fit place-self-end"
        >
          {supportCurrencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <RestaurantProfile
        slogan={client.profile.slogan[lang]}
        logo={client.profile.logo}
        name={client.name}
        size={100}
      />

      <div className="mt-4 grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4">
        <RestaurantAddressCard address={client.address} />
        <RestaurantContactCard contact={client.contact} />
      </div>

      <div>
        <ScheduleCard schedule={client.schedule} lang={lang} />
      </div>
      <div>
        <RestaurantMenu
          menu={client.menus[0]}
          lang={lang}
          currency={currency}
        />
      </div>
    </div>
  );
}

function RestaurantProfile({ slogan, logo, name, size = 150 }) {
  let imgStyle =
    logo.container === "circular"
      ? { borderRadius: "50%" }
      : { borderRadius: "10%" };

  return (
    <div className="grid grid-cols-1 place-items-center ">
      <img
        src={logo.url}
        alt={name}
        width={size}
        height={size}
        style={{ ...imgStyle }}
      />
      <h1>{name}</h1>
      <h2>{slogan}</h2>
    </div>
  );
}

function RestaurantAddressCard({ address }) {
  const { street, city, state, zip, country } = address;
  return (
    <div>
      <h1>
        <span>📍</span> {street}, {city}, {state} {zip}, {country}
      </h1>
    </div>
  );
}

function RestaurantContactCard({ contact }) {
  const { phone, email, social } = contact;
  const elements = [];

  for (let key in social) {
    if (Object.hasOwn(social, key)) {
      elements.push(
        <a className="w-fit" key={key} href={social[key]}>
          <img
            alt={`https://www.google.com/s2/favicons?domain=${key}.com&sz=128`}
            src={`https://www.google.com/s2/favicons?domain=${key}.com&sz=128`}
            className="w-10"
          />
        </a>
      );
    }
  }

  return (
    <div className="w-full">
      <h1>
        <span>☎️</span> <a href={`tel:${phone}`}>{phone}</a>
      </h1>
      <h1>
        <span>📧</span> <a href={`mailto:${email}`}>{email}</a>
      </h1>
      <div
        className={`py-4 grid grid-cols-${elements.length} place-items-center`}
      >
        {elements}
      </div>
    </div>
  );
}

function ScheduleCard({ schedule, lang }) {
  const [now, setNow] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const getDayName = (dayNumber) => {
    const date = new Date(2025, 10, 2 + dayNumber);
    return new Intl.DateTimeFormat(lang, { weekday: "long" }).format(date);
  };

  const closeHour = (openHour, time) => {
    let date = new Date();
    date.setHours(Number(openHour) + Number(time));
    return date.getHours();
  };

  // const weekSchedule = {}

  // for (const dayInterval in schedule){
  //   for (const day in dayInterval){
  //     let open = dayInterval.open
  //     let close = closeHour(dayInterval.open.slice(0, 2), dayInterval.time)
  //     weekSchedule[day] = {
  //       dayName : getDayName(day),
  //       open,
  //       close
  //     }

  //     (now.getTime > open && now.getDay < close) && setIsOpen(true)

  //   }
  // }

  return (
    <section className="py-4">
      <div className="">
        <details className="">
          <summary className="pb-4 marker:text-neutral-50/0">
            🕒 Ahora mismo esta {isOpen ? "Abierto" : "Cerrado"}
          </summary>
          <table className="w-full">
            <thead>
              <tr>
                <th>
                  <h1>Dias</h1>
                </th>
                <th>Horario</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((dayInterval, index) => (
                <tr key={index} className="text-center">
                  <td>
                    {dayInterval.days.map((day, index) => (
                      <p key={index} className="">
                        {getDayName(day)}
                      </p>
                    ))}
                  </td>
                  <td>
                    {dayInterval.open} a{" "}
                    {closeHour(dayInterval.open.slice(0, 2), dayInterval.time)}
                    :00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </div>
    </section>
  );
}

function RestaurantMenu({ menu, lang, currency }) {
  const { name, sections } = menu;

  return (
    <div className="p-4 m-4">
      <h1 className="text-center text-4xl">{name[lang]}</h1>
      <ul>
        {sections.map((section, index) => (
          <div key={index}>
            <MenuSection section={section} lang={lang} currency={currency} />
          </div>
        ))}
      </ul>
    </div>
  );
}

function MenuSection({ section, lang, currency }) {
  const { name, description, display, icon, items } = section;
  return (
    <div>
      <div className="grid place-content-center">
        <img src={icon} className="w-15 place-self-center" />
        <h1 className="text-2xl text-center"> {name[lang]}</h1>
      </div>

      {description && <p className="py-2 text-center font-bold">{description[lang]}</p>}
      <table className="p-2 w-full">
        <tbody>
          {items.map((item) => (
            <details className="marker:text-neutral-50/0 ">
              <summary>
                <tr className="grid grid-cols-2 place-content-center">
                  <td className="text-lg">{item.name[lang]}</td>{" "}
                  <td className="text-end">$ {item.price[currency]}</td>
                </tr>
              </summary>
              {item.description && (
                <p className="px-10 py-2 text-gray-400 text-xs italic">
                  {item.description[lang]}
                </p>
              )}
            </details>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenuComponent;
