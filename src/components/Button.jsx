// const Button = ({ name, isBeam = false, containerClass }) => {
//     return (
//       <button className={`btn ${containerClass}`}>
//         {isBeam && (
//           <span className="relative flex h-3 w-4">
//             <span className="btn-ping" />
//             <span className="btn-ping_dot" />
//           </span>
//         )}
//         {name}
//       </button>
//     )
//   }
  
//   export default Button;
const Button = ({ name, isBeam = false, containerClass = "" }) => {
  return (
    <button
      className={`group relative inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-br from-[#1f1f1f] to-[#3c3c3c] shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-95 transition-all duration-300 ${containerClass}`}
    >
      {isBeam && (
        <span className="relative flex h-3 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
        </span>
      )}
      <span className="z-10">{name}</span>

      {/* Animated hover glow */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-20" />
    </button>
  );
};

export default Button;