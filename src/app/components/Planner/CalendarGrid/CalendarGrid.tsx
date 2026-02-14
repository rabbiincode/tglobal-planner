"use client";
import { EventCard } from "../EventCard";
import { CalendarCell } from "./CalendarCell";
import { ColumnHeader } from "./ColumnHeader";
import { Calendar, MenuBoard } from "iconsax-reactjs";
import { usePlannerView } from "@/context/PlannerViewContext";
import { Box, Flex, Grid, ScrollArea, VStack } from "@chakra-ui/react";
import { PLANNER_ROOMS, PLANNER_TIME_SLOTS } from "@/lib/planner/constants";

export const CalendarGrid = () => {
  const ROW_HEIGHT = 120;
  const { currentDate, events } = usePlannerView();
  const COLUMNS = PLANNER_ROOMS.length * 4;

  const filteredEvents = events.filter(
    (event) =>
      new Date(event.date).toDateString() === currentDate.toDateString(),
  );

  const getSlotIndex = (time: string) =>
    PLANNER_TIME_SLOTS.findIndex((slot) => slot.time === time);

  const getEventRowSpan = (startTime: string, endTime: string) => {
    const startIndex = getSlotIndex(startTime);
    const endIndex = getSlotIndex(endTime);

    const resolvedEndIndex =
      endIndex === -1 ? PLANNER_TIME_SLOTS.length : endIndex;
    const span = Math.max(
      resolvedEndIndex - (startIndex === -1 ? 0 : startIndex),
      1,
    );

    return { startRow: startIndex === -1 ? 1 : startIndex + 2, rowSpan: span };
  };

  const eventsByRoom = filteredEvents.reduce<
    Record<string, typeof filteredEvents>
  >((acc, event) => {
    if (!acc[event.columnId]) acc[event.columnId] = [];
    acc[event.columnId].push(event);
    return acc;
  }, {});

  const eventGridColumns: Record<string, string> = {};

  PLANNER_ROOMS.forEach((room, roomIndex) => {
    const eventsInRoom = eventsByRoom[room.id] || [];
    const sortedEvents = [...eventsInRoom].sort((a, b) =>
      a.startTime.localeCompare(b.startTime),
    );
    const numEvents = sortedEvents.length;
    if (!numEvents) return;

    const totalColumns = 4;
    const baseSpan = Math.floor(totalColumns / numEvents);
    const remainder = totalColumns % numEvents;
    const spans: number[] = [];
    for (let i = 0; i < numEvents; i++)
      spans.push(baseSpan + (i < remainder ? 1 : 0));

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
      overflow="auto"
      bg="white"
      rounded="xl"
      borderWidth="1px"
      borderColor="brandNeutralOutline"
      maxH="calc(100vh - 220px)"
    >
      <ScrollArea.Root height="calc(100dvh - 19.3125rem)">
        <ScrollArea.Viewport>
          <ScrollArea.Content display="flex" flexDirection="row">
            <VStack border="none" gap={0} justifyContent="start">
              <Box position="sticky" top={0} zIndex={20} h={11} w="full">
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

            <Grid
              templateColumns={`repeat(${COLUMNS}, ${240 / PLANNER_ROOMS.length}px)`}
              templateRows={`44px repeat(${PLANNER_TIME_SLOTS.length}, ${ROW_HEIGHT}px)`}
              width="max-content"
              minWidth={0}
              flex={1}
              position="relative"
            >
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

              {Array.from({ length: COLUMNS * PLANNER_TIME_SLOTS.length }).map(
                (_, index) => {
                  const colIndex = index % COLUMNS;
                  const timeSlotIndex = Math.floor(index / COLUMNS);
                  const roomIndex = Math.floor(colIndex / 4);
                  const room = PLANNER_ROOMS[roomIndex];
                  const timeSlot = PLANNER_TIME_SLOTS[timeSlotIndex];

                  return (
                    <CalendarCell
                      key={`${room.id}-${timeSlot.time}-${colIndex}`}
                      borderLeft={colIndex % 4 === 0}
                      borderRight={colIndex % 4 === 3}
                      borderTop
                      borderBottom
                    />
                  );
                },
              )}

              {filteredEvents.map((event) => {
                const roomIndex = PLANNER_ROOMS.findIndex(
                  (r) => r.id === event.columnId,
                );
                if (roomIndex === -1) return null;

                const { startRow, rowSpan } = getEventRowSpan(
                  event.startTime,
                  event.endTime,
                );

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
                      events={eventsByRoom[event.columnId] || []}
                      date={new Date(event.date).toDateString()}
                    />
                  </Box>
                );
              })}

              {filteredEvents.length === 0 && (
                <Flex
                  position="absolute"
                  top="30%"
                  left="40%"
                  transform="translate(-50%, -50%)"
                  alignItems="center"
                  gap="0.5rem"
                  textAlign="center"
                  fontStyle='italic'
                  fontSize="1.5rem"
                  fontWeight="extrabold"
                  color="#5653FC"
                  letterSpacing="wide"
                  px={4}
                >
                  <Calendar size="25" />
                  No event scheduled for this day
                  <MenuBoard size="25" />
                </Flex>
              )}
            </Grid>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar />
      </ScrollArea.Root>
    </Flex>
  );
};
