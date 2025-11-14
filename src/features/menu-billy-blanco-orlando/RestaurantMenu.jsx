import { useState } from "react";
import DataMenu from "../../data/client.json";
import MenuHeader from "./components/MenuHeader";
import { text } from "./helpers/text";
import MenuSection from "./components/MenuSection";
import MenuSurvey from "./components/MenuSurvey";

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

  return (
    <div>
      <MenuHeader
        dataMenu={DataMenu}
        language={language}
        handlerLanguage={handlerLanguage}
        handlerCurrency={handlerCurrency}
      />

      <MenuSection
        section={DataMenu.menus[0].sections}
        language={language}
        currency={currency}
      />

      <MenuSurvey
        survey={DataMenu.survey}
        language={language}
        handlerOpenSurvey={handlerOpenSurvey}
        handlerCloseSurvey={handlerCloseSurvey}
        handlerSubmitSurvey={handlerSubmitSurvey}
        showSurvey={showSurvey}
        submitted={submitted}
      />
    </div>
  );
}

export default RestaurantMenu;
