'use client';
import { useEffect } from 'react';
import { CalendarDayProps } from '@/constants/types';

const CalendarDay: React.FC<CalendarDayProps> = ({
	day,
	events,
	hasEvents,
}) => {
	return (
		<div
			className={`${
				hasEvents
					? 'w-full bg-mainYellow hover:bg-mainYellow-light cursor-pointer'
					: 'hidden md:block'
			} border min-h-[120px] p-2`}
		>
			<p className='mb-1'>{day}</p>
			{events.map((event, index) => (
				<h2 key={index}>{event.title}</h2>
			))}
		</div>
	);
};

export default CalendarDay;
