const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseClasses = "px-1 py-1 border cursor-pointer font-bold uppercase";
  const variantClasses = {
    accent: "bg-accent text-surface border-accent",
    surface: "bg-surface text-accent border-accent",
    disabled: "bg-surface text-accent",
  }[variant];
  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
