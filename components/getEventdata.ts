import fs from 'fs';
import matter from 'gray-matter';

import { EventMetadata } from '@/constants/types';

const getEventMetadata = (): EventMetadata[] => {
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
			subtitle: matterResult.data.subtitle,
			featuredImage: matterResult.data.featuredImage,
			slug: fileName.replace('.md', ''),
			content: matterResult.content
		};
	});
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return posts;
};

export default getEventMetadata;
