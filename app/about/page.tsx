import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="full-bleed bg-mainBlue h-[400px]">
        <div className="grid lg:grid-cols-2 gap-4 place-content-center h-full inside text-white">
          <div className="space-y-3">
            <h2 className="text-5xl">Embracing Uncertainly:</h2>
            <p className="max-w-xs text-2xl">
              Showcasing Solidarity, Hope, and Recovery
            </p>
          </div>
          <div className="">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              amet autem perspiciatis fugiat nam rem, corporis in explicabo
              molestias culpa vitae eveniet, excepturi nulla eum aliquid quos
              suscipit dolores odio.
            </p>
          </div>
        </div>
      </section>
      <section className="inside my-16">
        <div className="grid lg:grid-cols-2 gap-4 h-[300px] place-content-center">
          <div className="space-y-3">
            <h2 className="text-5xl">Our goals</h2>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quasi magnam sint quae earum explicabo quam, harum temporibus
              optio
            </p>
          </div>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nesciunt eius cum dolorum fugit vel harum reiciendis unde. Amet,
            </p>
            <p>
              quaerat et. Beatae quam, saepe consequuntur facilis exercitationem
              nihil molestias earum!
            </p>
            <p>
              nesciunt eius cum dolorum fugit vel harum reiciendis unde. Amet,
            </p>
          </div>
        </div>
      </section>
      {/* Grid */}
      <section className="mt-4 lg:mt-16 inside">
        <div className="grid md:grid-cols-2">
          <div className="bg-white w-full aspect-square lg:aspect-[4/3] grid place-items-center text-center border-[10px] border-primary">
            <div className="px-12 space-y-5">
              <h2 className="font-bold text-3xl lg:text-6xl">
                Events & Activities
              </h2>
              <div className="space-y-3">
                <p className="text-secondaryTextColor lg:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
                <Button variant={"secondary"} size={"lg"}>
                  See more
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-primary w-full aspect-square lg:aspect-[4/3] grid place-items-center text-center">
            <div className="px-12 space-y-5">
              <h2 className="font-bold text-3xl lg:text-6xl text-white">
                Featured
              </h2>
              <p className="text-primary-foreground lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus laborum architecto esse facilis cupiditate ex?
                Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                explicabo similique molestiae incidunt non placeat? Eaque.
              </p>
            </div>
          </div>
          <div className="bg-mainYellow w-full aspect-square lg:aspect-[4/3] grid place-items-center text-center">
            <div className="px-12 space-y-5">
              <h2 className="font-bold text-3xl lg:text-6xl text-white">
                Come Visit
              </h2>
              <div className="space-y-3">
                <p className="text-primary-foreground lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
                <Button variant={"secondary"} size={"lg"}>
                  Find us
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-mainBlue w-full aspect-square lg:aspect-[4/3] grid place-items-center text-center">
            <div className="px-12 space-y-5">
              <h2 className="font-bold text-3xl lg:text-6xl text-white">
                Get in touch
              </h2>
              <div className="space-y-3">
                <p className="text-primary-foreground lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
                <Button variant={"secondary"} size={"lg"}>
                  See more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inside my-16">
        <div className="grid lg:grid-cols-2 gap-4 h-[300px] place-content-center">
          <h2 className="text-5xl">Partners/ Organizations</h2>
          <div className="space-y-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nesciunt eius cum dolorum fugit vel harum reiciendis unde. Amet,
              quaerat et. Beatae quam, saepe consequuntur facilis exercitationem
              nihil molestias earum!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
