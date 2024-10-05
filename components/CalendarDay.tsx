'use client';
import { CalendarDayProps } from '@/constants/types';
import Link from 'next/link';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { Button, buttonVariants } from './ui/button';

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


const CalendarDay: React.FC<CalendarDayProps> = ({ day, events }) => {
	const hasEvents = events.length > 0;
	const dayClasses = `border p-2 min-h-[120px] ${hasEvents && ' '}`;
	return (
		<div className={dayClasses}>
			<div className={`${!hasEvents && 'text-gray-400'} mb-1`}>{day}</div>
			{events.map((event, index) => {
				const formattedMarkdown = event.content
					.replace(/\s\s$/gm, '<br/>') // Replace double spaces at end of line
					.replace(/\s*(\/\/|\\)\s*/g, '<br/>');
				return (
					<Dialog key={index}>
						<DialogTrigger className='line-clamp-2 text-sm bg-mainYellow-light rounded-sm px-1 py-[2px] text-left mb-1 font-serif w-full'>
							{event.title}
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle className='font-medium text-xl cursor-pointer mb-6 pr-4 font-serif'>{event.title}</DialogTitle>
								<Image
									src={event.featuredImage}
									width={500}
									height={200}
									alt="Featured Image"
								/>
								<p className='mb-2 text-secondaryTextColor'>
												{event.date} {event.endDate && <span>- {event.endDate} </span>}
											</p>
								<ScrollArea className='!mt-6 max-h-[300px] pb-8'>
									<Markdown >{formattedMarkdown}</Markdown>
								</ScrollArea>
								<DialogDescription className='hidden'>{event.subtitle}
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				)

			})}

		</div >
	);
};

export default CalendarDay;