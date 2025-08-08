import { useState } from "react";

import PropTypes from "prop-types";
import { BodyOne, Caption, Title } from "../common/CustomComponents";

const HeroItem = ({ title, description, prices, colors, image }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedPrice, setSelectedPrice] = useState(
    prices.find((price) => price.color === colors[0].value)
  );

  const handleColorClick = (color) => {
    const newSelectedPrice = prices.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };

  return (
    <>
      <section className="content flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
        <div className="left w-1/2 p-8 lg:p-32 lg:py-64">
          <Title
            level={1}
            className="leading-none font-medium md:text-3xl lg:text-[70px] lg:leading-snug"
          >
            {title}
          </Title>
          <BodyOne>{description}</BodyOne>

          <div className="flex items-start gap-8 my-5">
            <div>
              <Caption>Prices</Caption>
              <div className="mt-3">
                <Title level={5}>{selectedPrice.value.toFixed(2)}</Title>
              </div>
            </div>
            <div>
              <Caption>Colors</Caption>
              <div className="flex items-center justify-center gap-3 mt-5">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => handleColorClick(color.value)}
                    className={`w-4 h-4 rounded-full cursor-pointer border-gray-300 ${
                      selectedColor === color.value ? "selected" : undefined
                    }`}
                    style={{ backgroundColor: color.value }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <button className="primary-btn uppercase">View details</button>
            <button className="secondary-btn uppercase">View shops</button>
          </div>
        </div>
        <div className="right bg-white p-5 w-1/2 h-full flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="h-[60vh] w-full object-contain"
          />
        </div>
        <div className="lg:bg-black lg:h-[90vh] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"></div>
      </section>
    </>
  );
};

export default HeroItem;

HeroItem.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  prices: PropTypes.node.isRequired,
  colors: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
};
