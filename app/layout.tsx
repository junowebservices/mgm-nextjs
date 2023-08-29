import './globals.css';
import { Suspense } from 'react';

import Footer from '@/components/Footer';
import Analytics from '@/components/gtag/Analytics';
import NavBar from '@/components/NavBar';
import Providers from '@/lib/providers';

export const metadata = {
	title: 'Museums and Galleries Month',
	description: 'Museums and Galleries Month 2023',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<link
				rel='stylesheet'
				type='text/css'
				charSet='UTF-8'
				precedence='default'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
			/>
			<link
				rel='stylesheet'
				type='text/css'
				precedence='default'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
			/>
			<body>
				<Suspense>
					<Analytics />
				</Suspense>
				<NavBar />
				<main className='flex flex-col w-full mt-28 lg:mt-32 xl:mt-36'>
					<Providers>{children}</Providers>
				</main>
				<Footer />
			</body>
		</html>
	);
}
