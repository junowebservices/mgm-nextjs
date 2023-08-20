import { MonthCalendarProps } from '@/constants/types';
import CalendarDay from './CalendarDay';

const MonthCalendar: React.FC<MonthCalendarProps> = ({ events }) => {
	const daysInMonth = 31; // October has 31 days

	const renderDays = () => {
		const days = [];
		for (let i = 1; i <= daysInMonth; i++) {
			const currentDate = new Date(`2023-10-${i}`);
			const dayEvents = events.filter(event => {
				const eventDate = new Date(event.date);
				return (
					eventDate.getDate() === currentDate.getDate() &&
					eventDate.getMonth() === currentDate.getMonth()
				);
			});

			days.push(<CalendarDay key={i} day={i} events={dayEvents} />);
		}
		return days;
	};
	return (
		<div className='grid sm:grid-cols-2 md:grid-cols-7 gap-2'>
			{/* {Array.from({ length: 31 }).map((_, index) => (
				<div key={`empty-${index}`} />
			))} */}
			{renderDays()}
		</div>
	);
};

export default MonthCalendar;
