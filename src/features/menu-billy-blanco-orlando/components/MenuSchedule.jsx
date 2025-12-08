import { getDayName, formatScheduleTime } from "../helpers/schedule";

export default function MenuSchedule({ schedule, language }) {
  const groupedSchedules = schedule.map((scheduleBlock) => {
    const dayNames = scheduleBlock.days.map((dayNum) =>
      getDayName(dayNum, language)
    );
    const timeRange = formatScheduleTime(scheduleBlock.open, scheduleBlock.time);

    return {
      days: dayNames,
      time: timeRange,
    };
  });

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-orange-500">
        {language === "es" ? "Horarios" : "Schedule"}
      </h2>

      <div className="space-y-3">
        {groupedSchedules.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors"
          >
            <div className="font-medium text-gray-700 mb-1 sm:mb-0">
              {item.days.join(", ")}
            </div>
            <div className="text-orange-600 font-semibold">{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
