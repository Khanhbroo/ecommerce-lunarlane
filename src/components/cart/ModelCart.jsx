import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { IoCartOutline, IoCloseOutline, IoHeartOutline } from "react-icons/io5";
import { Badges, BodyOne, Title } from "../common/CustomComponents";
import { cartActions } from "../../redux/slice/cartSlice";
import { NavLink } from "react-router-dom";

const ModalCart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalItemsPrice = useSelector((state) =>
    state.cart.itemList.reduce((total, item) => total + item.totalPrice, 0)
  );
  const cartItems = useSelector((state) => state.cart.itemList);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");

  const handleOpenModal = () => {
    setIsOpen(true);
    setIsClosing(false);
    document.body.style.overflowX = "hidden";
  };

  const handleCloseModal = () => {
    setIsOpen(true);
    setIsClosing(true);

    document.body.style.overflowX = "auto";
    const timeOut = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div
        className="hidden md:block relative z-20 cursor-pointer"
        onClick={handleOpenModal}
      >
        <IoHeartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">0</Badges>
        </div>
      </div>

      <div
        className="hidden md:block relative z-20 cursor-pointer"
        onClick={handleOpenModal}
      >
        <IoCartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">{totalQuantity}</Badges>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="cartoverlay" onClick={handleCloseModal}></div>
          <div
            className={`cartmodel p-16 text-primary ${
              isClosing ? "closing" : ""
            }`}
          >
            <div className="flex justify-between gap-5">
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "cart" ? "text-primary" : ""
                }`}
                onClick={() => handleTabChange("cart")}
              >
                Shopping Cart
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                  {totalQuantity}
                </span>
              </button>

              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "wishlist" ? "text-primary" : ""
                }`}
                onClick={() => handleTabChange("wishlist")}
              >
                Wishlist
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                  0
                </span>
              </button>
            </div>
            <div className="line-container">
              <div
                className={`line ${activeTab === "cart" ? "active" : ""}`}
              ></div>
            </div>
            {activeTab === "cart" ? (
              <>
                {cartItems.map((item) => (
                  <CardProduct
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
                <div className="total flex items-center justify-between mt-10">
                  <Title level={6}>Subtotal</Title>
                  <Title level={6}>{totalItemsPrice.toFixed(2)}</Title>
                </div>
                <div className="checkout">
                  <NavLink
                    to="/cart"
                    className="primary-btn w-full mt-2"
                    onClick={handleCloseModal}
                  >
                    View Cart
                  </NavLink>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ModalCart;

export const CardProduct = ({ id, cover, name, price, quantity }) => {
  const dispatch = useDispatch();

  const handleRemoveAllFromCart = () => {
    dispatch(cartActions.removeAllFromCart(id));
  };

  return (
    <>
      <div className="mt-5 border-b-2 border-gray-200 pb-5">
        <div className="flex items-center gap-5">
          <div className="images w-20 h-20">
            {cover?.slice(0, 1).map((image, index) => (
              <img
                key={index}
                src={image?.image}
                alt={index}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <div className="details w-1/2">
            <BodyOne>{name}</BodyOne>
            <p className="text-primary-green">
              {quantity} x ${price?.toFixed(2)}
            </p>
          </div>
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary">
            <IoCloseOutline size={25} onClick={handleRemoveAllFromCart} />
          </button>
        </div>
      </div>
    </>
  );
};
