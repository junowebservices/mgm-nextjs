'use client';

import { CgSoftwareDownload } from 'react-icons/cg';
import { agencyKits, socMedKits } from '@/constants';
import Link from 'next/link';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

const Download = () => {
	return (
		<div>
			<section className='inside mb-12' id="agencykit">
				<div className='text-center mb-4'>
					<h2 className='text-2xl md:text-3xl font-bold'>Agency Kit</h2>
				</div>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 place-content-center'>
					{agencyKits.map((kit, index) => (
						<Link key={index} href={kit.link} target='_blank'>
							<div className='grid place-content-center border-2 border-mainTextColor bg-mainYellow aspect-square hover:opacity-80 cursor-pointer'>
								<div className='w-[85%] mx-auto space-y-4'>
									<div>
										<h2 className='text-xl lg:text-3xl font-medium my-3 text-mainTextColor line-clamp-2'>
											{kit.title}
										</h2>
										<p className='text-mainTextColor line-clamp-4'>
											{kit.desc}
										</p>
									</div>
									<div>
										<CgSoftwareDownload className='w-8 h-8' />
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div className='mt-4 md:mt-6 text-center'></div>
			</section>
			{/* Social Media Kit */}
			<section className='inside my-12' id="socialmediakit">
				<div className='text-center mb-4'>
					<h2 className='text-2xl md:text-3xl font-bold'>Social Media Kit</h2>
				</div>
				<div className='grid gap-4 sm:grid-cols-2 place-content-center'>
					{socMedKits.map((socMedkit, index) => (
						<Link href={socMedkit.link} key={index} target='_blank'>
							<div className='grid place-content-center border-2 text-white border-mainTextColor bg-mainBlue aspect-square hover:opacity-80 cursor-pointer'>
								<div className='w-[85%] mx-auto space-y-4'>
									<div>
										<h2 className='text-xl font-medium my-3 line-clamp-1'>
											{socMedkit.title}
										</h2>
										<p className='line-clamp-4'>{socMedkit.desc}</p>
									</div>
									<div>
										<CgSoftwareDownload className='w-8 h-8' />
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
			{/* Archives */}
			<section className='bg-mainBlue text-white mt-6 widest hidden'>
				<div className='inside py-24 px-8 lg:px-16' id='download'>
					<div className='text-center mb-4'>
						<h2 className='text-2xl md:text-3xl font-bold'>Archives</h2>
					</div>
					<Carousel>
						<CarouselContent>
							<CarouselItem><div className='border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer' /></CarouselItem>
							<CarouselItem><div className='border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer' /></CarouselItem>
							<CarouselItem><div className='border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer' /></CarouselItem>
							<CarouselItem><div className='border-2 border-mainTextColor bg-mainYellow aspect-[3/4] hover:opacity-80 cursor-pointer' /></CarouselItem>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</section>
		</div>
	);
};

export default Download;
