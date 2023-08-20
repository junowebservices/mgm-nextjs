import { format, parseISO } from 'date-fns';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from './ui/separator';
import Link from 'next/link';
import getEventMetadata from './getEventMetadata';

const EventsTabs = () => {
	// Call the getEventMetadata function
	const { categorized } = getEventMetadata();
	// Access categorized events
	const pastEvents = categorized.pastEvents;
	const happeningNowEvents = categorized.happeningNowEvents;
	const futureEvents = categorized.futureEvents;

	return (
		<div className='full-bleed'>
			<Tabs defaultValue='futureEvents' className='w-full'>
				<TabsList>
					<TabsTrigger value='pastEvents'>Past Events</TabsTrigger>
					<TabsTrigger value='happeningNow'>Happening Now</TabsTrigger>
					<TabsTrigger value='futureEvents'>Future Events</TabsTrigger>
				</TabsList>
				<TabsContent value='pastEvents'>
					<h2 className='text-xl lg:text-3xl font-semibold mb-4 lg:mb-8'>
						Calendar of Activities
					</h2>
					<div className='space-y-5'>
						{pastEvents.map(activity => {
							return (
								<div key={activity.title}>
									<Link href={`/events/${activity.slug}`}>
										<h3 className='text-lg   hover:underline underline-offset-2 hover:text-primary'>
											{activity.title}
										</h3>
									</Link>
									<p className='my-2 text-secondaryTextColor text-xs lg:text-sm'>
										{activity.date}
									</p>
									<Separator />
								</div>
							);
						})}
					</div>
				</TabsContent>
				<TabsContent value='happeningNow'>
					<h2 className='text-xl lg:text-3xl font-semibold mb-4 lg:mb-8'>
						Calendar of Activities
					</h2>
					<div className='space-y-5'>
						{happeningNowEvents.map(activity => {
							return (
								<div key={activity.title}>
									<Link href={`/events/${activity.slug}`}>
										<h3 className='text-lg   hover:underline underline-offset-2 hover:text-primary'>
											{activity.title}
										</h3>
									</Link>
									<p className='my-2 text-secondaryTextColor text-xs lg:text-sm'>
										{activity.date}
									</p>
									<Separator />
								</div>
							);
						})}
					</div>
				</TabsContent>
				<TabsContent value='futureEvents'>
					<h2 className='text-xl lg:text-3xl font-semibold mb-4 lg:mb-8'>
						Calendar of Activities
					</h2>
					<div className='space-y-5'>
						{futureEvents.map(activity => {
							return (
								<div key={activity.title}>
									<Link href={`/events/${activity.slug}`}>
										<h3 className='text-lg   hover:underline underline-offset-2 hover:text-primary'>
											{activity.title}
										</h3>
									</Link>
									<p className='my-2 text-secondaryTextColor text-xs lg:text-sm'>
										{activity.date}
									</p>
									<Separator />
								</div>
							);
						})}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default EventsTabs;
