import { BodyOne, Title } from "../common/CustomComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 right-0 bg-white text-primary rounded-full slider-btn"
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
      className="absolute bottom-0 right-20 bg-white text-primary rounded-full slider-btn z-10"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <section className="testimonials">
        <div className="container h-full flex items-center justify-center">
          <div className="w-1/2 flex relative z-50">
            <div className="box w-96 h-96 bg-white rounded-full z-50">
              <img
                src="../images/hero/girl.png"
                alt="Girl smiling"
                className="absolute -top-[130px] left-0 z-10 rounded-full"
              />
            </div>
            <div className="bg-[rgba(255,255,255,0.5)] px-5 backdrop-blur-sm p-3 rounded-lg absolute top-36 right-60 z-50">
              <BodyOne className="leading-none">Our Satisfied User</BodyOne>
              <div className="flex items-center">
                <img
                  src="../images/testimonial/pic1-2.png"
                  alt="Man with glasses"
                  className="w-14 h-14 object-cover rounded-full border-2 border-gray-100"
                />
                <img
                  src="../images/testimonial/pic2-2.png"
                  alt="Man with glasses"
                  className="-ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-100"
                />
                <span className="-ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-300 bg-slate-50 flex items-center justify-center">
                  +12
                </span>
              </div>
            </div>
          </div>
          <div className="left w-1/2 relative z-50">
            <Title level={2}>What our clients say about us</Title>
            <BodyOne className="mb-8">
              From the moment I ordered to delivery, everything was smooth and
              professional. The furniture&apos;s quality exceeded my
              expectations—sturdy, stylish, and exactly as described. Excellent
              customer service and fast shipping. I&apos;ll definitely shop here
              again!
            </BodyOne>
            <Slider {...settings}>
              <TestimonialsCard
                name="Kenneth Fung"
                post="Undergraduate Student"
                cover="../images/testimonial/pic5.jpg"
              />
              <TestimonialsCard
                name="Joe Smith"
                post="Postgraduate Student"
                cover="../images/testimonial/pic6.jpg"
              />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

export const TestimonialsCard = ({ name, post, cover }) => {
  return (
    <>
      <div className="flex items-center gap-8">
        <div className="w-20 h-20">
          <img
            src={cover}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="details">
          <Title className="font-medium leading-none" level={5}>
            {name}
          </Title>
          <p>{post}</p>
        </div>
      </div>
    </>
  );
};
