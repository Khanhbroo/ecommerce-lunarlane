import { useNavigate } from "react-router-dom";

import { Title } from "../common/CustomComponents";

const BannerCard = ({ title, desc, cover, className, classSecond }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-full relative">
        <img src={cover} alt={title} />

        <div
          className={`${
            className
              ? "absolute bottom-0 p-8 w-full"
              : "flex absolute bottom-0 p-8 w-full"
          } ${
            className && classSecond ? "left-0 lg:left-48 lg:top-0 w-96" : ""
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
    </>
  );
};

export default BannerCard;
