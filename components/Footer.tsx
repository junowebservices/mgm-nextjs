import { footerLinks, partners } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='full-bleed mt-12'>
			<div className='bg-gray-100'>
				<div className='py-4 flex justify-center gap-2 lg:gap-6 px-4'>
					{partners.map(partner => (
						<Image
							src={partner?.imageLink}
							alt={partner?.title}
							width={50}
							height={50}
							className='object-contain grayscale hover:grayscale-0'
						/>
					))}

					{/* <div className="w-16 h-16 rounded-full bg-white"></div> */}
					{/* <div className="w-16 h-16 rounded-full bg-white"></div> */}
					{/* <div className="w-16 h-16 rounded-full bg-white"></div> */}
				</div>
				<div className='bg-[#f0f0f0] mx-3'>
					<div className='grid lg:grid-cols-12 py-12 inside gap-8'>
						{/* Show only on Mobile */}
						<div className='w-full col-span-2 flex lg:hidden'>
							<div className='w-20'>
								<Image
									src='/govph-seal.png'
									alt='Government Seal'
									width={100}
									height={100}
									className='object-contain'
								/>
							</div>
							<div className='w-20'>
								<Image
									src='/govph-seal-mono.jpg'
									alt='Government Seal'
									width={100}
									height={100}
									className='object-contain'
								/>
							</div>
						</div>
						<div className='w-full col-span-3 hidden lg:block'>
							<div className='w-44'>
								<Image
									src='/govph-seal-mono.jpg'
									alt='Government Seal'
									width={180}
									height={180}
									className='object-contain'
								/>
							</div>
						</div>

						<div className='w-full col-span-3'>
							<p className='text-base font-bold text-secondaryTextColor mb-3'>
								Republic of the Philippines
							</p>
							<p className='text-sm text-secondaryTextColor'>
								All content is in the public domain unless otherwise stated.
							</p>
						</div>
						<div className='w-full col-span-3'>
							{footerLinks.map(item => (
								<div key={item.title}>
									<Link
										href={item.url}
										className='text-base font-bold text-secondaryTextColor mb-3 w-3/4 hover:text-primary hover:underline'
									>
										{item.title}
									</Link>
									{item.links.map(footerLink => (
										<div>
											<Link
												href={footerLink.url}
												target='_blank'
												className='text-sm text-secondaryTextColor hover:text-primary hover:underline'
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
									src='/govph-seal.png'
									alt='Government Seal'
									width={180}
									height={180}
									className='object-contain'
								/>
							</div>
						</div>
					</div>
				</div>

				<p className='bg-mainBg text-center block py-3 font-Roboto text-xs text-secondaryTextColor'>
					&copy; 2023 Musems and Galleries Month. All rights reserved.{' '}
					<span className='hidden md:inline'>|</span>{' '}
					<br className='block md:hidden' />
					Developed by{' '}
					<Link href='/' className='hover:underline'>
						Juno
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
