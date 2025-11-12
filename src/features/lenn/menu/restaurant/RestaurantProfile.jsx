import { useState } from "react";

const imgSize = {
  sm: "w-24 h-24 text-sm",
  md: "w-32 h-32 text-lg",
  lg: "w-38 h-38 text-2xl",
  xl: "w-64 h-64 text-4xl",
};
const imgStyle = {
  circular: "rounded-full",
  square: "rounded-md",
  default: "rounded-xl",
};

export function RestaurantProfile({
  slogan,
  logo,
  name,
  size = "md",
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const imgClasses = `${imgSize[size] ?? imgSize.md} ${imgStyle[logo.container] ?? imgStyle.default}`;
  const shouldShowImage = logo.url && !imageError;

  return (
    <div className="grid grid-cols-1 place-items-center">
      {shouldShowImage ? (
        <img
          src={
            "https://encrypted-tbn0..com/images?q=tbn:ANd9GcQUZK5gi1clbPagXVx8PLkTK8qhlBCjve9oRw&s"
          }
          alt={name}
          width={size}
          height={size}
          className={`${imgClasses}`}
          onError={() => setImageError(true)}
        />
      ) : (
        <span
          className={`grid place-items-center text-7xl bg-amber-500 text-white ${imgClasses}`}
        >
          {name.substring(0, 2)}
        </span>
      )}

      <h1 className="text-4xl pt-1">{name}</h1>
      <h2 className="text-lg italic pt-4">{slogan}</h2>
    </div>
  );
}
