import Image from "next/image";
import { Button } from "@/components/ui/button";

import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import SliderHero from "@/components/SliderHero";
import Link from "next/link";
import EventsTabs from "@/components/EventsTabs";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata
    .slice(0, 3)
    .map((post) => <PostPreview key={post.slug} {...post} />);
  return (
    <main className="flex flex-col w-full">
      {/* <SliderHero /> */}
      {/* Grid */}
      {/* <section className="mt-4 lg:mt-16 inside">
        <h2 className="font-bold text-2xl lg:text-5xl my-6">Latest Update</h2>
        <div className="grid md:grid-cols-2">
          <div className="bg-primary w-full aspect-square lg:aspect-[4/3] hidden lg:grid place-items-center text-center" />
          <div className="bg-white border-2 border-black lg:border-none w-full aspect-square lg:aspect-[4/3] grid place-items-center text-center">
            <div className="px-12 space-y-2">
              <h2 className="font-bold text-2xl lg:text-4xl">Featured</h2>
              <p className="text-secondaryTextColor lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus laborum architecto esse facilis cupiditate ex?
                Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                explicabo similique molestiae incidunt non placeat? Eaque.
              </p>
            </div>
          </div>
          <div className="bg-white border-2 border-black lg:border-none w-full aspect-square lg:aspect-[4/3] grid place-items-center text-center">
            <div className="px-12 space-y-2">
              <h2 className="font-bold text-2xl lg:text-4xl">Featured</h2>
              <p className="text-secondaryTextColor lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus laborum architecto esse facilis cupiditate ex?
                Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                explicabo similique molestiae incidunt non placeat? Eaque.
              </p>
            </div>
          </div>
          <div className="bg-primary w-full aspect-square lg:aspect-[4/3] hidden lg:grid place-items-center text-center" />
        </div>
      </section> */}
      {/* Blogs */}
      {/* <section className="my-12 lg:my-32 inside">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {postPreviews}
        </div>
        <Link href="/blogs" className="w-full text-center block mt-8">
          <Button size={"lg"}>View All</Button>
        </Link>
      </section> */}
      <EventsTabs />

      {/* <section className="bg-primary text-white full-bleed">
        <div className="grid md:grid-cols-5 pt-24 pb-56 md:pb-72 inside">
          <h2 className="text-4xl text-white col-span-2 md:w-4/5 font-bold">
            dit? Molestias, blanditiis voluptate.
          </h2>

          <div className="col-span-3">
            <p className="text-white mb-6 mt-2 lg:mb-12 lg:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nesciunt eius cum dolorum fugit vel harum reiciendis unde. Amet,
              quaerat et. Beatae quam, saepe consequuntur facilis exercitationem
              nihil molestias earum!
            </p>
            <div>
              <Button variant={"secondary"}>Know more</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="-mt-32 inside">
        <div className="grid md:grid-cols-2">
          <div className="bg-mainYellow w-full aspect-square lg:aspect-[4/3] grid place-items-center text-center">
            <div className="px-12 space-y-5">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Events & Activities
              </h2>
              <div className="space-y-3">
                <p className="lg:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-black w-full aspect-square lg:aspect-[4/3] grid place-items-center text-center">
            <div className="px-12 space-y-5">
              <h2 className="font-bold text-2xl lg:text-4xl">Featured</h2>
              <p className="lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus laborum architecto esse facilis cupiditate ex?
                explicabo similique molestiae incidunt non placeat? Eaque.
              </p>
            </div>
          </div>
          <div className="bg-white border-2 border-black w-full aspect-square lg:aspect-[4/3] grid place-items-center text-center">
            <div className="px-12 space-y-5">
              <h2 className="font-bold text-2xl lg:text-4xl">Come Visit</h2>
              <div className="space-y-3">
                <p className="lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-mainBlue w-full aspect-square lg:aspect-[4/3] grid place-items-center text-center">
            <div className="px-12 space-y-5">
              <h2 className="font-bold text-2xl lg:text-4xl text-white">
                Get in touch
              </h2>
              <div className="space-y-3">
                <p className="text-primary-foreground lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inside my-16">
        <div className="grid lg:grid-cols-2 gap-4 h-[300px] place-content-center">
          <h2 className="text-4xl font-bold">Celebrate with us</h2>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nesciunt eius cum dolorum fugit vel harum reiciendis unde. Amet,
              quaerat et. Beatae quam, saepe consequuntur facilis exercitationem
              nihil molestias earum!
            </p>
            <div className="block mt-6">
              <Link
                href="/"
                className="text-primary hover:underline underline-offset-2 text-lg"
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
