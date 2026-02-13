'use client';
import { usePlannerView } from '@/context/PlannerViewContext';
import { TEvent } from '@/lib/planner/types';
import { Box, Button, Flex, Popover, Portal, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { EventPopover } from './EventPopover';

export interface EventCardProps {
	title: string;
	timeRange: string;
	assignee: string;
	initials: string;
	color: string; // e.g. "orange", "green"
	events?: TEvent[];
	date?: string;
	seeAllPlacement?: 'left' | 'right';
}

export const EventCard = ({
	title,
	timeRange,
	assignee,
	initials,
	color,
	events = [],
	date = 'Wednesday 31',
	seeAllPlacement = 'right'
}: EventCardProps) => {
	const { setView } = usePlannerView();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Popover.Root
				open={isOpen}
				onOpenChange={(state) => setIsOpen(state.open)}
				// lazyMount
				positioning={{ placement: 'right' }}
			>
				<Portal>
					<Popover.Positioner>
						<Popover.Content
							w="auto"
							bg="transparent"
							shadow="none"
							border="none"
							_focus={{ outline: 'none' }}
						>
							<EventPopover
								date={date}
								events={events}
							/>
						</Popover.Content>
					</Popover.Positioner>
				</Portal>
			</Popover.Root>
			<Box
				borderLeftWidth="4px"
				borderLeftColor={`${color}.400`}
				bg={`${color}.50`}
				borderWidth="1px"
				borderColor={`${color}.200`}
				borderLeftStyle="solid"
				p={2}
				rounded="sm"
				shadow="sm"
				h="full"
				w="full"
				minH="80px"
				_hover={{ shadow: 'md' }}
				transition="all 0.2s"
				cursor="pointer"
				flex={1}
				role="group"
				position="relative"
			>
				<Button
					variant="ghost"
					position="absolute"
					left={seeAllPlacement === 'right' ? '104%' : undefined}
					right={seeAllPlacement === 'left' ? '104%' : undefined}
					bg="brandNeutralLight"
					color="brandNeutralGrey"
					rounded="6px"
					h="7.1875rem"
					w="6.062rem"
					top="50%"
					transform="translateY(-50%)"
					zIndex={5}
					onClick={(e) => {
						e.stopPropagation();
						setIsOpen(true);
					}}
					aria-label="See all events for day"
				>
					See all
				</Button>
				<Flex
					mb={1}
					justify="space-between"
				>
					<Flex
						bg="white"
						w={6}
						h={6}
						rounded="full"
						align="center"
						justify="center"
						borderWidth="1px"
						borderColor={`${color}.200`}
					>
						<Text
							fontSize="2xs"
							color={`${color}.600`}
							fontWeight="bold"
						>
							{initials}
						</Text>
					</Flex>
				</Flex>

				<Text
					fontWeight="bold"
					fontSize="sm"
					lineHeight="shorter"
					mb={0.5}
					color="brandBlack"
					truncate
				>
					{title}
				</Text>
				<Text
					fontSize="xs"
					color="gray.500"
					mb={1}
				>
					{timeRange}
				</Text>
				<Text
					fontSize="xs"
					color={`${color}.600`}
					fontWeight="medium"
					truncate
				>
					{assignee}
				</Text>
			</Box>
		</>
	);
};
