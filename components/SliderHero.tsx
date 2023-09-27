'use client';

import { Sliders } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { MdOpenInNew } from 'react-icons/md';
import Slider from 'react-slick';
import { Button, buttonVariants } from './ui/button';
import { CldImage } from 'next-cloudinary';

const SliderHero = () => {
	const settings = {
		dots: true,
		arrows: true,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		speed: 200,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<section className='full-bleed' id='home-slider'>
			<Slider {...settings}>
				{Sliders.map((slide, index) => (
					<div className='w-full relative group' key={index}>
						<div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-black group-hover:opacity-80 opacity-0 duration-150'></div>
						<div className='absolute w-full h-full hidden group-hover:flex items-center justify-end pr-10 md:pr-16'>
							<Link
								href={slide.url}
								className={
									(buttonVariants({
										variant: 'link',
										size: 'lg',
									}),
									'text-white mt-2 hover:underline text-sm md:text-base')
								}
							>
								VISIT LINK
							</Link>
						</div>

						<CldImage
							src={slide.imageLink}
							alt='Hero'
							width={1600}
							height={600}
							className='object-cover aspect-[16/6]'
							loading='lazy'
						/>
					</div>
				))}
			</Slider>
		</section>
	);
};

export default SliderHero;
