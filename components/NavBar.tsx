'use client';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaGlobeAsia } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';

import { headerLink, socialmedia } from '@/constants';
import Image from 'next/image';

import Link from 'next/link';
import { Separator } from './ui/separator';
import { usePathname } from 'next/navigation';

const NavBar = () => {
	const pathname = usePathname();

	return (
		<header className='full-bleed'>
			<div className='bg-gray-100 fixed z-10 w-full top-0 inside'>
				<div className='flex justify-between items-center font-Arial'>
					<p className='text-xs md:text-sm'>GOV.PH</p>
					<NavigationMenu className='z-20'>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className='text-xs md:text-sm bg-transparent !pr-0'>
									Accessibility Statement
								</NavigationMenuTrigger>
								<NavigationMenuContent className='bg-white'>
									<ul className='grid gap-3 py-2 px-4 md:w-[300px] lg:w-[300px] z-10 bg-white'>
										<Link href='/docs' title='Introduction'>
											Re-usable
										</Link>
										<Link href='/docs/installation' title='Installation'>
											How to
										</Link>
										<Link href='/docs/primitives/typography' title='Typography'>
											Styles
										</Link>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem className='hidden md:block'>
								<Link href='/contact' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Contact Us
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem className='hidden md:block'>
								<Link href='/contact' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<Input
											className='bg-transparent h-7 text-mainTextColor'
											placeholder='Search'
										/>
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
			<div className='flex justify-between md:pt-4 items-center py-2 inside fixed z-[2] bg-white top-10'>
				<Link href='/'>
					<Image
						priority
						src='/logo.png'
						alt='logo'
						width={125}
						height={50}
						className='object-contain md:hidden'
					/>
					<Image
						priority
						src='/logo.png'
						alt='logo'
						width={150}
						height={50}
						className='object-contain hidden md:block'
					/>
				</Link>
				{/* Mobile Only */}
				<div className='flex md:hidden'>
					<Sheet>
						<SheetTrigger name='menu'>
							<HiOutlineMenuAlt3 className='w-8 h-8' name='menu' />
						</SheetTrigger>
						<SheetContent className='pt-12 bg-primary'>
							{/* <div className='space-y-4'>
								<div
									className={`p-4 text-white ${
										pathname === '/' &&
										'font-bold underline underline-white underline-offset-2'
									}`}
								>
									<Link href='/' legacyBehavior passHref className=''>
										<h2 className=''>Home</h2>
									</Link>
								</div>
							</div> */}
							{headerLink.map((item, index) => (
								<div className='space-y-4' key={index}>
									<div
										key={item.title}
										className={`p-4 text-white ${
											pathname.includes(item.url) &&
											'font-bold underline underline-white underline-offset-2'
										}`}
									>
										<Link href={item.url} legacyBehavior passHref className=''>
											<h2 className=''>{item.title}</h2>
										</Link>
									</div>
								</div>
							))}
							<SheetFooter className='absolute left-10 bottom-8'>
								<ul className='grid grid-cols-5 gap-4 place-content-center text-center'>
									{socialmedia.map((social, index) => (
										<li key={index}>
											<Link href={social.url} target='_blank'>
												<social.icon className='w-6 h-6 text-white' />
											</Link>
										</li>
									))}
								</ul>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
				<div className='md:flex flex-col items-end hidden'>
					<ul className='grid grid-cols-5 gap-4 place-content-center text-center'>
						{socialmedia.map((social, index) => (
							<li key={index}>
								<Link href={social.url} target='_blank'>
									<social.icon className='w-5 h-5 text-primary' />
								</Link>
							</li>
						))}
					</ul>
					<NavigationMenu className='z-1 mt-4'>
						<NavigationMenuList>
							<NavigationMenuItem className='space-x-10'>
								{headerLink.map(item => (
									<Link
										href={item.url}
										legacyBehavior
										passHref
										key={item.title}
									>
										<NavigationMenuLink
											className={
												pathname.includes(item.url)
													? `text-primary hover:text-primary`
													: `text-secondaryTextColor hover:text-primary hover:underline`
											}
										>
											{item.title}
										</NavigationMenuLink>
									</Link>
								))}
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
