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

function calculateClosingTime(openTimeStr, durationHours) {
  const parts = openTimeStr.split(':');
  const openHour = parseInt(parts[0], 10);
  const openMinute = parseInt(parts[1], 10);

  const date = new Date();
  date.setHours(openHour, openMinute, 0, 0);
  date.setHours(date.getHours() + durationHours);

  const closingHour = date.getHours();
  const closingMinute = date.getMinutes();

  const formattedHour = String(closingHour).padStart(2, '0');
  const formattedMinute = String(closingMinute).padStart(2, '0');

  return `${formattedHour}:${formattedMinute}`;
}
function ReturnDayWithScheduleWithMap({ schedule, lang, headers }) {
  const { days, open, time } = schedule;
  const durationNumber = parseFloat(time);
  const closingTime = calculateClosingTime(open, durationNumber);

  const daysRows = days.map((day) => {
    return (
      <tr className="block md:table-row border-b border-gray-700 hover:bg-gray-700" key={day}>
        <td className="block md:table-cell p-3 border-b border-gray-700 md:border-b-0">
          <span className="md:hidden font-medium text-gray-400 mr-2">
            {headers.day}:
          </span>
          <span className="font-medium text-white">
            {DAY_NAMES[lang][day]}
          </span>
        </td>

        <td className="block md:table-cell p-3 text-left md:text-right">
          <span className="md:hidden font-medium text-gray-400 mr-2">
            {headers.schedule}:
          </span>
          <span className="text-gray-200">
            <b className="font-semibold">{open}</b> - <span>{closingTime}</span>
          </span>
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
      <ReturnDayWithScheduleWithMap key={index} schedule={scheduleItem} lang={lang} headers={headers}/>
    );
  });

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-xl border border-gray-700 shadow-md p-6 sm:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        {langSchedule[lang]}
      </h1>

      <table className="w-full">
        <thead className="hidden md:table-header-group">
          <tr>
            <th className="p-3 bg-gray-700 text-left font-semibold uppercase text-sm text-gray-300 border-b-2 border-gray-700">
              {headers.day}
            </th>
            <th className="p-3 bg-gray-700 text-right font-semibold uppercase text-sm text-gray-300 border-b-2 border-gray-700">
              {headers.schedule}
            </th>
          </tr>
        </thead>

        <tbody className="block text-left md:table-row-group">
          {scheduleSection}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleSection;
