import { MonthCalendarProps } from '@/constants/types';
import CalendarDay from './CalendarDay';

const MonthCalendar: React.FC<MonthCalendarProps> = ({ events }) => {
	const daysInMonth = 31; // October has 31 days

	const renderDays = () => {
		const days = [];
		// Add two empty divs as placeholders for the first and second columns
		days.push(<div key="empty-1"></div>);
		days.push(<div key="empty-2"></div>);
	
		// Render the days starting from the 3rd column
		for (let i = 1; i <= daysInMonth; i++) {
			const currentDate = new Date(`2024-10-${i}`);
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
		<div className='grid grid-cols-7 gap-2'>
			{renderDays()}
		</div>
	);
};

export default MonthCalendar;