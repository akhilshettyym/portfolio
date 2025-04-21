const Button = ({
  name,
  isBeam = false,
  containerClass = "",
  type = "button",
  onClick = () => {},
  icon = null,
  disabled = false,
  fullWidth = false,
  ariaLabel = "",
  title = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || name}
      title={title || name}
      className={`group relative inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl font-semibold text-white 
        bg-gradient-to-br from-[#1c1c1c] to-[#343434] border border-white/10 
        shadow-md backdrop-blur-md 
        hover:shadow-xl hover:scale-[1.04] active:scale-95 
        transition-all duration-300 overflow-hidden
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
        ${fullWidth ? 'w-full' : ''} 
        ${containerClass}`}
    >
      {/* Beam pulse animation */}
      {isBeam && (
        <span className="relative flex h-3 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
        </span>
      )}

      {/* Optional icon */}
      {icon && <span className="text-lg">{icon}</span>}

      {/* Button text */}
      <span className="z-10 tracking-wide whitespace-nowrap">{name}</span>

      {/* Subtle shimmer and glow effect */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-500 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-10 pointer-events-none" />

      {/* Shimmer animation line */}
      <span className="absolute top-0 left-[-75%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[-20deg] group-hover:left-[125%] transition-all duration-[1200ms] ease-in-out pointer-events-none" />
    </button>
  );
};

export default Button;
