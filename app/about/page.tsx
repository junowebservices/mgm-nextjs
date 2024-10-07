'use client';
import { memos, partners } from '@/constants';
import Image from 'next/image';

import Link from 'next/link';

const About = () => {
	return (
		<>
			<section className='full-bleed'>
				<Image
					src='https://res.cloudinary.com/junoconsulting/image/upload/w_1600/q_auto/f_auto/v1728267233/MGM/images/2024-Official_Banner_Public_b78cfy.png'
					alt='Exhibits and Reflections Banner'
					width={1800}
					height={800}
					className='object-fill m-auto'
					objectFit='fill'
					priority
				/>
				{/* <img
					src='https://res.cloudinary.com/junoconsulting/image/upload/w_1600/q_auto/f_auto/v1695788078/MGM/images/exhibit-banner_l8yqha.jpg'
					alt='Exhibits and Reflections Banner'
					width={1600}
					height={600}
					className='object-cover'
				/> */}
			</section>
			<section className='inside my-16'>
				<div className='grid'>
					<div className='space-y-3 max-w-3xl'>
						<h2 className='text-3xl'>About Museums and Galleries Month</h2>
						<p>
							The Museums and Galleries Month (MGM) is observed every October by virtue of Presidential Proclamation No. 798, s. 1991. It underscores the importance of fostering national consciousness and pride in our well-preserved Filipino culture and heritage, which embody the nation's aspirations. These aspirations are expressed through various media of art, as well as historical and religious artifacts. The rich Filipino cultural heritage symbolizes the nation's aspirations, and the observance recognizes that these cultural and artistic forms are essential for nation-building and shaping national destiny.
						</p>
					</div>
				</div>
			</section>
			<section className='inside my-8 lg:my-16 grid md:grid-cols-3 gap-2'>
				<div className='w-full self-center'>
					<Image
						src='https://res.cloudinary.com/junoconsulting/image/upload/w_400/q_auto/f_auto/v1728267521/MGM/images/2024-MGM-Poster_Large_haelu4.png'
						alt='MGM 2024 Theme'
						width={400}
						height={250}
						className='object-cover w-full'
						priority
					/>
					{/* <img
						src='https://res.cloudinary.com/junoconsulting/image/upload/w_400/q_auto/f_auto/v1695788079/MGM/images/mgm-2023-theme_x1wnr5.jpg'
						alt='MGM 2024 Theme'
						width={400}
						height={250}
						className='object-cover w-full'
					/> */}
				</div>
				<div className='space-y-3 md:col-span-2 md:ml-6 lg:ml-16 max-w-2xl'>
					<h2 className='text-3xl'>About the MGM 2024 Theme </h2>

					<p>In an era marked by rapid technological advancement and globalization, the importance of preserving cultural heritage has never been more critical. Yet, it is equally important to recognize that tradition is not a static concept but a dynamic force that evolves and adapts.</p>

					<p>The theme, <em>“Honoring Traditions, Fostering Innovation,”</em> encapsulates the delicate balance between preserving the past and shaping the future. It invites the public to explore how traditional knowledge, practices, and values can be reinterpreted and applied to address contemporary challenges. By honoring traditions, we pay homage to the wisdom and experiences of our ancestors. These cultural touchstones provide a foundation for identity, community, and resilience. However, to ensure the continued relevance and vitality of these traditions, we must foster an environment of innovation.</p>

					{/* <p>
						<strong>
							“Exhibits and Reflections: Creating Opportunities for the New
							World”
						</strong>{' '}
						encompasses the role of museums and galleries in showcasing art
						forms as an avenue to interpret various facets of humanity that have
						always been discussed for years. From intrapersonal to global
						issues, museums and galleries have been the host to various
						microcosms that serve as catalysts for human beings from all walks
						of life, providing chances to reflect, restart, and redirect
						themselves to a better future.
					</p>

					<p>
						The said theme aligns with the celebration of 2024 International
						Museum Day: “Museums, Sustainability, and Wellbeing” which aims to
						achieve the United Nations' (UN) Sustainable Development Goals,
						focusing on regulating climate, fostering inclusivity, and tackling
						socio-personal issues. It also integrates the narrative of the theme
						of 125th Celebration of Philippine Independence: “Kalayaan,
						Kinabukasan, Kasaysayan” which aims to highlight the opportunities
						made by our ancestors to attain the freedom we achieve right now,
						and how shall the present preserve and pass it on for more
						generations to come.
					</p> */}
				</div>
			</section>
			<section className='inside my-8 lg:my-16'>
				<div className='grid gap-12'>
					<h2 className='text-3xl text-center'>Partner Programs</h2>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
						{partners.map(partner => (
							<Link
								key={partner.title}
								className='text-center grid place-items-center'
								href={partner.url}
								target='_blank'
							>
								<Image
									src={partner?.imageLink}
									alt={partner?.title}
									width={150}
									height={150}
									className='object-contain'
								/>
								{/* <img
									src={partner?.imageLink}
									alt={partner?.title}
									width={150}
									height={150}
									className='object-contain'
								/> */}
								<p className='mt-2 font-semibold'>{partner?.title}</p>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* <section className='inside'>
				<video controls width='1500' height='360' className='w-full'>
					<source src='/videos/video1.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</section> */}
			<section className='inside my-8 lg:my-16'>
				<div className='grid gap-12'>
					<h2 className='text-3xl text-center'>Memorandum Issuances</h2>
					<div className='flex justify-center gap-4 lg:gap-12'>
						{memos.map(memo => (
							<Link
								href={memo.url}
								key={memo.title}
								className='text-center grid place-items-center cursor-pointer'
								target='_blank'
								aria-label={memo.title}
							>
								<Image
									src={memo?.imageLink}
									alt={memo?.title}
									width={150}
									height={150}
									className='object-contain'
								/>
								{/* <img
									src={memo?.imageLink}
									alt={memo?.title}
									width={150}
									height={150}
									className='object-contain'
								/> */}
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default About;