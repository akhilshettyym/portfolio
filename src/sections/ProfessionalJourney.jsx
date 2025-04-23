import { MyProfessionalJourney } from '../imports';

const ProfessionalJourney = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">MY PROFESSIONAL JOURNEY</h3>

      <div className="client-container">
        {MyProfessionalJourney.map((item) => (
          <a
            key={`review-${item.id}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="client-review block transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#29292a] hover:shadow-md rounded-xl p-4"
          >
            <div>
              <p className="text-white-800 font-light text-justify">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.positionLine1}
                      <br />
                      <span className="">{item.positionLine2}</span>
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default ProfessionalJourney;