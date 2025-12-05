const Footer = ({ restaurant, language, translation, setShowSurvey, scheduleStatus }) => {
  return (
    <footer className="mt-16 w-full max-w-4xl text-center text-gray-400 space-y-3 px-4">
      <h3 className="font-bold text-lg text-orange-400">
        {language === "es" ? "Visítanos en:" : "Visit us at:"}
      </h3>
      <p className="text-sm">
        {restaurant.address.street}, {restaurant.address.city},{" "}
        {restaurant.address.state}, {restaurant.address.country}
      </p>
      <p className="text-sm">
        📞 {restaurant.contact.phone} — ✉️ {restaurant.contact.email}
      </p>
      <div className="text-sm text-gray-300">
        <p className="font-semibold text-orange-400">
          {language === "es" ? "Horario:" : "Schedule:"}
        </p>

        {restaurant.schedule.map((s, i) => (
          <p key={i}>
            {s.days.length === 5
              ? language === "es"
                ? "Lunes a Viernes"
                : "Monday to Friday"
              : language === "es"
                ? "Sábado y Domingo"
                : "Saturday & Sunday"}{" "}
            — {s.open} a {parseInt(s.open) + parseInt(s.time)}:00
          </p>
        ))}

        <p
          className={`mt-1 font-semibold ${scheduleStatus.isOpen ? "text-green-400" : "text-red-400"
            }`}
        >
        </p>
      </div>


      <button
        onClick={() => setShowSurvey(true)}
        className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 active:scale-[0.98] transition font-semibold shadow-md"
      >
        {translation(restaurant.survey.title)}
      </button>
    </footer>
  );
};

export default Footer;
