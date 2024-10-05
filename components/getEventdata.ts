import fs from 'fs';
import matter from 'gray-matter';
import { EventMetadata } from '@/constants/types';

// Function to check if the event is in the current year
const isCurrentYearEvent = (eventDate: Date) => {
	const currentYear = new Date().getFullYear();
	return eventDate.getFullYear() === currentYear;
};

// Cache data and last update time
let cachedEvents: EventMetadata[] | null = null;
let lastCheckedDate = new Date().toDateString(); // Keep track of the last checked day

const getEventMetadata = (): EventMetadata[] => {
	const currentDate = new Date().toDateString();

	// Refresh data if the day has changed or cache is null
	if (!cachedEvents || lastCheckedDate !== currentDate) {
		const folder = 'events/';
		const files = fs.readdirSync(folder);
		const markdownPosts = files.filter(file => file.endsWith('.md'));

		// Get gray-matter data from each file.
		const posts = markdownPosts.map(fileName => {
			const fileContents = fs.readFileSync(`events/${fileName}`, 'utf8');
			const matterResult = matter(fileContents);
			return {
				title: matterResult.data.title,
				date: matterResult.data.date,
				endDate: matterResult.data.endDate,
				subtitle: matterResult.data.subtitle,
				featuredImage: matterResult.data.featuredImage,
				slug: fileName.replace('.md', ''),
				content: matterResult.content,
			};
		});

		// Filter posts to include only events from the current year
		const currentYearPosts = posts.filter(post =>
			isCurrentYearEvent(new Date(post.date))
		);

		// Sort by date, with the most recent first
		currentYearPosts.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);

		// Update cache and the last checked date
		cachedEvents = currentYearPosts;
		lastCheckedDate = currentDate;
	}

	// Return the cached events
	return cachedEvents!;
};

export default getEventMetadata;
