import {
	Box,
	BoxProps,
	Button,
	HStack,
	PopoverRoot as Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Text,
	VStack
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CalendarCellProps {
	children?: ReactNode;
	showSeeAll?: boolean;
	events?: any[];
	bg?: string;
	borderColor?: string;
	borderLeft?: boolean;
	borderRight?: boolean;
	borderTop?: boolean;
	borderBottom?: boolean;
	style?: BoxProps;
}

export const CalendarCell = ({
	children,
	showSeeAll,
	events = [],
	bg = 'transparent',
	borderColor = 'brandNeutralOutline',
	borderLeft = false,
	borderRight = false,
	borderTop = false,
	borderBottom = false,
	style
}: CalendarCellProps) => {
	const hasEvents = Array.isArray(events) && events.length > 0;

	return (
		<Box
			w="full"
			h="full"
			borderLeftWidth={borderLeft ? '1px' : '0'}
			borderRightWidth={borderRight ? '1px' : '0'}
			borderTopWidth={borderTop ? '1px' : '0'}
			borderBottomWidth={borderBottom ? '1px' : '0'}
			borderColor={borderColor}
			bg={bg}
			position="relative"
			display="flex"
			gap={1}
			role="group"
			{...style}
		>
			{children}

			{showSeeAll && hasEvents && (
				<Popover
					{...({ trigger: 'click', placement: 'bottom' } as any)}
					isLazy
				>
					<PopoverTrigger>
						<Button
							size="xs"
							variant="ghost"
							colorScheme="gray"
							position="absolute"
							right={2}
							top={2}
							display="none"
							zIndex={50}
							_groupHover={{ display: 'inline-flex', zIndex: 50 }}
							_hover={{ bg: 'gray.50' }}
							pointerEvents="auto"
							py={1}
							fontSize="2xs"
						>
							See all
						</Button>
					</PopoverTrigger>

					<PopoverContent
						w="xs"
						_focus={{ boxShadow: 'none' }}
					>
						<PopoverArrow />
						<PopoverHeader>
							<Text fontWeight="bold">Events</Text>
						</PopoverHeader>
						<PopoverBody>
							<VStack
								align="stretch"
								gap={3}
							>
								{events.map((ev: any) => (
									<HStack
										key={ev.id}
										gap={3}
										alignItems="center"
									>
										<Box
											bg="white"
											w={8}
											h={8}
											rounded="full"
											display="flex"
											alignItems="center"
											justifyContent="center"
											borderWidth="1px"
											borderColor={`${ev.color}.200`}
										>
											<Text
												fontSize="xs"
												color={`${ev.color}.600`}
												fontWeight="bold"
											>
												{ev.initials}
											</Text>
										</Box>
										<VStack
											alignItems="flex-start"
											gap={0}
										>
											<Text fontWeight="bold">{ev.title}</Text>
											<Text
												fontSize="sm"
												color="gray.500"
											>
												{ev.assignee}
											</Text>
											<Text
												fontSize="xs"
												color="gray.500"
											>
												{ev.startTime} - {ev.endTime}
											</Text>
										</VStack>
									</HStack>
								))}
							</VStack>
						</PopoverBody>
					</PopoverContent>
				</Popover>
			)}
		</Box>
	);
};
