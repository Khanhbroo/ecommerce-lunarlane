import { useState } from "react";
import { useParams } from "react-router-dom";

import { productlists } from "../../assets/data/data";
import {
  BodyOne,
  Caption,
  Title,
} from "../../components/common/CustomComponents";
import { RenderRatingStars } from "../../components/product/ProductCard";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import ProductSlideCart from "../../components/product/ProductSlideCart";
import { FilterDiscover } from "../../components/hero/InstagramPost";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const colorsValue = {
  red: "#f11414",
  yellow: "#ebe219",
  green: "#008000",
  blue: "#0000ff",
  white: "#e9e9e9",
  brown: "#a52a2a",
  clear: "#ffffff",
  "dark brown": "#654321",
  light: "#f5f5dc",
  black: "#000000",
  natural: "#8b4513",
  "light brown": "#deb887",
  dark: "#696969",
  gray: "#808080",
  beige: "#f5f5dc",
};

const ProductDetails = () => {
  const { productId } = useParams();

  const product = productlists.find((item) => item.id === parseInt(productId));

  const { title, images, price, description, discount, rating, color } =
    product || {};
  const [selectedColor, setSelectedColor] = useState(color[0].value);
  const [selectedPrice, setSelectedPrice] = useState(
    price.find((price) => price.color === color[0].value)
  );

  const handleColorChange = (color) => {
    const newSelectedPrice = price.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };

  if (!product) {
    return (
      <div className="container mt-32">
        <h2 className="text-center text-2xl">Product not found</h2>{" "}
      </div>
    );
  }

  const CustomPage = ({ index, onClick }) => (
    <div>
      <img
        src={images[index].image}
        alt={images[index].title}
        onClick={onClick}
      />
    </div>
  );

  const settings = {
    customPaging: (i) => <CustomPage index={i} />,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="container mt-32 slideproduct">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="images lg:w-1/2">
            <div>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.image}
                    className="w-full h-full"
                  />
                ))}
              </Slider>
            </div>
          </div>

          <div className="details lg:w-1/2 px-16 pt-16">
            <button className="feature-btn bg-indigo-500">
              SALE {discount}% OFF
            </button>
            <Title level={2} className="my-2">
              {title}
            </Title>
            <div className="flex items-center gap-2 -mt-5 mb-5">
              <div className="flex items-center gap-1">
                {RenderRatingStars(rating)}
              </div>
              <p>{rating} Review</p>
            </div>
            <p className="text-[15px]">{description}</p>
            <br />
            <div>
              <Caption>Colors</Caption>
              <div className="flex items-center gap-3 mt-5">
                {color.map((colorOption, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border-gray-300 ${
                      selectedColor === colorOption.value ? "selected" : ""
                    }`}
                    style={{ backgroundColor: colorsValue[colorOption.value] }}
                    onClick={() => handleColorChange(colorOption.value)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <Caption>Prices</Caption>
              <div className="flex items-center gap-3">
                <BodyOne className="line-through mt-4">
                  ${selectedPrice.value}
                </BodyOne>
                <Title level={4} className="text-primary-green">
                  $
                  {(
                    selectedPrice.value -
                    (selectedPrice.value * discount) / 100
                  ).toFixed(2)}
                </Title>
              </div>
            </div>
            <br />
            <div className="flex items-center gap-3">
              <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                <BiPlus size={20} />
              </button>
              <input
                type="text"
                value={1}
                className="w-16 h-12 text-primary outline-none border border-gray-300 text-center text-2xl"
              />
              <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                <BiMinus size={20} />
              </button>
              <button className="primary-btn uppercase">Add to cart</button>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <button className="flex items-center gap-2 secondary-btn">
                <BiHeart size={20} />
                Add To Wishlist
              </button>
              <button className="flex items-center gap-2 secondary-btn">
                <BiHeart size={20} />
                Compare
              </button>
            </div>
            <hr className="my-5" />
            <label htmlFor="">
              <span className="text-primary font-bold">SKU:</span> PRT584E63A
            </label>
            <br />
            <label htmlFor="">
              <span className="text-primary font-bold">Category:</span> Baby
              Product
            </label>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row my-10">
          <div className="lg:w-1/2">
            <Title level={3}>Fit your child</Title>
            <Caption>
              Designed for superior comfort and support, our products are
              perfect for your child&apos;s needs. Whether it&apos;s playtime or
              nap time, our products provide the perfect fit for your little
              one. Experience the difference with our high-quality products that
              prioritize your child&apos;s comfort and well-being. Treat your
              child to the best with our carefully crafted products that ensure
              a snug and cozy fit. Your child deserves nothing less than the
              best, and our products deliver just that. Shop now and give your
              child the comfort they deserve.
            </Caption>
            <Title level={3} className="mt-5">
              Specifications
            </Title>
            <div className="flex flex-col gap-3 mt-2">
              <Caption>
                Assembled Dimensions (L x W x H) 21.5&quot; x 19&quot; x 27
              </Caption>
              <Caption>Assembled Product Weight: 25 lbs.</Caption>
              <Caption>Hardness Mode - Rear-Facing - 5-40 lbs.</Caption>
              <Caption>Hardness Mode - Forward-Facing - 25-65 lbs.</Caption>
              <Caption>Booster Mode - Harness + Booster - 40-100 lbs.</Caption>
              <Caption>Booster Mode - Backless n/a.</Caption>
              <Caption>Rear-Facing Child Max Height Capacity: 43 in</Caption>
              <Caption>Forward-Facing Child Max Height Capacity: 54 in</Caption>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-5 lg:px-8 mt-5">
            <ProductDetailsBox
              title="All-in-one Car Seat"
              desc="One car seat that fits your child, vehicle and life from birth through booster."
            />
            <ProductDetailsBox
              title="Space-Saving Design"
              desc="Slim, space-saving design takes up less space in vehicle without compromising comfort."
            />
            <ProductDetailsBox
              title="Easiest to Install Correctly"
              desc="Chicco patented SuperCinch force-multiplying LATCH tightener ensures a tight and secure fit everytime."
            />
            <ProductDetailsBox
              title="No Added Chemicals"
              desc="ClearTex products meet federal flammability standards without added chemicals."
            />
          </div>
        </div>
        <Title level={3} className="my-5">
          Related Products
        </Title>
        <ProductSlideCart />
      </section>
      <br />
      <FilterDiscover />
    </>
  );
};

export default ProductDetails;

export const ProductDetailsBox = ({ title, desc }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-3 text-center bg-gray-100 p-8 lg:p-0">
        <Title level={5}>{title}</Title>
        <Caption>{desc}</Caption>
      </div>
    </>
  );
};
