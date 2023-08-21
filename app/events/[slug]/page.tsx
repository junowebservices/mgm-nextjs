import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import Image from 'next/image';
import getEventMetadata from '@/components/getEventMetadata';

const getEventContent = (slug: string) => {
	const folder = 'events/';
	const file = `${folder}${slug}.md`;
	const content = fs.readFileSync(file, 'utf8');
	const matterResult = matter(content);
	return matterResult;
};

export const generateStaticParams = async () => {
	const { all } = getEventMetadata();
	const allEvents = all;

	return allEvents.map(event => ({
		slug: event.slug,
	}));
};

const EventPage = (props: any) => {
	const slug = props.params.slug;
	const event = getEventContent(slug);
	return (
		<div className='inside'>
			<div className='mb-12'>
				<Image
					src={event.data.featuredImage}
					width={1500}
					height={500}
					className='object-cover w-full lg:h-[500px]'
					alt='image'
				/>
				<div className='max-w-[800px] mx-auto'>
					<h1 className='text-3xl lg:text-3xl text-black mt-8'>
						{event.data.title}
					</h1>
					<p className='text-slate-800 mt-2 lg:mt-4'>{event.data.date}</p>
				</div>
			</div>

			<article className='text-lg max-w-[800px] mx-auto'>
				<Markdown>{event.content}</Markdown>
			</article>
		</div>
	);
};

export default EventPage;
