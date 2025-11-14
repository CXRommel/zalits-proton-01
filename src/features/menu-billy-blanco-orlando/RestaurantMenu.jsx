import { useState } from "react";
import DataMenu from "../../data/client.json";

function RestaurantMenu() {
  const [language, setLanguage] = useState(DataMenu.intl.defaultLanguage);
  const [currency, setCurrency] = useState(DataMenu.intl.defaultCurrency);
  const [showSurvey, setShowSurvey] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handlerLanguage(lang) {
    setLanguage(lang);
  }

  function handlerCurrency(curr) {
    setCurrency(curr);
  }

  function handlerOpenSurvey() {
    setShowSurvey(true);
    setSubmitted(false);
  }

  function handlerCloseSurvey() {
    setShowSurvey(false);
  }

  function handlerSubmitSurvey() {
    setSubmitted(true);
  }

  function text(obj) {
    if (!obj) return "";

    return obj[language];
  }

  return (
    <div>
      <header>
        <div>
          <img src={DataMenu.profile.logo.url} alt="Restaurant Logo" />
        </div>

        <div>
          <h1>{DataMenu.name}</h1>
          <p>{text(DataMenu.profile.slogan)}</p>
        </div>

        <div>
          <p>
            {DataMenu.address.street}
            <br />
            {DataMenu.address.city}, {DataMenu.address.state}{" "}
            {DataMenu.address.zip}
            <br />
            {DataMenu.address.country}
          </p>
        </div>

        <div>
          <p>{DataMenu.contact.phone}</p>
          <p>{DataMenu.contact.email}</p>
          <div>
            <a href={DataMenu.contact.social.instagram}>Instagram </a>
            <a href={DataMenu.contact.social.facebook}>Facebook</a>
          </div>
        </div>
      </header>
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
      {DataMenu.menus[0].sections.map((section) => (
        <div key={text(section.name)}>
          <h1>{text(section.name)}</h1>
          {section.description && <h2>{text(section.description)}</h2>}

          {section.items.map((item) => (
            <div key={item.id}>
              {item.name && <h3>{text(item.name)}</h3>}
              {item.description && <p>{text(item.description)}</p>}
              {item.price && (
                <p>
                  {currency} {item.price[currency]}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}

      <button onClick={handlerOpenSurvey}>{text(DataMenu.survey.title)}</button>

      {showSurvey && (
        <div className="survey-container">
          <button onClick={handlerCloseSurvey}>Cerrar</button>

          {submitted ? (
            <div className="thank-you">
              <h2>{text(DataMenu.survey.thankYouMessage)}</h2>
            </div>
          ) : (
            <>
              <h1>{text(DataMenu.survey.title)}</h1>
              <p>{text(DataMenu.survey.description)}</p>

              {DataMenu.survey.questions.map((q) => (
                <div key={q.id} className="survey-question">
                  <p>{text(q.question)}</p>

                  {q.type === 3 && (
                    <div>
                      {[...Array(q.maxStars)].map((_, idx) => (
                        <span key={idx}>⭐</span>
                      ))}
                    </div>
                  )}

                  {q.type === 2 && (
                    <select>
                      <option value="">--</option>
                      {q.options.map((opt, i) => (
                        <option key={i} value={text(opt)}>
                          {text(opt)}
                        </option>
                      ))}
                    </select>
                  )}

                  {q.type === 1 && (
                    <textarea placeholder={text(q.placeholder || "")} />
                  )}

                  {q.type === 4 && (
                    <textarea
                      rows={q.rows || 3}
                      placeholder={text(q.placeholder || "")}
                    />
                  )}
                </div>
              ))}

              <button onClick={handlerSubmitSurvey}>
                {text(DataMenu.survey.submitButton)}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default RestaurantMenu;
