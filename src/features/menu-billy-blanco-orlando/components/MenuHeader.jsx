import { text } from "../helpers/text";

export default function MenuHeader({
  dataMenu,
  language,
  handlerLanguage,
  handlerCurrency,
}) {
  return (
    <header>
      <div>
        <img src={dataMenu.profile.logo.url} alt="Restaurant Logo" />
      </div>

      <div>
        <h1>{dataMenu.name}</h1>
        <p>{text(dataMenu.profile.slogan, language)}</p>
      </div>

      <div>
        <p>
          {dataMenu.address.street}
          <br />
          {dataMenu.address.city}, {dataMenu.address.state}{" "}
          {dataMenu.address.zip}
          <br />
          {dataMenu.address.country}
        </p>
      </div>

      <div>
        <p>{dataMenu.contact.phone}</p>
        <p>{dataMenu.contact.email}</p>
        <div>
          <a href={dataMenu.contact.social.instagram}>Instagram </a>
          <a href={dataMenu.contact.social.facebook}>Facebook</a>
        </div>
      </div>
      <button
        onClick={() => {
          handlerLanguage("es");
          handlerCurrency("mxn");
        }}
      >
        ES
      </button>
      <button
        onClick={() => {
          handlerLanguage("en");
          handlerCurrency("usd");
        }}
      >
        EN
      </button>
    </header>
  );
}
