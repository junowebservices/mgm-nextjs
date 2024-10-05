import NavBar from '@/components/NavBar';
import './globals.css';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import Analytics from '@/components/gtag/Analytics';
export const metadata = {
	title: 'Museums and Galleries Month',
	description: 'Museums and Galleries Month 2024',
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
				<main className='flex flex-col w-full mt-32'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
