'use client';

import { CgSoftwareDownload } from 'react-icons/cg';
import { agencyKits, socMedKits } from '@/constants';
import Link from 'next/link';

const Download = () => {
	const settings = {
		dots: true,
		arrows: true,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		speed: 200,
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
			<section className='inside mb-12'>
				<div className='text-center mb-4'>
					<h2 className='text-2xl md:text-3xl font-bold'>Agency Kit</h2>
				</div>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 place-content-center'>
					{agencyKits.map((kit, index) => (
						<Link key={index} href={kit.link} target='_blank'>
							<div className='grid place-content-center border-2 border-mainTextColor bg-mainYellow aspect-square hover:opacity-80 cursor-pointer'>
								<div className='w-[85%] mx-auto space-y-4'>
									<div>
										<h2 className='text-xl lg:text-3xl font-medium my-3 text-mainTextColor line-clamp-2'>
											{kit.title}
										</h2>
										<p className='text-mainTextColor line-clamp-4'>
											{kit.desc}
										</p>
									</div>
									<div>
										<CgSoftwareDownload className='w-8 h-8' />
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div className='mt-4 md:mt-6 text-center'></div>
			</section>
			{/* Social Media Kit */}
			<section className='inside my-12'>
				<div className='text-center mb-4'>
					<h2 className='text-2xl md:text-3xl font-bold'>Social Media Kit</h2>
				</div>
				<div className='grid gap-4 sm:grid-cols-2 place-content-center'>
					{socMedKits.map((socMedkit, index) => (
						<Link href={socMedkit.link} key={index} target='_blank'>
							<div className='grid place-content-center border-2 text-white border-mainTextColor bg-mainBlue aspect-square lg:aspect-[2/1] hover:opacity-80 cursor-pointer'>
								<div className='w-[85%] mx-auto space-y-4'>
									<div>
										<h2 className='text-xl   font-medium my-3 line-clamp-1'>
											{socMedkit.title}
										</h2>
										<p className='line-clamp-4'>{socMedkit.desc}</p>
									</div>
									<div>
										<CgSoftwareDownload className='w-8 h-8' />
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
			{/* Archives */}
			{/* <section className='bg-mainBlue text-white mt-6 widest hidden'>
				<div className='inside py-24 px-8 lg:px-16' id='download'>
					<div className='text-center mb-4'>
						<h2 className='text-2xl md:text-3xl font-bold'>Archives</h2>
					</div>
					<Slider {...settings}>
						<div className='border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer' />
						<div className='border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer' />
						<div className='border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer' />
						<div className='border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer' />
						<div className='border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer' />
					</Slider>
				</div>
			</section> */}
		</div>
	);
};

export default Download;
