import EventsTabs from '@/components/EventsTabs';
import getEventMetadata from '@/components/getEventMetadata';
import MonthCalendar from '@/components/MonthCalendar';

const Events = () => {
	const { all } = getEventMetadata();
	const allEvents = all;

	return (
		<div className='py-8 px-4'>
			<h1 className='text-xl font-semibold mb-4'>October 2023 Calendar</h1>
			<section className='hidden md:block'>
				<MonthCalendar events={allEvents} />
			</section>
			<section className='md:hidden'>
				<EventsTabs />
			</section>
		</div>
	);
};

export default Events;
