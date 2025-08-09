import { Title, BodyOne } from "../common/CustomComponents";
import ProductSlideCart from "./ProductSlideCart";

const ProductSlide = () => {
  return (
    <>
      <section className="py-20 bg-white sliderproduct">
        <div className="container">
          <Title level={4}>What is trending now</Title>
          <div className="flex items-center gap-3 uppercase">
            <BodyOne className="text-sm uppercase text-gray-500">
              Discover the most trending products in lunar lane
            </BodyOne>
          </div>

          <ProductSlideCart />
        </div>
      </section>
    </>
  );
};

export default ProductSlide;
