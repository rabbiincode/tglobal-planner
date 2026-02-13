import { TEvent, TRoom, TTimeSlot } from './types';

export const PLANNER_ROOMS: TRoom[] = [
	{ id: 'room1', name: 'Behandelingkamer1', headerBg: 'green.50' },
	{ id: 'management', name: 'Management', headerBg: 'gray.50' },
	{ id: 'misc', name: 'Bijzonderheden-Verlof-Cursus-', headerBg: 'yellow.50' },
	{ id: 'finance', name: 'Financien', headerBg: 'red.50' }
];

export const PLANNER_TIME_SLOTS: TTimeSlot[] = [
	{ time: '11:00' },
	{ time: '11:30' },
	{ time: '12:00' },
	{ time: '12:30' },
	{ time: '13:00' },
	{ time: '13:30' },
	{ time: '14:00' },
	{ time: '14:30' },
	{ time: '15:00' },
	{ time: '15:30' },
	{ time: '16:00' }
];

export const PLANNER_EVENTS: TEvent[] = [
	{
		id: '1',
		title: 'Surgery',
		startTime: '11:00',
		endTime: '12:30',
		assignee: 'Haico de Gast',
		initials: 'HG',
		type: 'surgery',
		color: 'orange',
		columnId: 'room1'
	},
	{
		id: '2',
		title: 'Pijnspecialist',
		startTime: '11:00',
		endTime: '13:30',
		assignee: 'Diane Lane',
		initials: 'DL',
		type: 'consultation',
		color: 'green',

		columnId: 'room1'
	},
	{
		id: '3',
		title: 'Pijnspecialist',
		startTime: '11:30',
		endTime: '13:30',
		assignee: 'Diane Lane',
		initials: 'DL',
		type: 'consultation',
		color: 'yellow', // Using yellow/gold for variety
		columnId: 'misc'
	},
	{
		id: '4',
		title: 'Pijnspecialist',
		startTime: '11:30',
		endTime: '13:30',
		assignee: 'Diane Lane',
		initials: 'HG',
		type: 'consultation',
		color: 'green',
		columnId: 'finance'
	},
	{
		id: '5',
		title: 'Pijnspecialist',
		startTime: '16:00',
		endTime: '00:00',
		assignee: 'Diane Lane',
		initials: 'HG',
		type: 'consultation',
		color: 'green',
		columnId: 'finance'
	}
];

export const ROSTER_DATA = [
	{
		id: 1,
		name: 'Elijah Oyin',
		initials: 'EO',
		hours: '1158.0hrs',
		overtime: '38.0hrs',
		dateRange: 'Jan 8 - Jan 15',
		status: 'On leave',
		availability: [
			{ day: 'm', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'di', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'w', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'do', status: 'busy', color: '#F55300', bg: '#FFEFE7' },
			{ day: 'vr', status: 'busy', color: '#F55300', bg: '#FFEFE7' }
		]
	},
	{
		id: 2,
		name: 'Diane Lane',
		initials: '',
		hours: '1158.0hrs',
		overtime: '38.0hrs',
		dateRange: 'Jan 12 - Jan 28',
		status: 'On leave',
		availability: [
			{ day: 'm', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'di', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'w', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'do', status: 'busy', color: '#F55300', bg: '#FFEFE7' },
			{ day: 'vr', status: 'busy', color: '#F55300', bg: '#FFEFE7' }
		]
	},
	{
		id: 3,
		name: 'Elijah Oyin', // Duplicate name in image
		initials: 'EO',
		hours: '1158.0hrs',
		overtime: '38.0hrs',
		dateRange: 'Jan 12 - Jan 20',
		status: 'On leave',
		availability: [
			{ day: 'm', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'di', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'w', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'do', status: 'busy', color: '#F55300', bg: '#FFEFE7' },
			{ day: 'vr', status: 'busy', color: '#F55300', bg: '#FFEFE7' }
		]
	},
	{
		id: 4,
		name: 'Haico De Gast',
		initials: '',
		hours: '1158.0hrs',
		overtime: '38.0hrs',
		dateRange: 'Jan 2 - Jan 9',
		status: 'On leave',
		availability: [
			{ day: 'm', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'di', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'w', status: 'available', color: '#37A55C', bg: '#EBFFEF' },
			{ day: 'do', status: 'busy', color: '#F55300', bg: '#FFEFE7' },
			{ day: 'vr', status: 'busy', color: '#F55300', bg: '#FFEFE7' }
		]
	}
];
