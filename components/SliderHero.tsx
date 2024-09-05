'use client';

import { Sliders } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { MdOpenInNew } from 'react-icons/md';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { CldImage } from 'next-cloudinary';

const SliderHero = () => {
	return (
		<section className='full-bleed' id='home-slider'>
			<Carousel>
				<CarouselContent>
					{Sliders.map((slide, i) => {
						return (
							<CarouselItem key={i}>
								<CldImage
									src={slide.imageLink}
									alt='Hero'
									width={1600}
									height={600}
									className='object-cover aspect-[16/6]'
									loading='lazy'
								/>
								{/* 
								<Image src={slide.imageLink}
									alt='Featured Image'
									width={1800}
									height={200}
									className='w-full object-cover'
									priority
								/> */}

							</CarouselItem>
						)
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
};

export default SliderHero;
