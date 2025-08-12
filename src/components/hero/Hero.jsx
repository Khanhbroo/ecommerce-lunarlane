import Slider from "react-slick";
import { herolist } from "../../assets/data/data";
import HeroItem from "./HeroItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Banner from "./Banner";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 left-96  lg:left-1/2 slider-btn"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 bg-white text-primary right-96 lg:left-[46.5%] slider-btn z-10"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
};

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
    ],
  };

  return (
    <div>
      <section className="h-[50vh] lg:h-[90vh] mt-20 bg-white-100 relative z-1">
        <Slider {...settings}>
          {herolist.map((item) => (
            <HeroItem
              key={item.id}
              title={item.title}
              description={item.description}
              prices={item.price}
              colors={item.color}
              image={item.image}
            />
          ))}
        </Slider>
      </section>

      <Banner />
    </div>
  );
};

export default Hero;
