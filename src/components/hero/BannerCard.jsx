import { useNavigate } from "react-router-dom";

import { Title } from "../common/CustomComponents";

const BannerCard = ({ title, desc, cover, className, classSecond }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hidden sm:block w-full h-full relative">
        <img src={cover} alt={title} />

        <div
          className={`${
            className
              ? "absolute bottom-0 p-8 w-full"
              : "flex absolute bottom-0 p-8 w-full"
          } ${
            className && classSecond ? "right-0 lg:left-48 lg:top-0 w-96" : ""
          }`}
        >
          <div>
            <Title level={2}>{title}</Title>
            <p className="text-lg font-normal leading-none">{desc}</p>
          </div>
          <div className="w-1/2 mt-5">
            <button
              className="secondary-btn flex justify-end"
              onClick={() => navigate("/shop")}
            >
              Shop now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile responsive */}
      <div className="block sm:hidden w-full h-full relative">
        <img src={cover} alt={title} />

        <div
          className={`${
            className
              ? "absolute bottom-0 p-4 w-full"
              : "flex absolute bottom-0 p-4 w-full"
          } ${
            className && classSecond ? "left-36 md:left-48 md:top-0 w-96" : ""
          }`}
        >
          <div>
            <h2 className="font-bold leading-none my-2">{title}</h2>
            <p className="text-lg font-normal leading-none">{desc}</p>
          </div>
          <div className="w-1/2 mt-5">
            <button
              className="secondary-btn flex justify-end secondary-btn-small"
              onClick={() => navigate("/shop")}
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCard;
