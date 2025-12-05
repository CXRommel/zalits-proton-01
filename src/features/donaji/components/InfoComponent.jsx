function InfoRestaurantComponent({ menuData, lang }) {
  const daysMap = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const englishDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formatSchedule = () => {
    return menuData.schedule
      .map((entry) => {
        const time = parseInt(entry.open) + parseInt(entry.time) + ":00 hrs";
        const dayNames = entry.days
          .map((d) => (lang === "en" ? englishDays[d] : daysMap[d]))
          .join(", ");
        return `\n ${dayNames}: ${entry.open} - ${time} \n`;
      })
  };

  return (
    <div className="w-full bg-orange-900 p-4 rounded-xl flex flex-col gap-4 max-w-[450px] break-all">
      <div className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-md">
        <img
          src="https://img.icons8.com/ios-filled/50/clock.png"
          alt="Horario"
          className="w-7 h-7 opacity-80"
        />
        <div>
          <h3 className="text-orange-950 font-semibold text-lg">
            {lang === "en" ? "Schedule" : "Horario"}
          </h3>
          <p className="text-orange-950 text-sm leading-tight">
            {formatSchedule()}
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-md">
        <img
          src="https://img.icons8.com/ios-filled/50/marker.png"
          alt="Dirección"
          className="w-7 h-7 opacity-80"
        />
        <div>
          <h3 className="text-orange-950 font-semibold text-lg">
            {lang === "en" ? "Address" : "Dirección"}
          </h3>
          <p className="text-orange-950 text-sm leading-tight">
            {menuData.address.street}
            <br />
            {menuData.address.city}, {menuData.address.state},{" "}
            {menuData.address.zip} - {menuData.address.country}
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-md">
        <img
          src="https://media.istockphoto.com/id/1145172366/es/vector/icono-de-tel%C3%A9fono-vector-persona-usuario-hombre-perfil-avatar-s%C3%ADmbolo-para-contacto.jpg?s=612x612&w=0&k=20&c=gijOjCq3fBdLoBmO_SXyIlBK_8nll0kJ5u701g_4Zsc="
          alt="Contacto"
          className="w-7 h-7 opacity-80"
        />
        <div>
          <h3 className="text-orange-950 font-semibold text-lg">
            {lang === "en" ? "Contact" : "Contacto"}
          </h3>
          <p className="text-orange-950 text-sm leading-tight ">
            {menuData.contact.phone}
            <br />
            {menuData.contact.email}
            <br />
            Social:
            <br />
            <a
              href={menuData.contact.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              🩵Instagram
            </a>
            <br />
            <a
              href={menuData.contact.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              🩵Facebook
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoRestaurantComponent;
