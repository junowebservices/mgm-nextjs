import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from './ui/separator';
import Link from 'next/link';
import { EventMetadata } from '@/constants/types';
import { buttonVariants } from './ui/button';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog"
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import { ScrollArea } from "@/components/ui/scroll-area"

const EventsTabs = ({ categorized, allEvents = false }: any) => {
	let pastEvents = categorized.pastEvents;
	let happeningNowEvents = categorized.happeningNowEvents;
	let futureEvents = categorized.futureEvents;

	// Check if allevent prop is false, and trim to 5 if needed
	if (!allEvents) {
		pastEvents = pastEvents.slice(0, 5);
		happeningNowEvents = happeningNowEvents.slice(0, 5);
		futureEvents = futureEvents.slice(0, 5);
	}

	return (
		<div className='full-bleed'>
			<Tabs defaultValue='happeningNow' className='w-full'>
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
						{pastEvents &&
							pastEvents.map((activity: EventMetadata, i: number) => {
								console.log(activity, 'activity')
								const formattedMarkdown = activity.content
									.replace(/\s\s$/gm, '<br/>') // Replace double spaces at end of line
									.replace(/\s*(\/\/|\\)\s*/g, '<br/>');
								return (
									<Dialog key={i}>
										<DialogTrigger className='text-lg font-medium font-serif text-left !mt-3 w-full'>
											{activity.title}
											<p className='mb-2 text-secondaryTextColor text-xs lg:text-sm'>
												{activity.date}
											</p>
										</DialogTrigger>

										<Separator className='!mt-0' />
										<DialogContent>
											<DialogHeader>
												<DialogTitle className='font-medium text-xl cursor-pointer mb-6 pr-4 font-serif'>{activity.title}</DialogTitle>
												<Image
													src={activity.featuredImage}
													width={500}
													height={200}
													alt="Featured Image"
												/>
												<ScrollArea className='!mt-6 max-h-[350px] text-left'>
													<Markdown >{formattedMarkdown}</Markdown>
												</ScrollArea>
												<DialogDescription className='hidden'>{activity.subtitle}
												</DialogDescription>
											</DialogHeader>
										</DialogContent>
									</Dialog>
									// <div key={i}>
									// 	<Link href={`/events/${activity.slug}`}>
									// 		<h3 className='text-lg hover:underline underline-offset-2 hover:text-primary'>
									// 			{activity.title}
									// 		</h3>
									// 	</Link>
									// 	<p className='my-2 text-secondaryTextColor text-xs lg:text-sm'>
									// 		{activity.date}
									// 	</p>
									// 	<Separator />
									// </div>
								);
							})}
					</div>
					{!allEvents && (
						<div className='mt-4'>
							<Link
								href='/events'
								className={buttonVariants({
									size: 'lg',
								})}
							>
								View All Events
							</Link>
						</div>
					)}
				</TabsContent>
				<TabsContent value='happeningNow'>
					<h2 className='text-xl lg:text-3xl font-semibold mb-4 lg:mb-8'>
						Calendar of Activities
					</h2>
					<div className='space-y-5'>
						{happeningNowEvents &&
							happeningNowEvents.map((activity: EventMetadata, i: number) => {
								return (
									<div key={i}>
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
					{!allEvents && (
						<div className='mt-4'>
							<Link
								href='/events'
								className={buttonVariants({
									size: 'lg',
								})}
							>
								View All Events
							</Link>
						</div>
					)}
				</TabsContent>
				<TabsContent value='futureEvents'>
					<h2 className='text-xl lg:text-3xl font-semibold mb-4 lg:mb-8'>
						Calendar of Activities
					</h2>
					<div className='space-y-5'>
						{futureEvents &&
							futureEvents.map((activity: EventMetadata, i: number) => {
								return (
									<div key={i}>
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
					{!allEvents && (
						<div className='mt-4'>
							<Link
								href='/events'
								className={buttonVariants({
									size: 'lg',
								})}
							>
								View All Events
							</Link>
						</div>
					)}
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default EventsTabs;
