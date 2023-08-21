import EventsTabs from '@/components/EventsTabs';
import getEventMetadata from '@/components/getEventMetadata';
import MonthCalendar from '@/components/MonthCalendar';

const Events = () => {
	const { all } = getEventMetadata();
	const allEvents = all;

	return (
		<section>
			<h1 className='font-bold text-2xl lg:text-3xl my-6 text-center'>
				Calendar of Activities
			</h1>
			<div className='hidden md:block inside'>
				<MonthCalendar events={allEvents} />
			</div>
			<div className='md:hidden'>
				<EventsTabs />
			</div>
		</section>
	);
};

export default Events;
