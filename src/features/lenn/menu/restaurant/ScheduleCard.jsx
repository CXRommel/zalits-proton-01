import { useEffect } from "react";
import { useState } from "react";

export function ScheduleCard({ schedule, lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

        if (currentTime >= openTime && currentTime <= closeTime) return true;
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
    <section className="py-2">
      <div className="text-xl">
        <div className="grid grid-cols-1 place-items-center">
          <a className="pb-4">
            <button
              onClick={() => setShowModal(true)}
              className={`w-fit text-center font-semibold text-white rounded-xl px-6 py-3 shadow-md transition-all hover:shadow-lg ${isOpen ? "bg-green-700 hover:bg-green-800" : "bg-red-700 hover:bg-red-800"}`}
            >
              🕐 {isOpen ? "Abierto Ahora" : "Cerrado"}
            </button>
          </a>

          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
              <div className="bg-white rounded-2xl w-11/12 max-w-md p-6 shadow-2xl">
                <div className="grid grid-cols-1 place-items-end">
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-stone-400 hover:text-stone-600 transition-colors text-3xl"
                  >
                    {"x"}
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">
                  Horario / Schedule
                </h3>

                <table className="w-full border-collapse">
                  <tbody className="text-sm divide-y divide-stone-200">
                    {schedule.map((dayInterval, index) => (
                      <tr key={index} className="text-center">
                        <td className="py-3 px-3 text-stone-700 font-medium">
                          {dayInterval.days.map((day, i) => (
                            <p key={i} className="capitalize">
                              {getDayName(day)}
                            </p>
                          ))}
                        </td>
                        <td className="py-3 px-3 text-stone-800 font-semibold">
                          {dayInterval.open}
                          {" - "}
                          {getCloseHour(dayInterval.open, dayInterval.time)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
