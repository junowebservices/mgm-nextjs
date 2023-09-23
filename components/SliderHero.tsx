'use client';

import { Sliders } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

const SliderHero = () => {
	const settings = {
		dots: true,
		arrows: true,
		// centerMode: true,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		speed: 200,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<section className='full-bleed'>
			<Slider
				{...settings}
				className='overflow-hidden'
				// className="overflow-hidden min-h-[230px] h-[230px] sm:h-[450px] md:h-[580px] widest"
			>
				{Sliders.map((slide, index) => (
					<Link href={slide.url} className='w-full' key={index}>
						<Image
							priority
							src={`/images/${slide.imageLink}`}
							alt='Hero'
							width={1600}
							height={600}
							className='object-contain aspect-[16/6]'
						/>
					</Link>
				))}
			</Slider>
		</section>
	);
};

export default SliderHero;
