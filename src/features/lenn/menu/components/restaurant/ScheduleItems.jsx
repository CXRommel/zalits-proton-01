import { useEffect } from "react";
import { useState } from "react";
import { useSchedule } from "../../hooks/useSchedule";

const ScheduleTitles = {
  isOpen: { en: "Open Now", es: "Abierto" },
  isClosed: { en: "Closed", es: "Cerrado" },
  viewSchedule: { en: "view schedule", es: "ver horarios" },
};

export function ScheduleCard({ schedule, lang }) {
  const { getDayName, getCloseHour, checkIfOpen } = useSchedule(schedule, lang);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const init = () => {
      setIsOpen(checkIfOpen());
    };

    init();
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
        <div className="p-2 bg-green-50 text-green-500 rounded-lg group-hover:scale-110 transition-transform">
          <svg className="size-5 text-green-500">
            <use href="/lenn/sprites.svg#icon-clock" />
          </svg>
        </div>
        <div onClick={() => setShowModal(true)} className="cursor-pointer">
          <p className="text-stone-800 hover:text-green-600 transition-colors font-medium text-lg">
            {isOpen
              ? ScheduleTitles.isOpen[lang]
              : ScheduleTitles.isClosed[lang]}
          </p>
          <p className="text-stone-500">{ScheduleTitles.viewSchedule[lang]}</p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl w-11/12 max-w-md p-6">
            <div className="grid grid-cols-1 place-items-end">
              <button onClick={() => setShowModal(false)} className="">
                <svg className="size-6 hover:text-red-600">
                  <use href="/lenn/sprites.svg#icon-close-x" />
                </svg>
              </button>
            </div>

            <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">
              {ScheduleTitles.viewSchedule[lang]}
            </h3>

            <table className="w-full">
              <tbody className="text-sm divide-y divide-stone-200">
                {schedule.map((dayInterval, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-3 text-stone-700 font-medium">
                      {dayInterval.days.map((day, i) => (
                        <p key={i} className="capitalize">
                          {getDayName(day)}
                        </p>
                      ))}
                    </td>
                    <td className="p-3 text-stone-800 font-semibold">
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
  );
}

export function StatusBadge({ schedule, lang }) {
  const { checkIfOpen } = useSchedule(schedule, lang);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const init = () => {
      setIsOpen(checkIfOpen());
      console.log("StatusBadge initialized");
      console.log("isOpen:", isOpen);
    };

    init();
  }, []);

  return (
    <div
      className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-white ${isOpen ? "bg-green-500 text-white" : "bg-stone-500 text-white"}`}
    >
      {isOpen ? ScheduleTitles.isOpen[lang] : ScheduleTitles.isClosed[lang]}
    </div>
  );
}
