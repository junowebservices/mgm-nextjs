'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

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
	SheetFooter,
	SheetTrigger,
} from '@/components/ui/sheet';

import { agencyKits, headerLink, socialmedia } from '@/constants';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavBar = () => {
	const pathname = usePathname();

	return (
		<header className='full-bleed'>
			<div className='bg-gray-100 fixed z-10 w-full top-0 inside'>
				<div className='flex justify-between items-center font-Arial'>
					<a href="https://www.gov.ph/" target='_bank' className='text-xs md:text-sm py-2'>GOV.PH</a>
					{/* <NavigationMenu className='z-20'>
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
					</NavigationMenu> */}
				</div>
			</div>
			<div className='bg-white flex justify-between md:pt-4 items-center py-2 inside fixed z-[2] bg-transparent top-8'>
				<Link href='/' className='w-[125px]'>
					<Image
						src='https://res.cloudinary.com/junoconsulting/image/upload/w_500/q_auto/f_auto/v1695796290/MGM/images/logo_ayzaey.png'
						alt='logo'
						width={800}
						height={50}
						className='object-contain w-full'
						priority
					/>
					{/* <img
						src='https://res.cloudinary.com/junoconsulting/image/upload/w_500/q_auto/f_auto/v1695796290/MGM/images/logo_ayzaey.png'
						alt='logo'
						width={800}
						height={50}
						className='object-contain w-full'
					/> */}
				</Link>
				{/* Mobile Only */}
				<div className='flex md:hidden'>
					<Sheet>
						<SheetTrigger name='menu'>
							<HiOutlineMenuAlt3 className='w-8 h-8 text-white bg-primary' name='menu' />
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
										className={`p-4 text-white ${pathname.includes(item.url) &&
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
				{/* Desktop */}
				<div className='md:flex gap-4 flex-col items-end hidden'>
					<ul className='grid grid-cols-5 gap-4 place-content-center text-center'>
						{socialmedia.map((social, index) => (
							<li key={index}>
								<Link href={social.url} target='_blank'>
									<social.icon className='w-5 h-5 text-primary' />
								</Link>
							</li>
						))}
					</ul>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>About</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										<li className="row-span-3">
											<NavigationMenuLink asChild>
												<a
													className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none"
													href="/about"
												>
													<Image
														src='https://res.cloudinary.com/junoconsulting/image/upload/w_500/q_auto/f_auto/v1695796290/MGM/images/logo_ayzaey.png'
														alt='logo'
														width={100}
														height={20}
														className='object-contain w-full'
														priority
													/>
													<div className="mb-2 mt-4 text-lg font-medium">
													Museums and Galleries Month
													</div>
													<p className="text-sm leading-tight text-muted-foreground">
													Every October, the MGM offers fresh theme that provides awareness to all regarding the promising heritage of the Philippines.


													</p>
												</a>
											</NavigationMenuLink>
										</li>
										<ListItem target='_blank' href="/https://drive.google.com/drive/folders/1kVuS18k21WEd9TB-sVfWBE1FkThQVPG3?usp=drive_link" title="2024 MGM Poster Pack">
										MGM 2024 Poster Pack is a collection of promotional materials that may use to promote this year's theme.
										</ListItem>
										<ListItem target='_blank' href="https://drive.google.com/drive/folders/1kVuS18k21WEd9TB-sVfWBE1FkThQVPG3?usp=drive_link" title="2024 MGM Branding Fonts">
										To have the full experience of MGM 2024, branding fonts can be used to match the official font of this years theme.
										</ListItem>
										<ListItem target='_blank' href="https://drive.google.com/file/d/1DF-CGoiCShqRzmMAD72xNU4jvtxO8n4w/view?usp=drive_link" title="2024 MGM Digital Briefer">
										The digital briefer provides detailed explanation of the whole MGM celebration this year, including the Agency Kit and their uses.
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/events" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Events
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/download" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Download+
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/contact" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Contact
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					{/* <NavigationMenu className='z-1 mt-4'>
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
													: `text-primary hover:text-primary hover:underline drop-shadow-2xl`
											}
										>
											{item.title}
										</NavigationMenuLink>
									</Link>
								))}
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu> */}
				</div>
			</div>
		</header>
	);
};

export default NavBar;

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"
