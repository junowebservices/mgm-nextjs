'use client';

import Slider from 'react-slick';
import { CgSoftwareDownload } from 'react-icons/cg';
import { agencyKit } from '@/constants';

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
				<div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 place-content-center'>
					{agencyKit.map((kit, index) => (
						<div
							key={index}
							className='grid place-content-center border-2 border-mainTextColor bg-mainYellow aspect-[4/3] hover:opacity-80 cursor-pointer'
						>
							<div className='w-[85%] mx-auto space-y-4'>
								<div>
									<h2 className='text-xl lg:text-3xl font-medium my-3 text-mainTextColor line-clamp-1'>
										{kit.title}
									</h2>
									<p className='text-mainTextColor line-clamp-4'>{kit.desc}</p>
								</div>
								<div className='flex gap-2'></div>
							</div>
						</div>
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
					<div className='grid place-content-center border-2 text-white border-mainTextColor bg-mainBlue aspect-square md:aspect-[2/1] hover:opacity-80 cursor-pointer'>
						<div className='w-[85%] mx-auto space-y-4'>
							<div>
								<h2 className='text-xl   font-medium my-3 line-clamp-1'>
									2023 MGM Banner and Banner Specs
								</h2>
								<p className='line-clamp-4'>
									Like poster pack, the MGM Banner can be used to promote the
									2023 MGM theme while the banner specs provide complete details
									and standardized banner posting
								</p>
							</div>
							<div className='flex gap-2'>
								<CgSoftwareDownload className='w-8 h-8' />
							</div>
						</div>
					</div>
					<div className='grid place-content-center border-2 text-white border-mainTextColor bg-mainBlue aspect-square md:aspect-[2/1] hover:opacity-80 cursor-pointer'>
						<div className='w-[85%] mx-auto space-y-4'>
							<div>
								<h2 className='text-xl   font-medium my-3 line-clamp-1'>
									2023 MGM Profile Picture Frame
								</h2>
								<p className='line-clamp-4'>
									Celebrate with us by using the official Facebook Profile
									Picture frame of MGM for this year. Twibbonize your photo
									here!
								</p>
							</div>
							<div className='flex gap-2'>
								<CgSoftwareDownload className='w-8 h-8' />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Archives */}
			<section className='bg-mainBlue text-white mt-6 widest'>
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
			</section>
		</div>
	);
};

export default Download;
