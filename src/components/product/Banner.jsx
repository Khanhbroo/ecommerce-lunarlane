import { useNavigate } from "react-router-dom";

import { promotionalInfo } from "../../assets/data/data";
import { BodyOne, Title } from "../common/CustomComponents";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between pt-20">
        {promotionalInfo.map((info) => (
          <>
            <div className="box relative w-full" key={info.id}>
              <div className="w-full h-[45vh]">
                <img
                  src={info.image}
                  alt={info.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block absolute md:top-16 lg:top-0 left-0 p-3 md:p-8 lg:w-2/3">
                <span className="bg-white px-6 py-2 text-sm">{info.title}</span>
                <Title level={2} className="my-5">
                  {info.title}
                </Title>
                <BodyOne>{info.description}</BodyOne>
                <button
                  className="secondary-btn"
                  onClick={() => navigate("/shop")}
                >
                  Shop Now
                </button>
              </div>
              {/* Mobile */}
              <div className="block sm:hidden absolute top-0 left-0 p-3 md:p-8 lg:w-2/3">
                <span className="bg-white px-6 py-2 text-sm">{info.title}</span>
                <Title level={4} className="my-5">
                  {info.title}
                </Title>
                <BodyOne>{info.description}</BodyOne>
                <button
                  className="secondary-btn"
                  onClick={() => navigate("/shop")}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default Banner;
