import { EventMetadata, CategorizedEvents } from '@/constants/types';
import fs from 'fs';
import matter from 'gray-matter';

const getEventsMetadata = (): {
	categorized: CategorizedEvents;
	all: EventMetadata[];
} => {
	// Your existing code to read markdown files and extract data
	const folder = 'events/';
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter(file => file.endsWith('.md'));

	// Get gray-matter data from each file.
	const events = markdownPosts.map(fileName => {
		const fileContents = fs.readFileSync(`events/${fileName}`, 'utf8');
		const matterResult = matter(fileContents);
		return {
			title: matterResult.data.title,
			date: matterResult.data.date,
			subtitle: matterResult.data.subtitle,
			featuredImage: matterResult.data.featuredImage,
			slug: fileName.replace('.md', ''),
			content: matterResult.content
		};
	});

	// Sort events by date
	events.sort((a: any, b: any) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateA.getTime() - dateB.getTime(); // Compare dates using getTime()
	});

	// Categorize events
	const currentDate = new Date();
	const pastEvents = [];
	const happeningNowEvents = [];
	const futureEvents = [];

	for (const event of events) {
		const eventDate = new Date(event.date);

		if (eventDate < currentDate) {
			pastEvents.push({ ...event, category: 'Past Events' });
		} else if (
			eventDate >= currentDate &&
			eventDate <=
			new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				currentDate.getDate() + 6,
			)
		) {
			happeningNowEvents.push({ ...event, category: 'Happening Now' });
		} else {
			futureEvents.push({ ...event, category: 'Future Events' });
		}
	}

	const categorized = {
		pastEvents,
		happeningNowEvents,
		futureEvents,
	};

	return {
		categorized,
		all: events,
	};
};

export default getEventsMetadata;
