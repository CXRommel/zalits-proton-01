import { useEffect, useState } from "react";
import clientData from "../../data/client.json";
import Header from "./Header";
import MenuSections from "./MenuSections";
import Footer from "./Footer";
import SurveyModal from "./SurveyModal";

const MenuBillyBlanco = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [language, setLanguage] = useState("es");
  const [showSurvey, setShowSurvey] = useState(false);
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    setRestaurant(clientData);
  }, []);

  const prices = (item) => {
    if (!item.price) return "";
    return language === "es"
      ? `$${item.price.mxn} MXN`
      : `$${item.price.usd} USD`;
  };

  const translation = (obj) => {
    if (!obj) return "";
    return obj[language] || obj.es || "";
  };
  const getScheduleStatus = (schedule) => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();

    const todaySchedule = schedule.find((s) =>
      s.days.includes(currentDay)
    );

    if (!todaySchedule) {
      return {
        isOpen: false,
        text: language === "es" ? "Cerrado hoy" : "Closed today",
      };
    }

    const openHour = parseInt(todaySchedule.open.split(":")[0]);
    const closeHour = openHour + parseInt(todaySchedule.time);

    const isOpen = currentHour >= openHour && currentHour < closeHour;

    return {
      isOpen,
      text: isOpen
        ? language === "es"
          ? `Abierto de ${openHour}:00 a ${closeHour}:00`
          : `Open from ${openHour}:00 to ${closeHour}:00`
        : language === "es"
          ? `Cerrado · Abre a las ${openHour}:00`
          : `Closed · Opens at ${openHour}:00`,
    };
  };


  if (!restaurant)
    return (
      <p className="text-center mt-10 text-lg font-medium text-gray-400">
        Cargando menú...
      </p>
    );

  return (
    <div
      className="min-h-screen text-white flex flex-col items-center pb-24"
      style={{
        backgroundColor: "#0b0b0b",
        fontFamily: restaurant.theme.typography.fontFamily.global,
      }}
    >
      <Header
        restaurant={restaurant}
        language={language}
        setLanguage={setLanguage}
        translation={translation}
        scheduleStatus={getScheduleStatus(restaurant.schedule)}
      />

      <MenuSections
        menu={restaurant.menus[0]}
        translation={translation}
        prices={prices}
      />

      <Footer
        restaurant={restaurant}
        language={language}
        translation={translation}
        setShowSurvey={setShowSurvey}
        scheduleStatus={getScheduleStatus(restaurant.schedule)}
      />

      {showSurvey && (
        <SurveyModal
          restaurant={restaurant}
          feedback={feedback}
          setFeedback={setFeedback}
          translation={translation}
          setShowSurvey={setShowSurvey}
        />
      )}
    </div>
  );
};

export default MenuBillyBlanco;
