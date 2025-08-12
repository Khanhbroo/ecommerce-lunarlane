import { useDispatch, useSelector } from "react-redux";

import bgImage from "../assets/common/Frame.png";
import { BodyOne, Title } from "../components/common/CustomComponents";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { cartActions } from "../redux/slice/cartSlice";

const CartPage = () => {
  const totalItemsPrice = useSelector((state) =>
    state.cart.itemList.reduce((total, item) => total + item.totalPrice, 0)
  );
  const cartItems = useSelector((state) => state.cart.itemList);

  return (
    <>
      <section className="mt-16">
        <div className="h-[50vh]">
          <div className="images absolute top-0 left-0 w-full h-1/2">
            <img
              src={bgImage}
              alt="Background Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text absolute top-48 left-[45%]">
            <Title level={1}>Cart</Title>
          </div>
        </div>
        <div className="container flex justify-between">
          <div className="w-2/3">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <table>
                <thead className="text-xs text-primary uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-16 py-5">
                      Thumbnail
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <CartPageCard
                      key={item?.id}
                      id={item?.id}
                      cover={item?.cover}
                      name={item?.name}
                      price={item?.price}
                      quantity={item?.quantity}
                      totalPrice={item?.totalPrice}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-2/6 ml-16">
            <div className="bg-gray-100 p-5">
              <p className="text-lg font-medium text-primary">Cart Totals</p>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Subtotal</p>
                <p className="text-sm font-normal">
                  ${totalItemsPrice.toFixed(2)}
                </p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Shipping</p>
                <p className="text-sm font-normal">
                  Enter your address to view shipping options.
                </p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Total</p>
                <p className="text-sm font-normal">
                  ${totalItemsPrice.toFixed(2)}
                </p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />

              <button className="primary-btn mt-5">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;

export const CartPageCard = ({
  id,
  cover,
  name,
  price,
  quantity,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart({ id, price, name, images: cover }));
  };

  const handleRemoveFromCart = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const handleRemoveAllFromCart = () => {
    dispatch(cartActions.removeAllFromCart(id));
  };

  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50">
        <td className="p-4">
          {cover.slice(0, 1).map((images, index) => (
            <img
              key={index}
              src={images.image}
              alt={index}
              className="w-24 h-24 object-cover"
            />
          ))}
        </td>
        <td className="px-6 py-4">
          <BodyOne>{name}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${price.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              className="w-12 h-12 grid place-content-center bg-gray-100 text-primary border border-gray-300"
              onClick={handleAddToCart}
            >
              <BiPlus size={20} />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-16 h-12 text-primary outline-none border border-gray-300 px-6"
            />
            <button
              className="w-12 h-12 grid place-content-center bg-gray-100 text-primary border border-gray-300"
              onClick={handleRemoveFromCart}
            >
              <BiMinus size={20} />
            </button>
          </div>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${totalPrice.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <button
            className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white"
            onClick={handleRemoveAllFromCart}
          >
            <IoCloseOutline size={25} />
          </button>
        </td>
      </tr>
    </>
  );
};
