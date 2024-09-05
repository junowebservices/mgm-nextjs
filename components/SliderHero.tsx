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

const SliderHero = () => {
	return (
		<section className='full-bleed' id='home-slider'>
			<Carousel>
				<CarouselContent>
					{Sliders.map((slide, i) => {
						return (
							<CarouselItem key={i}>
								<Image src={slide.imageLink}
									alt='Featured Image'
									width={1800}
									height={200}
									className='w-full object-cover'
									priority
								/></CarouselItem>
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
