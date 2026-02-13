import { PLANNER_EVENTS, PLANNER_ROOMS, PLANNER_TIME_SLOTS } from '@/lib/planner/constants';
import { Box, Flex, Grid, ScrollArea, VStack } from '@chakra-ui/react';
import { EventCard } from '../EventCard';
import { CalendarCell } from './CalendarCell';
import { ColumnHeader } from './ColumnHeader';

export const CalendarGrid = () => {
	const ROW_HEIGHT = 120;

	const COLUMNS = (240 * PLANNER_ROOMS.length) / 60;

	const getSlotIndex = (time: string) => {
		return PLANNER_TIME_SLOTS.findIndex((slot) => slot.time === time);
	};

	const getEventRowSpan = (startTime: string, endTime: string) => {
		const startIndex = getSlotIndex(startTime);
		const endIndex = getSlotIndex(endTime);

		if (startIndex === -1) {
			return { startRow: 2, rowSpan: 1 };
		}

		const resolvedEndIndex = endIndex === -1 ? PLANNER_TIME_SLOTS.length : endIndex;
		const span = Math.max(resolvedEndIndex - startIndex, 1);

		return { startRow: startIndex + 2, rowSpan: span };
	};

	const eventsByRoom = PLANNER_EVENTS.reduce(
		(acc, event) => {
			if (!acc[event.columnId]) acc[event.columnId] = [];
			acc[event.columnId].push(event);
			return acc;
		},
		{} as Record<string, typeof PLANNER_EVENTS>
	);

	const eventGridColumns: Record<string, string> = {};

	PLANNER_ROOMS.forEach((room, roomIndex) => {
		const eventsInRoom = eventsByRoom[room.id] || [];
		const sortedEvents = [...eventsInRoom].sort((a, b) => a.startTime.localeCompare(b.startTime));
		const numEvents = sortedEvents.length;
		if (numEvents === 0) return;

		const totalColumns = 4;
		const baseSpan = Math.floor(totalColumns / numEvents);
		const remainder = totalColumns % numEvents;
		const spans: number[] = [];
		for (let i = 0; i < numEvents; i++) {
			spans.push(baseSpan + (i < remainder ? 1 : 0));
		}

		let currentCol = roomIndex * 4 + 1;
		sortedEvents.forEach((event, i) => {
			const span = spans[i];
			eventGridColumns[event.id] = `${currentCol} / span ${span}`;
			currentCol += span;
		});
	});

	return (
		<Flex
			w="full"
			h="full"
			overflowX="auto"
			overflowY="auto"
			bg="white"
			rounded="xl"
			borderBottomRightRadius="0"
			borderBottomLeftRadius="0"
			borderWidth="1px"
			borderColor="brandNeutralOutline"
			maxH="calc(100vh - 220px)"
		>
			<ScrollArea.Root height="calc(100dvh - 19.3125rem)">
				<ScrollArea.Viewport>
					<ScrollArea.Content
						textStyle="sm"
						display="flex"
						flexDirection="row"
					>
						{/* Time Cell */}
						<VStack
							border="none"
							gap={0}
							justifyContent="start"
						>
							<Box
								position="sticky"
								top={0}
								zIndex={20}
								h={11}
								w="full"
							>
								<ColumnHeader
									color="brandSecondary"
									label="Days"
									bg="brandSecondaryLight"
								/>
							</Box>
							<Grid
								templateColumns="120px"
								templateRows={`repeat(${PLANNER_TIME_SLOTS.length}, ${ROW_HEIGHT}px)`}
							>
								{PLANNER_TIME_SLOTS.map((slot) => (
									<Box
										key={slot.time}
										borderRightWidth="1px"
										borderBottomWidth="1px"
										borderColor="brandNeutralOutline"
										p={2}
										px={4}
										color="brandNeutralGrey"
										fontSize="xs"
										fontWeight="semibold"
										position="sticky"
										left={0}
										bg="white"
										zIndex={10}
										display="flex"
										alignItems="flex-start"
										pt={2}
									>
										{slot.time}
									</Box>
								))}
							</Grid>
						</VStack>

						{/* Calendar Grid */}
						<Grid
							templateColumns={`repeat(${(240 * PLANNER_ROOMS.length) / 60}, ${240 / PLANNER_ROOMS.length}px)`}
							templateRows={`44px repeat(${PLANNER_TIME_SLOTS.length}, ${ROW_HEIGHT}px)`}
							width="max-content"
							minWidth={0}
							flex={1}
							position="relative"
						>
							{/* Headers */}
							{PLANNER_ROOMS.map((room) => (
								<Box
									key={room.id}
									position="sticky"
									top={0}
									zIndex={20}
									gridColumn="span 4"
								>
									<ColumnHeader label={room.name} />
								</Box>
							))}

							{/* Background Cells */}
							{(() => {
								const totalCells = COLUMNS * PLANNER_TIME_SLOTS.length;

								return Array.from({ length: totalCells }).map((_, index) => {
									const colIndex = index % COLUMNS;
									const timeSlotIndex = Math.floor(index / COLUMNS);
									const roomIndex = Math.floor(colIndex / 4); // each room spans 4 columns
									const room = PLANNER_ROOMS[roomIndex];
									const timeSlot = PLANNER_TIME_SLOTS[timeSlotIndex];

									const isFirstInRoom = colIndex % 4 === 0;
									const isLastInRoom = colIndex % 4 === 3;

									return (
										<CalendarCell
											key={`${room.id}-${timeSlot.time}-${colIndex}`}
											borderLeft={isFirstInRoom}
											borderRight={isLastInRoom}
											borderTop={true}
											borderBottom={true}
										/>
									);
								});
							})()}

							{/* Events (spanning rows) */}
							{PLANNER_EVENTS.map((event) => {
								const roomIndex = PLANNER_ROOMS.findIndex((room) => room.id === event.columnId);
								const { startRow, rowSpan } = getEventRowSpan(event.startTime, event.endTime);

								if (roomIndex === -1) {
									return null;
								}

								// Get all events for this column (room)
								const columnEvents = PLANNER_EVENTS.filter((e) => e.columnId === event.columnId);

								return (
									<Box
										key={event.id}
										gridColumn={eventGridColumns[event.id]}
										gridRow={`${startRow} / span ${rowSpan}`}
										zIndex={5}
									>
										<EventCard
											title={event.title}
											assignee={event.assignee}
											initials={event.initials}
											timeRange={`${event.startTime} - ${event.endTime}`}
											color={event.color}
											events={columnEvents}
											date="Wednesday 31"
											seeAllPlacement={(function () {
												const pos = eventGridColumns[event.id] || '';
												const start = parseInt(pos.split('/')[0], 10) || 1;
												const spanMatch = pos.match(/span\s+(\d+)/);
												const span = spanMatch ? parseInt(spanMatch[1], 10) : 1;
												const end = start + span - 1;
												return end === COLUMNS ? 'left' : 'right';
											})()}
										/>
									</Box>
								);
							})}
						</Grid>
					</ScrollArea.Content>
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar />
			</ScrollArea.Root>
		</Flex>
	);
};
