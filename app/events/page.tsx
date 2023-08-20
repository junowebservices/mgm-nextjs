import getEventMetadata from '@/components/getEventMetadata';
import MonthCalendar from '@/components/MonthCalendar';

const Events = () => {
	const postMetadata = getEventMetadata();

	return (
		<div className='py-8 px-4'>
			<h1 className='text-xl font-semibold mb-4'>October 2023 Calendar</h1>
			<MonthCalendar events={postMetadata} />
		</div>
	);
};

export default Events;
