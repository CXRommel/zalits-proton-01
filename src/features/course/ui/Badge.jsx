const badgeVariants = {
  orange: "bg-orange-500 text-white",
  purple: "bg-purple-500 text-white",
  cyan: "bg-cyan-500 text-white",
  green: "bg-green-500 text-white",
  yellow: "bg-yellow-500 text-white",
  indigo: "bg-indigo-500 text-white",
  red: "bg-red-500 text-white",
  gray: "bg-gray-500 text-white",
};

const badgeSizes = {
  sm: "text-xs px-2 py-1",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-2",
};

function Badge({
  children,
  variant = "gray",
  size = "md",
  className = "",
  ...props
}) {
  const baseClasses = "inline-flex items-center font-medium rounded-full";
  const variantClasses = badgeVariants[variant] || badgeVariants.gray;
  const sizeClasses = badgeSizes[size] || badgeSizes.md;

  const combinedClasses =
    `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  return (
    <span className={combinedClasses} {...props}>
      {children}
    </span>
  );
}

export default Badge;
