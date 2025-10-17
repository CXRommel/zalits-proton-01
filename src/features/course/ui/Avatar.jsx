import { useState } from "react";

const avatarSizes = {
  sm: "w-12 h-12 text-sm",
  md: "w-16 h-16 text-lg",
  lg: "w-24 h-24 text-2xl",
  xl: "w-32 h-32 text-4xl",
};

function Avatar({
  src,
  alt = "",
  fallback = "👤",
  size = "md",
  gradientFrom = "from-purple-500",
  gradientTo = "to-pink-500",
  className = "",
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const sizeClasses = avatarSizes[size] || avatarSizes.md;

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const shouldShowImage = src && !imageError;

  return (
    <div className={`relative ${sizeClasses} ${className}`} {...props}>
      <div
        className={`w-full h-full rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} p-1`}
      >
        <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
          {shouldShowImage ? (
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-cover rounded-full transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          ) : (
            <span className="select-none">{fallback}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Avatar;
