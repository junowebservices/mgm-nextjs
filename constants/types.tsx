export interface Activity {
	id: number;
	title: string;
	description: string;
	date: string;
}

interface CategorizedEvents {
	pastEvents: EventMetadata[];
	happeningNowEvents: EventMetadata[];
	futureEvents: EventMetadata[];
}

export interface PostMetadata {
	title: string;
	date: string;
	subtitle: string;
	slug: string;
	featuredImage: string;
}

export interface EventMetadata {
	title: string;
	date: string;
	subtitle: string;
	slug: string;
	featuredImage: string;
}

export interface MonthCalendarProps {
	events: EventMetadata[];
}

export interface CalendarDayProps {
	day: number;
	events: EventMetadata[];
}
