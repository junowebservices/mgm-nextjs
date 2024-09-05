'use client';

import { PostMetadata } from '@/constants/types';
import React from 'react';

const BlogSlider: React.FC<PostMetadata[]> = postMetadata => {

	return (
		<section className='mt-6 widest'>
			<div className='inside py-24 px-8 lg:px-16'>
				<div className='mb-4'>
					<h2 className='text-xl md:text-3xl font-bold'>Articles</h2>
				</div>
			</div>
		</section>
	);
};

export default BlogSlider;
