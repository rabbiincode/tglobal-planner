import { TEvent } from '@/lib/planner/types';
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { IoClose } from 'react-icons/io5';

interface EventPopoverProps {
	date: string;
	events: TEvent[];
	onClose?: () => void;
}

export const EventPopover = ({ date, events, onClose }: EventPopoverProps) => {
	// Group events by start hour
	const groupedEvents = events.reduce(
		(acc, event) => {
			const startHour = event.startTime.split(':')[0] + ':00';
			if (!acc[startHour]) {
				acc[startHour] = [];
			}
			acc[startHour].push(event);
			return acc;
		},
		{} as Record<string, TEvent[]>
	);

	// Sort times
	const sortedTimes = Object.keys(groupedEvents).sort();

	return (
		<Box
			w="320px"
			bg="white"
			rounded="md"
			shadow="lg"
			border="1px solid"
			borderColor="gray.100"
			overflow="hidden"
		>
			<Flex
				justify="space-between"
				align="center"
				p={4}
				borderBottom="1px solid"
				borderColor="gray.100"
			>
				<Text
					fontWeight="bold"
					fontSize="md"
				>
					{date}
				</Text>
				<Box
					as="button"
					cursor="pointer"
					onClick={onClose}
					color="gray.400"
					_hover={{ color: 'gray.600' }}
				>
					<IoClose size={20} />
				</Box>
			</Flex>

			<VStack
				align="stretch"
				gap={4}
				p={4}
				maxH="400px"
				overflowY="auto"
			>
				{sortedTimes.map((time) => (
					<Box key={time}>
						<Text
							fontWeight="bold"
							fontSize="sm"
							mb={2}
						>
							{time}
						</Text>
						<VStack
							align="stretch"
							gap={2}
						>
							{groupedEvents[time].map((event) => (
								<Flex
									key={event.id}
									direction="row"
									bg="white"
									borderWidth="1px"
									borderColor={`${event.color}.400`}
									rounded="md"
									p={2}
									align="start"
									gap={3}
								>
									{/* Initials Circle */}
									<Flex
										shrink={0}
										w={8}
										h={8}
										rounded="full"
										align="center"
										justify="center"
										bg={`${event.color}.50`}
										borderWidth="1px"
										borderColor={`${event.color}.200`}
									>
										<Text
											fontSize="xs"
											fontWeight="bold"
											color={`${event.color}.600`}
										>
											{event.initials}
										</Text>
									</Flex>

									<VStack
										align="start"
										gap={0}
										flex={1}
									>
										<Flex
											justify="space-between"
											w="full"
											align="center"
										>
											<Text
												fontWeight="bold"
												fontSize="sm"
												lineHeight="shorter"
											>
												{event.title}
											</Text>
										</Flex>
										<HStack gap={1}>
											<Text
												fontSize="xs"
												color="gray.500"
											>
												{event.startTime} - {event.endTime}
											</Text>
										</HStack>
										<Text
											fontSize="xs"
											color={`${event.color}.600`}
											fontWeight="medium"
										>
											{event.assignee}
										</Text>
									</VStack>
								</Flex>
							))}
						</VStack>
					</Box>
				))}
			</VStack>
		</Box>
	);
};
