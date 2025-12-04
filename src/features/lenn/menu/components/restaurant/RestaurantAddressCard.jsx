import { ScheduleCard } from "./ScheduleItems";

export function RestaurantAddressCard({ schedule, address, lang, ...props }) {
  const { street, city, state, zip, country } = address;
  return (
    <div {...props}>
      <div className=" w-full flex items-start gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
        <div className="p-2 bg-red-50 text-red-500 rounded-lg group-hover:scale-110 transition-transform">
          <svg className="size-6 text-red-500">
            <use href="/lenn/sprites.svg#icon-map-pin" />
          </svg>
        </div>
        <div>
          <p className="text-stone-800 hover:text-red-600 transition-colors font-medium text-lg">
            {street}, {zip}
          </p>
          <p className="text-stone-500">
            {city}, {state}, {country}
          </p>
        </div>
      </div>
      <ScheduleCard schedule={schedule} lang={lang} />
    </div>
  );
}
