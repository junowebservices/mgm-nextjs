"use client";

import Slider from "react-slick";



const Download = () => {
  const settings = {
    dots: true,
    arrows: true,
    // centerMode: true,
    infinite: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    speed: 200,
    // autoplay: true,oglo
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className="inside my-12">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-bold">Agency Kit</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 place-content-center">
          <div className="grid place-content-center border-2 border-mainTextColor bg-mainYellow aspect-[4/3] hover:opacity-80 cursor-pointer">
            <div className="w-[85%] mx-auto space-y-4">
              <div>
                <h2 className="text-2xl lg:text-4xl font-medium my-3 text-mainTextColor line-clamp-1">
                  MGM Banner
                </h2>
                <p className="text-secondaryTextColor line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus laborum architecto esse facilis cupiditate ex?
                  Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
              <div className="flex gap-2">
                {/* <ArrowDownTrayIcon className="w-6 h-6" /> Download */}
              </div>
            </div>
          </div>
          <div className="grid place-content-center border-2 border-mainTextColor bg-mainYellow-dark aspect-[4/3]">
            <div className="w-[90%] mx-auto space-y-4">
              <div>
                <h2 className="text-2xl lg:text-4xl font-medium my-3 text-mainTextColor line-clamp-1">
                  MGM 2023 Banner
                </h2>
                <p className="text-secondaryTextColor line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus laborum architecto esse facilis cupiditate ex?
                  Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="grid place-content-center border-2 border-mainTextColor bg-mainYellow-dark aspect-[4/3]">
            <div className="w-[90%] mx-auto space-y-4">
              <div>
                <h2 className="text-2xl lg:text-4xl font-medium my-3 text-mainTextColor line-clamp-1">
                  MGM 2023 Banner
                </h2>
                <p className="text-secondaryTextColor line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus laborum architecto esse facilis cupiditate ex?
                  Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="grid place-content-center border-2 border-mainTextColor bg-mainYellow-dark aspect-[4/3]">
            <div className="w-[90%] mx-auto space-y-4">
              <div>
                <h2 className="text-2xl lg:text-4xl font-medium my-3 text-mainTextColor line-clamp-1">
                  MGM 2023 Banner
                </h2>
                <p className="text-secondaryTextColor line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus laborum architecto esse facilis cupiditate ex?
                  Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="grid place-content-center border-2 border-mainTextColor bg-mainYellow-dark aspect-[4/3]">
            <div className="w-[90%] mx-auto space-y-4">
              <div>
                <h2 className="text-2xl lg:text-4xl font-medium my-3 text-mainTextColor line-clamp-1">
                  MGM 2023 Banner
                </h2>
                <p className="text-secondaryTextColor line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus laborum architecto esse facilis cupiditate ex?
                  Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="grid place-content-center border-2 border-mainTextColor bg-mainYellow-dark aspect-[4/3]">
            <div className="w-[90%] mx-auto space-y-4">
              <div>
                <h2 className="text-2xl lg:text-4xl font-medium my-3 text-mainTextColor line-clamp-1">
                  MGM 2023 Banner
                </h2>
                <p className="text-secondaryTextColor line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus laborum architecto esse facilis cupiditate ex?
                  Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-6 text-center">
          {/* <ButtonMgm text="Get the full kit here!" contained /> */}
        </div>
      </section>
      {/* Social Media Kit */}
      <section className="inside my-12">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-bold">Social Media Kit</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 place-content-center">
          <div className="grid place-content-center border-2 text-white border-mainTextColor bg-mainBlue aspect-square md:aspect-[2/1] hover:opacity-80 cursor-pointer">
            <div className="w-[85%] mx-auto space-y-4">
              <div>
                <h2 className="text-xl lg:text-2xl font-medium my-3 line-clamp-1">
                  MGM Banner
                </h2>
                <p className="line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus laborum architecto esse facilis cupiditate ex?
                  Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
              <div className="flex gap-2">
                {/* <ArrowDownTrayIcon className="w-6 h-6" /> Download */}
              </div>
            </div>
          </div>
          <div className="grid place-content-center border-2 text-white border-mainTextColor bg-mainBlue-dark aspect-square md:aspect-[2/1]">
            <div className="w-[90%] mx-auto space-y-4">
              <div>
                <h2 className="text-xl lg:text-2xl font-medium my-3 line-clamp-1">
                  MGM 2023 Banner
                </h2>
                <p className="line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus laborum architecto esse facilis cupiditate ex?
                  Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Archives */}
      <section className="bg-mainBlue text-white mt-6 widest">
        <div className="inside py-24">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-4xl font-bold">Archives</h2>
          </div>
          <Slider {...settings} className="">
            <div className="border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer" />
            <div className="border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer" />
            <div className="border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer" />
            <div className="border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer" />
            <div className="border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer" />
          </Slider>

          {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 place-content-center">
            <div className="grid place-content-center border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer" />
            <div className="grid place-content-center border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer" />
            <div className="grid place-content-center border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer" />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Download;
