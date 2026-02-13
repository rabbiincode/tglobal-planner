export type TEvent = {
	id: string;
	title: string;
	startTime: string; // Format "HH:mm"
	endTime: string; // Format "HH:mm"
	assignee: string;
	initials: string;
	type: string;
	color: string; // Chakra color key (e.g., "orange", "green")
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
