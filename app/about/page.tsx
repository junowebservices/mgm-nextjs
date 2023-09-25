import { Button } from '@/components/ui/button';
import { memos, partners } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
	return (
		<>
			<section className='full-bleed'>
				<Image
					priority
					src='/images/exhibit-banner.jpg'
					alt='Exhibits and Reflections Banner'
					width={1600}
					height={600}
					className='object-cover'
				/>
			</section>
			<section className='inside my-16'>
				<div className='grid place-content-center'>
					<div className='space-y-3'>
						<h2 className='text-3xl'>About Museums and Galleries Month</h2>
						<p>
							The Museums and Galleries Month (MGM) of the National Commission
							for Culture and the Arts (NCCA) annually celebrates the rich
							culture and heritage of the Philippines. Based on the Proclamation
							No. 798 s.1991 signed by the late former President Corazon Aquino,
							MGM acts an innovative instrument to arouse the national
							consciousness and pride in the Philippines' rich culture and
							national identity, embracing all forms of art and culture,
							historical and religious artifacts.
						</p>
						<p>
							Every October, the MGM offers fresh theme that provides awareness
							to all regarding the promising heritage of the Philippines.
						</p>
						<p>
							MGM is committed to promote and celebrate the diversed culture of
							the country.
						</p>
					</div>
				</div>
			</section>
			<section className='inside my-8 lg:my-16 grid md:grid-cols-3 gap-2'>
				<div className='w-full self-center'>
					<Image
						priority
						src='/images/mgm-2023-theme.jpg'
						alt='MGM 2023 Theme'
						width={1000}
						height={250}
						className='object-cover'
					/>
				</div>
				<div className='space-y-3 md:col-span-2 md:ml-6 lg:ml-16'>
					<h2 className='text-3xl'>About the MGM 2023 Theme </h2>
					<p>
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
						The said theme aligns with the celebration of 2023 International
						Museum Day: “Museums, Sustainability, and Wellbeing” which aims to
						achieve the United Nations' (UN) Sustainable Development Goals,
						focusing on regulating climate, fostering inclusivity, and tackling
						socio-personal issues. It also integrates the narrative of the theme
						of 125th Celebration of Philippine Independence: “Kalayaan,
						Kinabukasan, Kasaysayan” which aims to highlight the opportunities
						made by our ancestors to attain the freedom we achieve right now,
						and how shall the present preserve and pass it on for more
						generations to come.
					</p>
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
					<div className='flex justify-center gap-4'>
						{memos.map(memo => (
							<Link
								href={memo.url}
								key={memo.title}
								className='text-center grid place-items-center cursor-pointer'
								target='_blank'
							>
								<Image
									src={memo?.imageLink}
									alt={memo?.title}
									width={150}
									height={150}
									className='object-contain'
								/>
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
