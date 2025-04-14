const TitleHeader = ({ title, sub }) => {
    return (
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray_gradient mb-3">{title}</h2>
        <p className="text-white-600 text-lg md:text-xl max-w-2xl">{sub}</p>
      </div>
    )
  }
  
  export default TitleHeader;