'use client';
import { CalendarDayProps } from '@/constants/types';
import Link from 'next/link';

const CalendarDay: React.FC<CalendarDayProps> = ({ day, events }) => {
	const hasEvents = events.length > 0;
	const dayClasses = `border p-2 min-h-[120px] ${
		hasEvents ? 'bg-mainYellow border-black border' : 'bg-white'
	}`;

	return (
		<div className={dayClasses}>
			<div className={`${!hasEvents && 'text-gray-400'} mb-1`}>{day}</div>
			{events.map((event, index) => (
				<div key={index}>
					<div className='text-lg line-clamp-1 cursor-pointer hover:underline'>
						<Link href={`/events/${event.slug}`}>{event.title}</Link>
					</div>
					{/* <div className='text-xs line-clamp-2'>{event.subtitle}</div> */}
				</div>
			))}
		</div>
	);
};

export default CalendarDay;
