"use client";

import Image from "next/image";
import Slider from "react-slick";

const SliderHero = () => {
  const settings = {
    dots: true,
    arrows: true,
    // centerMode: true,
    infinite: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="full-bleed">
      <Slider
        {...settings}
        className="overflow-hidden"
        // className="overflow-hidden min-h-[230px] h-[230px] sm:h-[450px] md:h-[580px] widest"
      >
        <Image
          priority
          src="/images/sample-1.webp"
          alt="Hero"
          width={1200}
          height={600}
          className="object-contain"
        />
        <Image
          priority
          src="/images/sample-2.webp"
          alt="Hero"
          width={1200}
          height={600}
          className="object-contain"
        />
        <Image
          priority
          src="/images/sample-3.webp"
          alt="Hero"
          width={1200}
          height={600}
          className="object-contain"
        />
      </Slider>
    </section>
  );
};

export default SliderHero;
