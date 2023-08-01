import { Button } from '@/components/ui/button';
import { memos, partners } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
	return (
		<>
			<section className='full-bleed bg-mainBlue h-[50vh]'>
				<div className='grid lg:grid-cols-2 gap-4 place-content-center h-full inside text-white'>
					<div className='space-y-3'>
						<h2 className='text-4xl'>Embracing Uncertainly</h2>
					</div>
					{/* <div className="">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              amet autem perspiciatis fugiat nam rem, corporis in explicabo
              molestias culpa vitae eveniet, excepturi nulla eum aliquid quos
              suscipit dolores odio.
            </p>
          </div> */}
				</div>
			</section>
			<section className='inside my-16'>
				<div className='grid place-content-center'>
					<div className='space-y-3'>
						<h2 className='text-3xl'>About Museums and Galleries Month</h2>
						<p className=''>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
							est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit, sed quia non numquam eius modi tempora incidunt ut labore
							et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
							veniam, quis nostrum exercitationem ullam corporis suscipit
							laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
							vel eum iure reprehenderit qui in ea voluptate velit esse quam
							nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
							voluptas nulla pariatur?
						</p>
					</div>
				</div>
			</section>

			{/* Grid */}
			{/* <section className="mt-4 lg:mt-16 inside">
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
      </section> */}

			<section className='inside my-16'>
				<div className='grid lg:grid-cols-4 gap-4 place-content-center'>
					<div className='col-span-1'>
						<h2 className='text-3xl mb-2'>Objectives</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
					<div className='space-y-3 col-span-3'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
							nesciunt eius cum dolorum fugit vel harum reiciendis unde. Amet,
							quaerat et. Beatae quam, saepe consequuntur facilis exercitationem
							nihil molestias earum!
						</p>
					</div>
				</div>
			</section>
			<section className='inside my-16'>
				<div className='grid gap-12'>
					<h2 className='text-3xl text-center'>Partner Programs</h2>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
						{partners.map(partner => (
							<div
								key={partner.title}
								className='text-center grid place-items-center'
							>
								<Image
									src={partner?.imageLink}
									alt={partner?.title}
									width={150}
									height={150}
									className='object-contain'
								/>
								<p className='mt-2 font-semibold'>{partner?.title}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='inside my-16'>
				<div className='grid gap-12'>
					<h2 className='text-3xl text-center'>Memorandum Issuances</h2>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
						{memos.map(memo => (
							<div
								key={memo.title}
								className='text-center grid place-items-center'
							>
								<Image
									src={memo?.imageLink}
									alt={memo?.title}
									width={150}
									height={150}
									className='object-contain'
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
