export type TEvent = {
	id: string;
	title: string;
	startTime: string;
	endTime: string;
	assignee: string;
	initials: string;
	type: string;
	date: string;
	color: string;
	columnId: string;
};

export type TRoom = {
	id: string;
	name: string;
	headerBg: string;
};

export type TTimeSlot = {
	time: string;
};
