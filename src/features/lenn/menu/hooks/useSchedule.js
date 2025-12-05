export function useSchedule(schedule = [], lang = "en") {
  const getDayName = (dayNumber) => {
    const date = new Date(2025, 10, 2 + dayNumber);
    return new Intl.DateTimeFormat(lang, { weekday: "long" }).format(date);
  };

  const getCloseHour = (open, time) => {
    const date = new Date();
    date.setHours(0, 0, 0);

    const [openHour, openMinutes = 0] = open.split(":").map(Number);
    const [timeHours, timeMinutes = 0] = time.split(":").map(Number);

    date.setHours(openHour, openMinutes);
    date.setMinutes(date.getMinutes() + timeHours * 60 + timeMinutes);

    return new Intl.DateTimeFormat(lang, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  };

  const checkIfOpen = () => {
    const now = new Date();
    const currentDay = now.getDay();

    for (const interval of schedule) {
      if (interval.days.includes(currentDay)) {
        const [openHour, openMinutes] = interval.open.split(":").map(Number);
        const close = getCloseHour(interval.open, interval.time);
        const [closeHour, closeMinutes] = close.split(":").map(Number);

        const currentTime = now.getHours() * 60 + now.getMinutes();
        const openTime = openHour * 60 + openMinutes;
        const closeTime = closeHour * 60 + closeMinutes;

        if (currentTime >= openTime && currentTime <= closeTime) return true;
      }
    }
    return false;
  };

  return { getDayName, getCloseHour, checkIfOpen };
}
