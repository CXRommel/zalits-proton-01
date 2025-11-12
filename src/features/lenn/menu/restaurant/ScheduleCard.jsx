import { useEffect } from "react";
import { useState } from "react";

export function ScheduleCard({ schedule, lang }) {
  const [isOpen, setIsOpen] = useState(false);

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

    return `${date.toTimeString().slice(0, 5)}`;
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

        if (currentTime >= openTime && currentTime <= closeTime) {
          return true;
        }
      }
    }
    return false;
  };

  useEffect(() => {
    const init = () => {
      setIsOpen(checkIfOpen());
    };

    init();
  });

  return (
    <section className="py-4">
      <div className="text-2xl">
        <details className="">
          <summary className="pb-4 marker:text-neutral-50/0 ">
            <p className="w-full text-center">
              🕒 Ahora mismo esta {isOpen ? "abierto" : "cerrado"}{" "}
              <span className="text-sm  hover:cursor-pointer">
                (ver horarios)
              </span>
            </p>
          </summary>
          <table className="w-full">
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
                    {getCloseHour(dayInterval.open, dayInterval.time)}
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
