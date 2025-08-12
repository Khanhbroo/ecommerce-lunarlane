import { useSelector } from "react-redux";
import { useState } from "react";

import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Badges } from "../common/CustomComponents";

const ModalCart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalItemsPrice = useSelector((state) =>
    state.cart.itemList.reduce((total, item) => total + item.totalPrice, 0)
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");

  const handleOpenModal = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden";
  };

  const handleCloseModal = () => {
    setIsOpen(true);
    document.body.style.overflowX = "auto";
    const timeOut = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(true);
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
          <div className={`cartmodel p-16 text-primary `}>
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
            {activeTab === "cart" ? <></> : <></>}
          </div>
        </>
      )}
    </>
  );
};

export default ModalCart;
