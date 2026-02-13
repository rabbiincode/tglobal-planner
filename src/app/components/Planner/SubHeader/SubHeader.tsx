'use client';
import { usePlannerView } from '@/context/PlannerViewContext';
import { Box, Button, ButtonGroup, HStack, Text } from '@chakra-ui/react';

export const SubHeader = () => {
	const { view, setView } = usePlannerView();
	const BG_LOOKUP = {
		live: 'brandError',
		planner: 'brandBlack'
	};

	const activeBg = (isActive: boolean, btn: 'live' | 'planner') => (isActive ? BG_LOOKUP[btn] : 'white');
	const activeColor = (isActive: boolean) => (isActive ? 'white' : 'brandToggleText');

	return (
		<Box w="full">
			<HStack
				w="full"
				borderWidth="1px"
				borderColor={view === 'live' ? 'brandErrorBorder' : 'brandSecondaryBorder'}
				bg={view === 'live' ? 'brandErrorLight' : 'brandSecondaryLight'}
				rounded="full"
				p={1}
				gap={4}
			>
				<Box
					rounded="full"
					bg="white"
					p="1"
				>
					{/* This would be a tab group in a real app, but for this mockup we'll just show the options */}

					<ButtonGroup
						gap={0}
						rounded="full"
						border="none"
					>
						<Button
							bg={activeBg(view === 'live', 'live')}
							color={activeColor(view === 'live')}
							variant="solid"
							rounded="full"
							px="1.3125rem"
							py={1.5}
							fontSize="xs"
							textTransform="capitalize"
							fontWeight={view === 'live' ? 'bold' : 'medium'}
							maxH="6"
							onClick={() => setView('live')}
						>
							Live
						</Button>
						<Button
							bg={activeBg(view === 'planner', 'planner')}
							color={activeColor(view === 'planner')}
							variant="solid"
							rounded="full"
							px="0.6875rem"
							py={1.5}
							fontSize="xs"
							textTransform="capitalize"
							fontWeight={view === 'planner' ? 'bold' : 'medium'}
							maxH="6"
							onClick={() => setView('planner')}
						>
							Planner
						</Button>
					</ButtonGroup>
				</Box>

				<Text fontSize="xs">Description of the {view}</Text>
			</HStack>
		</Box>
	);
};
