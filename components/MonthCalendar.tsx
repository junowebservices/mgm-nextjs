import { MonthCalendarProps } from '@/constants/types';
import CalendarDay from './CalendarDay';

const daysInMonth = 31; // October has 31 days

const MonthCalendar: React.FC<MonthCalendarProps> = ({ events }) => {
	const renderDays = () => {
		const days = [];
		for (let i = 1; i <= daysInMonth; i++) {
			const dayEvents = events.filter(event => event.date === i);
			const hasEvents = dayEvents.length > 0;
			days.push(
				<CalendarDay
					key={i}
					day={i}
					events={dayEvents}
					hasEvents={hasEvents}
				/>,
			);
		}
		return days;
	};

	return (
		<div className='grid sm:grid-cols-2 md:grid-cols-7 gap-2'>
			{Array.from({ length: 31 }).map((_, index) => (
				<div key={`empty-${index}`} className='hidden md:block' />
			))}
			{renderDays()}
		</div>
	);
};

export default MonthCalendar;
