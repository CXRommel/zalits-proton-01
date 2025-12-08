export function getScheduleStatus(schedule, language) {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const today = schedule.find((s) => s.days.includes(day));
  const [openH, openM = 0] = today.open.split(":").map(Number);
  const closeH = openH + parseInt(today.time);

  const current = hour * 60 + minute;
  const open = openH * 60 + openM;
  const close = closeH * 60;

  const isOpen = current >= open && current < close;
  const closeTime = `${String(closeH).padStart(2, "0")}:00`;

  return {
    isOpen,
    text: isOpen
      ? language === "es"
        ? `Abierto · Cierra a las ${closeTime}`
        : `Open · Closes at ${closeTime}`
      : language === "es"
        ? `Cerrado · Abre a las ${today.open}`
        : `Closed · Opens at ${today.open}`,
  };
}

export function formatScheduleTime(openTime, duration) {
  const openH = parseInt(openTime.split(":")[0]);
  const closeH = openH + parseInt(duration);
  return `${openTime} - ${String(closeH).padStart(2, "0")}:00`;
}

export function getDayName(dayNumber, language) {
  const days = {
    es: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  };

  return days[language][dayNumber];
}
