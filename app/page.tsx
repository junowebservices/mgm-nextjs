import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';

// import PostPreview from '@/components/PostPreview';
import SliderHero from '@/components/SliderHero';
import Link from 'next/link';
import EventsTabs from '@/components/EventsTabs';
// import BlogSlider from '@/components/BlogSlider';

export default function Home() {
	// const postMetadata = getPostMetadata();
	return (
		<>
			<SliderHero />
			<section className='mt-4 mb-12 lg:mt-16 inside'>
				<h2 className='font-bold text-2xl lg:text-3xl my-6'>Latest Update</h2>
				<div className='grid md:grid-cols-2'>
					<div className='w-full '>
						<Image
							priority
							src='/images/HP4.jpg'
							alt='Featured Image'
							width={800}
							height={800}
							className='object-cover aspect-video'
						/>
					</div>
					<div className='bg-white w-full aspect-video grid place-items-center text-center'>
						<div className='p-4 space-y-2'>
							<h2 className='font-bold text-2xl '>
								Museums and Galleries Month (MGM)
							</h2>
							<p className='text-secondaryTextColor'>
								MGM is an annual national observation to arouse the national
								consciousness and pride in the Philippines' rich culture and
								national identity.
							</p>
						</div>
					</div>
					<div className='bg-white w-full aspect-video grid place-items-center text-center order-last md:order-3'>
						<div className='p-4 space-y-2'>
							<h2 className='font-bold text-2xl  '>Lead Agencies</h2>
							<p className='text-secondaryTextColor'>
								The National Commission for Culture and the Arts (NCCA) and the
								National Museum of the Philippines (NMP) stands as the leading
								agency responsible for preserving and promoting the country's
								national heritage, deep-rooted traditions, meaningful culture,
								and profound history.
							</p>
						</div>
					</div>
					<div className='w-full grid place-content-center md:order-4'>
						<Image
							priority
							src='/images/HP5.jpg'
							alt='Featured Image'
							width={800}
							height={800}
							className='object-cover aspect-video'
						/>
					</div>
				</div>
			</section>

			{/* <section className="py-12 lg:py-32 inside">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {postPreviews}
        </div>
        <Link href="/blogs" className="w-full text-center block mt-8">
          <Button size={"lg"}>View All</Button>
        </Link>
      </section> */}

			{/* <section className="mt-6 widest">
        <div className="inside py-24 px-8 lg:px-16">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold">Blogs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {postPreviews}
          </div>
          <Link href="/blogs" className="w-full text-center block mt-8">
            <Button size={"lg"}>View All</Button>
          </Link>
        </div>
      </section> */}

			<EventsTabs />

			<section className='bg-primary text-white full-bleed'>
				<div className='grid md:grid-cols-5 pt-24 pb-56 md:pb-72 inside'>
					<h2 className='text-xl lg:text-3xl text-white col-span-2 md:w-4/5 font-light'>
						About{' '}
						<strong className='font-bold'>Museums and Galleries Month</strong>
					</h2>

					<div className='col-span-3'>
						<p className='text-white mb-6 mt-2 lg:mb-12 lg:mt-0'>
							The Museums and Galleries Month is being celebrated every October
							based on the Proclamation No. 798 s.1991 signed by the late former
							President Corazon Aquino to highlight the culture of the
							Philippines, embracing all forms of art and culture, historical
							and religious artifacts.
						</p>
						<div>
							<Link
								href='/about'
								className={buttonVariants({
									variant: 'secondary',
									size: 'lg',
								})}
							>
								Know More
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className='-mt-44 inside'>
				<div className='grid md:grid-cols-2'>
					<div className='w-full'>
						<Image
							priority
							src='/images/HP6.jpg'
							alt='Featured Image'
							width={800}
							height={800}
							className='object-cover aspect-video'
						/>
					</div>
					<div className='bg-white w-full aspect-video grid place-items-center text-center'>
						<div className='p-4 space-y-5'>
							<h2 className='font-bold text-2xl  '>About 2023 Theme</h2>
							<p className=''>
								“Exhibits and Reflections: Creating Opportunities for the New
								World” encompasses the role of museums and galleries in
								showcasing art forms as an avenue to interpret various facets of
								humanity that have always been discussed for years.
							</p>
							<div>
								<Link
									href='/about'
									className={buttonVariants({
										variant: 'secondary',
										size: 'lg',
									})}
								>
									Know More
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white w-full aspect-video grid place-items-center text-center order-last md:order-3'>
						<div className='p-4 space-y-5'>
							<div className='space-y-3'>
								<p className=''>
									Check out other awesome events prepared by various agencies
									around the country and across the globe
								</p>
							</div>
							<div>
								<Link
									href='/events'
									className={buttonVariants({
										variant: 'secondary',
										size: 'lg',
									})}
								>
									SEE FULL CALENDAR
								</Link>
							</div>
						</div>
					</div>
					<div className='w-full md:order-4'>
						<Image
							priority
							src='/images/HP7.jpg'
							alt='Featured Image'
							width={800}
							height={800}
							className='object-cover aspect-video'
						/>
					</div>
				</div>
			</section>

			<section className='inside my-16'>
				<div className='grid lg:grid-cols-2 gap-4 h-[300px] place-content-center'>
					<h2 className='text-2xl lg:text-3xl font-bold'>Celebrate with us</h2>
					<div className=''>
						<p>
							Allow yourself to be involved in these amazing activities and
							initiatives to celebrate the rich culture and history of our
							country. Join forums, workshops, competitions, and other
							activities of the NCCA - MGM that are full of fun and learnings!
						</p>
						<div className='flex flex-col sm:flex-row mt-6 gap-2'>
							{/* <div>
								<Button variant={'secondary'} size={'lg'}>
									Submit Your Activities
								</Button>
							</div> */}
							<div>
								<Link
									href='/download'
									className={buttonVariants({
										variant: 'secondary',
										size: 'lg',
									})}
								>
									Use the Agency Kit
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
