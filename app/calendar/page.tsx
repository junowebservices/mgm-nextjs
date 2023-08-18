import MonthCalendar from '@/components/MonthCalendar';
import { Event } from '@/constants/types';

const Calendar = () => {
	const events: Event[] = [
		{ date: 5, title: 'Parade' },
		{ date: 15, title: 'Event 2' },
	];
	return (
		<div className='py-8 px-4'>
			{/* <h1 className='text-xl font-semibold mb-4'>October 2023 Calendar</h1> */}
			<MonthCalendar events={events} />
		</div>
	);
};

export default Calendar;
