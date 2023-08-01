import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaGlobeAsia } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const activities = [
	{
		id: 1,
		title: 'Artistic Expression Workshop: Discover Your Creative Side',
		description:
			"Explore your artistic abilities through a guided workshop where you'll experiment with various mediums and techniques.",
		date: '2023-10-12T00:00:00Z',
	},
	{
		id: 2,
		title: 'Historical Walking Tour: Uncover the Secrets of Our City',
		description:
			"Embark on a fascinating journey through the city's historic landmarks, led by knowledgeable guides who will reveal captivating stories and hidden tales.",
		date: '2023-10-18T00:00:00Z',
	},
	{
		id: 3,
		title: 'Photography Exhibition: Frames of Life',
		description:
			"Immerse yourself in a captivating display of photographs capturing life's moments, showcasing diverse perspectives and narratives.",
		date: '2023-10-23T00:00:00Z',
	},
	{
		id: 4,
		title: 'Family Fun Day: A Day of Art and Play',
		description:
			'Engage in art activities, interactive games, and creative workshops designed to entertain and inspire the whole family.',
		date: '2023-10-28T00:00:00Z',
	},
	{
		id: 5,
		title: 'Live Music Performance: Rhythms of the Gallery',
		description:
			'Experience the harmonious blend of live music and visual art, as talented musicians bring the gallery to life with their captivating performances.',
		date: '2023-10-05T00:00:00Z',
	},
	{
		id: 6,
		title: 'Lecture Series: Exploring Artistic Movements',
		description:
			'Join renowned art scholars and historians as they delve into the significant art movements that shaped our cultural landscape.',
		date: '2023-10-13T00:00:00Z',
	},
	{
		id: 7,
		title: 'Culinary Delights: Art-inspired Food Festival',
		description:
			'Indulge in a gastronomic adventure where local chefs create innovative dishes inspired by famous artworks, merging the worlds of art and food.',
		date: '2023-10-20T00:00:00Z',
	},
	{
		id: 8,
		title: 'Virtual Reality Experience: Journey into the Past',
		description:
			'Transport yourself through time and space with immersive VR technology, allowing you to explore historical settings and experience pivotal moments.',
		date: '2023-10-09T00:00:00Z',
	},
	{
		id: 9,
		title: 'Sculpture Showcase: Exploring Three-Dimensional Artistry',
		description:
			'Witness a stunning collection of intricate sculptures, showcasing the craftsmanship and artistic vision of talented sculptors.',
		date: '2023-10-15T00:00:00Z',
	},
	{
		id: 10,
		title: 'Digital Art Exhibition: A Fusion of Technology and Creativity',
		description:
			'Immerse yourself in a world of digital art, where innovative technologies push the boundaries of creative expression.',
		date: '2023-10-25T00:00:00Z',
	},
	{
		id: 11,
		title: 'Art and Music Workshop: Harmonizing Creativity',
		description:
			'Join a unique workshop that combines art and music, exploring the connection between visual and auditory expressions.',
		date: '2023-10-16T00:00:00Z',
	},
];
export const headerLink = [
	{
		title: 'About',
		url: '/about',
	},
	{
		title: 'Articles',
		url: '/articles',
	},
	{
		title: 'Download+',
		url: '/download',
	},
	{
		title: 'Contact',
		url: '/contact',
	},
];

export const socialmedia = [
	{
		title: 'Facebook',
		url: 'https://www.facebook.com',
		icon: BsFacebook,
	},
	{
		title: 'Twitter',
		url: 'https://www.twitter.com',
		icon: AiFillTwitterCircle,
	},
	{
		title: 'Instagram',
		url: 'https://www.instagram.com',
		icon: AiFillInstagram,
	},
	{
		title: 'Email',
		url: 'https://www.gmail.com',
		icon: MdEmail,
	},
	{
		title: 'Website',
		url: 'https://www.junowebservices.com',
		icon: FaGlobeAsia,
	},
];

export const partners = [
	{
		title: 'ManilArt',
		imageLink: '/images/partners/manilart.png',
	},
	{
		title: 'Luzon Art Fair',
		imageLink: '/images/partners/luzon.png',
	},
	{
		title: 'Visayas Art Fair',
		imageLink: '/images/partners/visayas.png',
	},
	{
		title: 'Mindanao Art Fair',
		imageLink: '/images/partners/mindanao.png',
	},
	{
		title: 'Philippine Museums Summit',
		imageLink: '/images/partners/museum.png',
	},
	{
		title: 'NCCA Gallery',
		imageLink: '/images/partners/ncca.png',
	},
];

export const memos = [
	{
		title: 'Commission on Higher Education',
		imageLink: '/images/memo/ched.png',
	},
	{
		title: 'Civil Service Commission',
		imageLink: '/images/memo/csc.png',
	},
	{
		title: 'Department of Education',
		imageLink: '/images/memo/deped.png',
	},
	{
		title: 'Department of Foreign Affairs',
		imageLink: '/images/memo/dfa.png',
	},
	{
		title: 'Department of the Interior and Local Government',
		imageLink: '/images/memo/dilg.png',
	},
	{
		title: 'Pambansang Aklatan ng Pilipinas',
		imageLink: '/images/memo/aklatan.png',
	},
];

export const fuels = [
	{
		title: 'Fuel',
		value: '',
	},
	{
		title: 'Gas',
		value: 'Gas',
	},
	{
		title: 'Electricity',
		value: 'Electricity',
	},
];

export const footerLinks = [
	{
		title: 'National Commission for Culture and the Arts',
		url: 'https://ncca.gov.ph/',
		links: [
			{
				title: 'Cultural Center of the Philippines',
				url: 'https://ncca.gov.ph/',
			},
			{ title: 'Komisyon sa Wikang Filipino', url: 'https://kwf.gov.ph/' },
			{
				title: 'National Archives of the Philippines',
				url: 'https://nationalarchives.gov.ph/',
			},
			{
				title: 'National Historical Commission of the Philippines',
				url: 'https://nhcp.gov.ph/',
			},
			{
				title: 'National Library of the Philippines',
				url: 'http://web.nlp.gov.ph/nlp/',
			},
			{
				title: 'National Museum of the Philippines',
				url: 'https://www.nationalmuseum.gov.ph/',
			},
		],
	},
];
