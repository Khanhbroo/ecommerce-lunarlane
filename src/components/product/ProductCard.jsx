import { useState } from "react";

import { IoMdHeart } from "react-icons/io";
import { IoCart, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BodyOne, Title } from "../common/CustomComponents";
import {
  FaFacebookF,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const RenderRatingStars = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStars = rating % 1 !== 0;
  const stars = [];

  // Logic for rendering stars
  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} color="#ff8a00" />);
    } else if (hasHalfStars && i === fullStars) {
      stars.push(<FaStarHalfAlt key={`half-star-${i}`} color="#ff8a00" />);
    } else {
      stars.push(<FaRegStar key={`reg-star-${i}`} color="#ff8a00" />);
    }
  }
  return stars;
};

const ProductCard = ({
  id,
  title,
  description,
  images,
  price,
  discount,
  rating,
  featured,
  color,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="product card">
        <div className="images h-96">
          {images.map((cover, index) => (
            <img
              key={index}
              src={cover?.image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ))}
          <div className="flex justify-between w-full p-5 absolute top-0 left-0">
            {discount && <button className="discount-btn">{discount}%</button>}
            {featured && (
              <button className="feature-btn">{featured && "Featured"}</button>
            )}
          </div>
          <div className="overlay flex items-center justify-center gap-2 absolute bottom-0 left-0 right-0 m-5">
            <button
              onClick={handleOpenModal}
              className="quick-view-btn product-btn primary-btn"
            >
              Quick View
            </button>
            <button className="add-to-cart-btn product-btn primary-btn">
              <IoCart size={23} />
            </button>
            <button className="love-btn product-btn primary-btn">
              <IoMdHeart size={23} />
            </button>
          </div>
        </div>
        <div className="details flex items-center flex-col bg-white pt-6">
          <NavLink to={`/product-details/${id}`}>
            <BodyOne>{title}</BodyOne>
          </NavLink>
          <div className="flex items-center gap-2 -mt-2 mb-2">
            {RenderRatingStars(rating)}
          </div>
          <div className="flex items-center gap-3">
            {price.slice(0, 1).map((priceItem, index) => (
              <>
                <BodyOne className="line-through" key={index}>
                  {priceItem.value}
                </BodyOne>
                <BodyOne className="text-primary-green">
                  $
                  {(
                    priceItem.value -
                    (priceItem.value * discount) / 100
                  ).toFixed(2)}
                </BodyOne>
              </>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="overlay-bg" onClick={handleCloseModal}>
            <div className="modal-overlay" onClick={handleCloseModal}>
              <div
                className="modal-content flex justify-between"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="w-1/2 h-[500px] overflow-hidden">
                  {images.slice(0, 1).map((cover, index) => (
                    <img
                      key={index}
                      src={cover?.image}
                      alt={title}
                      className="modal-image w-full h-full object-cover"
                    />
                  ))}
                </div>
                <div className="modal-details w-1/2 h-[500px] overflow-y-scroll p-9">
                  <button className="feature-btn bg-indigo-500">
                    SALE {discount}% OFF
                  </button>
                  <Title level={2}>{title}</Title>
                  <div className="flex items-center gap-1 -mt-2">
                    {RenderRatingStars(rating)}
                  </div>
                  {price.slice(0, 1).map((priceItem, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <BodyOne className="line-through mt-4">
                        ${priceItem.value}
                      </BodyOne>
                      <Title level={3} className="text-primary-green">
                        $
                        {(
                          priceItem.value -
                          (priceItem.value * discount) / 100
                        ).toFixed(2)}
                      </Title>
                    </div>
                  ))}
                  <BodyOne className="text-sm leading-6">{description}</BodyOne>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value="1"
                      className="w-12 h-12 text-primary outline-none border-2 border-primary px-4"
                    />
                    <button className="primary-btn uppercase">
                      Add to cart
                    </button>
                  </div>
                  <hr className="my-5" />
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Title level={5} className="text-lg">
                        Category:{" "}
                        <span className="font-normal">Wooden Product</span>
                      </Title>
                    </div>
                    <div className="flex items-center gap-3">
                      <Title level={5} className="text-lg">
                        Tag: <span className="font-normal">Wooden</span>
                      </Title>
                    </div>
                    <div className="flex items-center gap-3">
                      <Title level={5} className="text-lg">
                        Share:
                      </Title>
                      <div className="flex items-center -mt-1 -ml-2 gap-3">
                        <FaFacebookF className="h-6 w-6 p-1 icon-hover" />
                        <AiFillInstagram className="h-6 w-6 p-1 icon-hover" />
                        <FaTwitter className="h-6 w-6 p-1 icon-hover" />
                      </div>
                    </div>
                  </div>

                  <button
                    className="close-btn absolute top-0 right-0 w-12 h-12 flex justify-center items-center bg-primary-green text-white"
                    onClick={handleCloseModal}
                  >
                    <IoClose size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCard;
