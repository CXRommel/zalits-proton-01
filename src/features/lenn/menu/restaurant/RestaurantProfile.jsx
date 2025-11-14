import { useState } from "react";

const imgSize = {
  sm: "w-20 h-20 text-lg",
  md: "w-28 h-28 text-2xl",
  lg: "w-36 h-36 text-3xl",
  xl: "w-48 h-48 text-5xl",
};

const imgStyle = {
  circular: "rounded-full",
  square: "rounded-xl",
  default: "rounded-2xl",
};

export function RestaurantProfile({
  slogan,
  logo,
  name,
  size = "md",
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const imgClasses = `${imgSize[size] ?? imgSize.md} ${imgStyle[logo.container] ?? imgStyle.default} shadow-lg border-4 border-white`;
  const shouldShowImage = logo.url && !imageError;

  return (
    <div className="grid grid-cols-1 place-items-center">
      {shouldShowImage ? (
        <img
          src={logo.url}
          alt={name}
          width={size}
          height={size}
          className={`${imgClasses}`}
          onError={() => setImageError(true)}
        />
      ) : (
        <span
          className={`grid place-items-center text-6xl bg-neutral-800 text-white ${imgClasses}`}
        >
          {name.substring(0, 2)}
        </span>
      )}

      <h1 className="text-5xl font-bold text-stone-800 pt-4">{name}</h1>
      <h2 className="text-stone-500 italic pt-2 text-lg">{slogan}</h2>
    </div>
  );
}
