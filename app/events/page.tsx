import EventsTabs from '@/components/EventsTabs';
import getEventsMetadata from '@/components/getEventsMetadata';
import MonthCalendar from '@/components/MonthCalendar';

const Events = () => {
	const { all, categorized } = getEventsMetadata();
	const allEvents = all;

	return (
		<section>
			<h1 className='font-bold text-2xl lg:text-3xl my-6 text-center'>
				Calendar of Activities - <br className='md:hidden' />
				October 2023
			</h1>
			<div className='hidden md:block inside'>
				<MonthCalendar events={allEvents} />
			</div>
			<div className='md:hidden'>
				<EventsTabs categorized={categorized} allEvents={true} />
			</div>
		</section>
	);
};

export default Events;
