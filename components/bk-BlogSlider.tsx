'use client';

import { PostMetadata } from '@/constants/types';
import React from 'react';
import PostPreview from './PostPreview';

const BlogSlider: React.FC<PostMetadata[]> = postMetadata => {
	const settings = {
		dots: true,
		arrows: true,
		// centerMode: true,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
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
		<section className='mt-6 widest'>
			<div className='inside py-24 px-8 lg:px-16'>
				<div className='mb-4'>
					<h2 className='text-xl md:text-3xl font-bold'>Articles</h2>
				</div>
				{/* <Slider {...settings}>
					{Object.values(postMetadata).map(blog => (
						<PostPreview key={blog.slug} {...blog} />
					))}
				</Slider> */}
			</div>
		</section>
	);
};

export default BlogSlider;
