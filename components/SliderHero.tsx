"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const SliderHero = () => {
  return (
    <section className="full-bleed">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="lg:h-[650px]">
            <Image
              priority
              src="/images/sample-1.webp"
              alt="Hero"
              width={1200}
              height={600}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:h-[650px]">
            <Image
              priority
              src="/images/sample-2.webp"
              alt="Hero"
              width={1200}
              height={600}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:h-[650px]">
            <Image
              priority
              src="/images/sample-3.webp"
              alt="Hero"
              width={1200}
              height={600}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:h-[650px]">
            <Image
              priority
              src="/images/sample-4.webp"
              alt="Hero"
              width={1200}
              height={600}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:h-[650px]">
            <Image
              priority
              src="/images/sample.webp"
              alt="Hero"
              width={1200}
              height={600}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SliderHero;
