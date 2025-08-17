import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <>
      <div className="py-20 container flex flex-col lg:flex-row items-center gap-5">
        <div>
          <BannerCard
            title="Wooden Water Bottles"
            desc="UP TO 60% OFF"
            cover="./images/hero/product1-1.png"
          />
        </div>
        <div className="flex flex-col justify-between gap-8">
          <BannerCard
            title="Wooden Brush Teeth"
            desc="UP TO 50% OFF"
            cover="./images/hero/product2.png"
            className
          />
          <BannerCard
            title="Fabric Handbags"
            desc="UP TO 40% OFF"
            cover="./images/hero/product3.png"
            className
            classSecond
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
