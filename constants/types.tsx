export interface Activity {
	id: number;
	title: string;
	description: string;
	date: string;
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

export interface Event {
	date: number;
	title: string;
}

export interface MonthCalendarProps {
	events: Event[];
}

export interface CalendarDayProps {
	day: number;
	events: Event[];
	hasEvents: boolean;
}
