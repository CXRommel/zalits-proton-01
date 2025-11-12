const DAY_NAMES = {
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

const langSchedule = {
  en: "Schedule",
  es: "Horario",
};

const tableHeaders = {
  es: {
    day: "Día",
    schedule: "Horario",
  },
  en: {
    day: "Day",
    schedule: "Schedule",
  },
};

function ReturnDayWithScheduleWithMap({ schedule, lang }) {
  const { days, open, time } = schedule;

  const daysRows = days.map((day) => {
    return (
      <tr className="border border-gray-300 dark:border-gray-600" key={day}>
        <td>{DAY_NAMES[lang][day]}</td>
        <td>
          <b>{open}</b> - <span>{time}</span>
        </td>
      </tr>
    );
  });

  return daysRows;
}

function ScheduleSection({ schedule, lang }) {
  const headers = tableHeaders[lang] || tableHeaders.es;

  const scheduleSection = schedule.map((scheduleItem, index) => {
    return (
      <ReturnDayWithScheduleWithMap
        key={index}
        schedule={scheduleItem}
        lang={lang}
      />
    );
  });

  return (
    <div>
      <h1>{langSchedule[lang]}</h1>

      <table className="bg-amber-500 py-4 rounded-3xl md:mx-auto max-w-screen-md border-2 border-gray-800 mt-3 place-items-center">
        <thead >
          <tr className="border border-gray-300 dark:border-gray-600">
            <th>{headers.day}</th>
            <th>{headers.schedule}</th>
          </tr>
        </thead>

        <tbody>{scheduleSection}</tbody>
      </table>
    </div>
  );
}

export default ScheduleSection;
