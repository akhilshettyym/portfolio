import { logoIconsList } from "../imports"

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none marquee-item">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="w-20 h-20 md:w-28 md:h-28 object-contain"
      />
    </div>
  );
};

const LogoSection = () => (
  <div className="relative my-5 overflow-hidden">
    <div className="gradient-edge left-0 bg-gradient-to-r from-black/90 to-transparent" />
    <div className="gradient-edge right-0 bg-gradient-to-l from-black/90 to-transparent" />

    <div className="marquee h-52">
      <div className="marquee-inner flex gap-6 md:gap-12">
        {[...logoIconsList, ...logoIconsList].map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoSection;