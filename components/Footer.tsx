import { footerLinks, partners } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='full-bleed mt-12'>
			<div className='bg-gray-100'>
				<div className='py-4 flex justify-center gap-2 lg:gap-6 px-4'>
					{partners.map((partner, index) => (
						<Link key={index} href={partner.url} target='_blank'>
							<Image
								src={partner?.imageLink}
								alt={partner?.title}
								width={75}
								height={75}
								className='object-contain grayscale hover:grayscale-0 rounded-full'
							/>
							{/* <img
								src={partner?.imageLink}
								alt={partner?.title}
								width={75}
								height={75}
								className='object-contain grayscale hover:grayscale-0 rounded-full'
							/> */}
						</Link>
					))}
				</div>
				<div className='bg-[#f0f0f0] mx-3'>
					<div className='grid lg:grid-cols-12 py-12 inside gap-8'>
						{/* Show only on Mobile */}
						<div className='w-full col-span-2 flex lg:hidden'>
							<div className='w-20'>
								<Image
									src='https://res.cloudinary.com/junoconsulting/image/upload/w_200/q_auto/f_auto/v1695796259/MGM/images/Footer/govph-seal_ajbmoj.png'
									alt='Government Seal'
									width={100}
									height={100}
									className='object-contain'
								/>
								{/* <img
									src='https://res.cloudinary.com/junoconsulting/image/upload/w_200/q_auto/f_auto/v1695796259/MGM/images/Footer/govph-seal_ajbmoj.png'
									alt='Government Seal'
									width={100}
									height={100}
									className='object-contain'
								/> */}
							</div>
							<div className='w-20'>
								<Image
									src='https://res.cloudinary.com/junoconsulting/image/upload/w_200/q_auto/f_auto/v1695796257/MGM/images/Footer/govph-seal-mono_adwrqc.jpg'
									alt='Government Seal'
									width={100}
									height={100}
									className='object-contain'
								/>
								{/* <img
									src='https://res.cloudinary.com/junoconsulting/image/upload/w_200/q_auto/f_auto/v1695796257/MGM/images/Footer/govph-seal-mono_adwrqc.jpg'
									alt='Government Seal'
									width={100}
									height={100}
									className='object-contain'
								/> */}
							</div>
						</div>
						<div className='w-full col-span-3 hidden lg:block'>
							<div className='w-44'>
								<Image
									src='https://res.cloudinary.com/junoconsulting/image/upload/w_200/q_auto/f_auto/v1695796257/MGM/images/Footer/govph-seal-mono_adwrqc.jpg'
									alt='Government Seal'
									width={180}
									height={180}
									className='object-contain'
								/>
								{/* <img
									src='https://res.cloudinary.com/junoconsulting/image/upload/w_200/q_auto/f_auto/v1695796257/MGM/images/Footer/govph-seal-mono_adwrqc.jpg'
									alt='Government Seal'
									width={180}
									height={180}
									className='object-contain'
								/> */}
							</div>
						</div>

						<div className='w-full col-span-3'>
							<p className='text-lg font-bold text-secondaryTextColor mb-3'>
								Republic of the Philippines
							</p>
							<p className='text-secondaryTextColor'>
								All content is in the public domain unless otherwise stated.
							</p>
						</div>
						<div className='w-full col-span-3'>
							{footerLinks.map(item => (
								<div key={item.title} className='space-y-2'>
									<Link
										href={item.url}
										className='text-lg font-bold text-secondaryTextColor mb-3 w-3/4 hover:text-primary hover:underline'
									>
										{item.title}
									</Link>
									{item.links.map(footerLink => (
										<div>
											<Link
												href={footerLink.url}
												target='_blank'
												className='text-secondaryTextColor hover:text-primary hover:underline'
											>
												{footerLink.title}
											</Link>
										</div>
									))}
								</div>
							))}
						</div>
						<div className='w-full col-span-3 justify-self-end hidden lg:block'>
							<div className='w-44'>
								<Image
									src='https://res.cloudinary.com/junoconsulting/image/upload/w_200/q_auto/f_auto/v1695796259/MGM/images/Footer/govph-seal_ajbmoj.png'
									alt='Government Seal'
									width={180}
									height={180}
									className='object-contain'
								/>
								{/* <img
									src='https://res.cloudinary.com/junoconsulting/image/upload/w_200/q_auto/f_auto/v1695796259/MGM/images/Footer/govph-seal_ajbmoj.png'
									alt='Government Seal'
									width={180}
									height={180}
									className='object-contain'
								/> */}
							</div>
						</div>
					</div>
				</div>

				<p className='bg-mainBg text-center block py-3 font-Roboto text-secondaryTextColor'>
					&copy; 2024 Musems and Galleries Month. All rights reserved.{' '}
					<span className='hidden md:inline'>|</span>{' '}
					<br className='block md:hidden' />
					Developed by{' '}
					<Link
						href='mailto:mariaherbola@gmail.com'
						className='hover:text-primary underline'
					>
						Escultura
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;