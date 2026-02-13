import { StickyNote1 } from '@/app/components/ui/assets/Icons/StickyNote1';
import { Category2, Maximize1, MenuBoard, Note1, Notepad2, Stickynote } from 'iconsax-reactjs';

export const ICON_LOOKUP = {
	home: {
		label: 'Startpagina',
		icon: Category2
	},
	rooster: {
		heading: {
			label: 'Rooster',
			icon: Maximize1
		},
		schedule: {
			label: 'Mijn Rooster',
			icon: Note1
		},
		planner: {
			label: 'Planner',
			icon: Stickynote
		},
		settings: {
			label: 'Instellingen',
			icon: Stickynote
		}
	},
	other: {
		protocols: {
			label: 'My to do Protocols',
			icon: Stickynote
		},
		documentManagement: {
			label: 'Document Management',
			icon: StickyNote1
		},
		departmentNews: {
			label: 'Department News',
			icon: Notepad2
		},
		knowledgeBase: {
			label: 'Knowledge Base',
			icon: MenuBoard
		},
		generalNews: {
			label: 'General News',
			icon: Note1
		}
	}
};
