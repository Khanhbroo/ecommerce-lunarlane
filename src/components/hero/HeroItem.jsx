import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import { BodyOne, Caption, Title } from "../common/CustomComponents";

const HeroItem = ({ title, description, prices, colors, image }) => {
  const navigate = useNavigate();

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
      <div className="hidden sm:block">
        <section className="flex content justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
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
              <a href="#product-details" className="primary-btn uppercase">
                View details
              </a>
              <button
                className="secondary-btn uppercase"
                onClick={() => navigate("/shop")}
              >
                View shops
              </button>
            </div>
          </div>
          <div className="right bg-white p-5 w-1/2 h-full flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="lg:h-[60vh] h-[40vh] w-full object-contain"
            />
          </div>
          <div className="lg:bg-black lg:h-[90vh] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"></div>
        </section>
      </div>
      {/* On mobile: < 768px */}

      <div className="block sm:hidden pb-8">
        <section className="flex flex-col bg-white">
          <div className="p-5 w-full h-full flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="h-[40vh] w-full object-contain"
            />
          </div>
          <div className="container">
            <div className=" pb-1 text-center">
              <Title level={4} className="leading-none font-medium">
                {title}
              </Title>
              <BodyOne className="mt-3 text-sm">{description}</BodyOne>
            </div>
            <div className="flex justify-center bg-white-100 py-2">
              <table>
                <thead>
                  <tr className="flex gap-[96px] mb-2">
                    <th scope="col">
                      <Caption className="text-black">Colors</Caption>
                    </th>
                    <th scope="col">
                      <Caption className="text-black">Prices</Caption>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((price, index) => (
                    <tr key={index} className="flex gap-[100px] mb-2">
                      <td>
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full cursor-pointer border-gray-300 ml-4"
                          style={{ backgroundColor: price.color }}
                        ></div>
                      </td>
                      <td>
                        <p className="text-gray-950">{price.value}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between mt-8">
              <a
                href="#product-details"
                className="primary-btn uppercase btn-small"
              >
                View details
              </a>
              <button
                className="secondary-btn uppercase btn-small"
                onClick={() => navigate("/shop")}
              >
                View shops
              </button>
            </div>
          </div>
        </section>
      </div>
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
