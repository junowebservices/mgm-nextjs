'use client';

import Image from 'next/image';
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
				<div className='w-full'>
					<Image
						priority
						src='/images/HP0.jpg'
						alt='Hero'
						width={1600}
						height={600}
						className='object-contain aspect-[16/6]'
					/>
				</div>
				<div className='w-full'>
					<Image
						priority
						src='/images/HP1.jpg'
						alt='Hero'
						width={1600}
						height={600}
						className='object-contain aspect-[16/6]'
					/>
				</div>
				<div className='w-full'>
					<Image
						priority
						src='/images/HP2.jpg'
						alt='Hero'
						width={1600}
						height={600}
						className='object-contain aspect-[16/6]'
					/>
				</div>
				<div className='w-full'>
					<Image
						priority
						src='/images/HP3.jpg'
						alt='Hero'
						width={1600}
						height={600}
						className='object-contain aspect-[16/6]'
					/>
				</div>
			</Slider>
		</section>
	);
};

export default SliderHero;
