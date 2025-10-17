import { forwardRef } from "react";

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
  secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
  tech: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      onClick,
      as: Component = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = buttonVariants[variant] || buttonVariants.primary;
    const sizeClasses = buttonSizes[size] || buttonSizes.md;
    const effectClasses = disabled ? "" : "hover:scale-105 active:scale-95";

    const combinedClasses =
      `${baseClasses} ${variantClasses} ${sizeClasses} ${effectClasses} ${className}`.trim();

    return (
      <Component
        ref={ref}
        className={combinedClasses}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
