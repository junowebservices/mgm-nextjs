'use client';
import { CalendarDayProps } from '@/constants/types';
import Link from 'next/link';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';

const CalendarDay: React.FC<CalendarDayProps> = ({ day, events }) => {
	const hasEvents = events.length > 0;
	const dayClasses = `border p-2 min-h-[120px] ${hasEvents && ' '}`;
	return (
		<div className={dayClasses}>
			<div className={`${!hasEvents && 'text-gray-400'} mb-1`}>{day}</div>
			{events.map((event, index) => (
				<div key={index} className='mb-1'>
					<Popover>
						<PopoverTrigger asChild>
							<p className='line-clamp-1 text-sm bg-mainYellow-light rounded-sm px-1 py-[2px] cursor-pointer hover:bg-mainYellow '>
								{event.title}
							</p>
						</PopoverTrigger>
						<PopoverContent className='w-80'>
							<div className='grid gap-4'>
								<div className='space-y-2'>
									<Link href={`/events/${event.slug}`}>
										<h4 className='font-medium leading-none cursor-pointer hover:underline'>
											{event.title}
										</h4>
									</Link>
									<p className='text-sm text-muted-foreground'>{event.date}</p>
								</div>
								<div className='space-y-3'>
									<p className='text-sm line-clamp-4'>{event.subtitle}</p>
									<div>
										<Link
											href={`/events/${event.slug}`}
											className='text-sm text-mainYellow-dark'
										>
											Go to event
										</Link>
									</div>
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</div>
			))}
		</div>
	);
};

export default CalendarDay;
