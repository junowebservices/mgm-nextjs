import NavBar from '@/components/NavBar';
import './globals.css';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import Analytics from '@/components/gtag/Analytics';

const currentYear = new Date().getFullYear();

export const metadata = {
	title: 'Museums and Galleries Month',
	description: `Museums and Galleries Month ${currentYear}`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Suspense>
					<Analytics />
				</Suspense>
				<NavBar />
				<main className='flex flex-col w-full mt-28 lg:mt-32 xl:mt-36'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
