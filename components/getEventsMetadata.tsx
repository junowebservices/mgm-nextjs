import { EventMetadata, CategorizedEvents } from '@/constants/types';
import fs from 'fs';
import matter from 'gray-matter';

// Function to check if the event is from the specified year
const isEventFromYear = (eventDate: Date, year: number) => {
	return eventDate.getFullYear() === year;
};

// Cache data and last update time
let cachedData: {
	categorized: CategorizedEvents;
	all: EventMetadata[];
} | null = null;
let lastCheckedDate = new Date().toDateString(); // Keep track of the last checked day

const getEventsMetadata = (year: number): {
	categorized: CategorizedEvents;
	all: EventMetadata[];
} => {
	const currentDate = new Date().toDateString();
	const today = new Date(new Date().toDateString()); // Today's date without time

	// Refresh data if the day has changed or cache is null
	if (!cachedData || lastCheckedDate !== currentDate) {
		const folder = 'events/';
		const files = fs.readdirSync(folder);
		const markdownPosts = files.filter(file => file.endsWith('.md'));

		// Get gray-matter data from each file
		const events = markdownPosts.map(fileName => {
			const fileContents = fs.readFileSync(`events/${fileName}`, 'utf8');
			const matterResult = matter(fileContents);
			return {
				title: matterResult.data.title,
				date: matterResult.data.date,
				endDate: matterResult.data.endDate || matterResult.data.date, // Use endDate if provided
				subtitle: matterResult.data.subtitle,
				featuredImage: matterResult.data.featuredImage,
				slug: fileName.replace('.md', ''),
				content: matterResult.content,
			};
		}).filter(event => isEventFromYear(new Date(event.date), year));

		// Sort events by date
		events.sort((a: any, b: any) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			return dateA.getTime() - dateB.getTime(); // Compare dates using getTime()
		});

		// Categorize events
		const pastEvents = [];
		const happeningNowEvents = [];
		const futureEvents = [];

		for (const event of events) {
			const eventStartDate = new Date(new Date(event.date).toDateString());
			const eventEndDate = new Date(new Date(event.endDate).toDateString());

			if (eventEndDate < today) {
				// Event has already ended
				pastEvents.push({ ...event, category: 'Past Events' });
			} else if (eventStartDate <= today && eventEndDate >= today) {
				// Event is happening today (or ongoing)
				happeningNowEvents.push({ ...event, category: 'Happening Now' });
			} else if (eventStartDate > today) {
				// Event will happen in the future
				futureEvents.push({ ...event, category: 'Future Events' });
			}
		}

		const categorized = {
			pastEvents,
			happeningNowEvents,
			futureEvents,
		};

		// Update cache and last checked date
		cachedData = {
			categorized,
			all: events,
		};
		lastCheckedDate = currentDate;
	}

	// Return cached data
	return cachedData!;
};

export default getEventsMetadata;
