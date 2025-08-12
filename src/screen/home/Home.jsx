import { Caption, Title } from "../../components/common/CustomComponents";
import ProductSlideCart from "../../components/product/ProductSlideCart";
import {
  Banner,
  Hero,
  Product,
  ShippingInfo,
  ProductSlide,
  Testimonials,
  InstagramPost,
} from "../../router";

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <ShippingInfo />
      <Banner />
      <ProductSlide />
      <Testimonials />

      <div className="container my-16 slideproduct">
        <Title level={3}>Recent Product</Title>
        <Caption className="uppercase">
          Discover the most trending products in lunar lane
        </Caption>
        <br />
        <ProductSlideCart />
      </div>

      <InstagramPost />
    </>
  );
};

export default Home;
