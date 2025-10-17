function Card({
  children,
  className = "",
  padding = "p-6",
  rounded = "rounded-2xl",
  background = "bg-gradient-to-br from-slate-800/50 to-slate-900/50",
  border = "border border-white/10",
  backdrop = "backdrop-blur-sm",
  hover = "hover:border-white/20",
  ...props
}) {
  const baseClasses = `${background} ${backdrop} ${border} ${rounded} ${padding} ${hover} transition-all duration-300`;
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}

function CardHeader({ children, className = "" }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

function CardBody({ children, className = "" }) {
  return <div className={`${className}`}>{children}</div>;
}

function CardFooter({ children, className = "" }) {
  return (
    <div className={`mt-4 pt-4 border-t border-white/10 ${className}`}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
