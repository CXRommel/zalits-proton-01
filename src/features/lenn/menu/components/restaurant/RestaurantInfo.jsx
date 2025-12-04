import { useState } from "react";
import { RestaurantAddressCard } from "./RestaurantAddressCard";
import { RestaurantContactCard } from "./RestaurantContactCard";
import { StatusBadge } from "./ScheduleItems";

const imgSize = {
  sm: "size-16",
  md: "size-20",
  lg: "size-24",
  xl: "size-32",
};

const imgStyle = {
  circular: "rounded-full",
  square: "rounded-xl",
  default: "rounded-2xl",
};

const ScheduleTitles = {
  isOpen: { en: "Open Now", es: "Abierto" },
  isClosed: { en: "Closed", es: "Cerrado" },
  moreInfo: { en: "More Info", es: "Más Información" },
};

export function RestaurantInfo({
  slogan,
  logo,
  name,
  size = "md",
  schedule,
  address,
  contact,
  lang = "en",
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const imgClasses = `${imgSize[size] ?? imgSize.md}
                       ${imgStyle[logo.container] ?? imgStyle.default}
                       shadow-lg border-2 border-white/50 object-cover`;
  const shouldShowImage = logo.url && !imageError;

  return (
    <div className="bg-white/80 shadow-lg rounded-3xl group">
      <div
        className="p-6 flex flex-col @sm:flex-row items-center @sm:items-start gap-8 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="relative">
          {shouldShowImage ? (
            <img
              src={logo.url}
              alt={name}
              className={imgClasses}
              onError={() => setImageError(true)}
            />
          ) : (
            <span
              className={`grid place-items-center bg-gradient-to-br from-stone-800 to-stone-600 text-white font-bold text-3xl ${imgClasses}`}
            >
              {name.substring(0, 2)}
            </span>
          )}
          <StatusBadge schedule={schedule} lang={lang} />
        </div>

        <div className="text-center sm:text-left space-y-3">
          <div>
            <h1 className="text-4xl font-semibold text-stone-800">{name}</h1>
            <h2 className="text-stone-500 font-light italic text-lg">
              {slogan[lang]}
            </h2>
          </div>

          <div className="flex items-center justify-center @sm:justify-start gap-2 text-stone-400 group-hover:text-blue-600 transition-colors">
            <span className="text-sm font-semibold uppercase">
              {ScheduleTitles.moreInfo[lang]}
            </span>
            <svg className="size-5 text-stone-400 group-open:text-blue-600 transition-transform duration-300 group-open:rotate-180">
              <use href="/lenn/sprites.svg#icon-arrow-down" />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="p-6 grid grid-cols-1 @xl:grid-cols-2 gap-6 mt-2">
            <RestaurantAddressCard
              address={address}
              schedule={schedule}
              lang={lang}
              {...props}
            />
            <RestaurantContactCard contact={contact} {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}
