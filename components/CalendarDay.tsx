'use client';
import { useEffect } from 'react';
import { CalendarDayProps } from '@/constants/types';
import Link from 'next/link';

const CalendarDay: React.FC<CalendarDayProps> = ({ day, events }) => {
	const hasEvents = events.length > 0;
	const dayClasses = `border p-2 h-[100px] ${
		hasEvents ? 'bg-mainYellow' : 'bg-white'
	}`;

	return (
		<div className={dayClasses}>
			<div className='font-bold mb-1'>{day}</div>
			{events.map((event, index) => (
				<div key={index}>
					<div className='text-lg font-semibold line-clamp-1 cursor-pointer hover:underline'>
						<Link href={`/events/${event.slug}`}>{event.title}</Link>
					</div>
					<div className='text-xs line-clamp-2'>{event.subtitle}</div>
				</div>
			))}
		</div>
	);
};

export default CalendarDay;
