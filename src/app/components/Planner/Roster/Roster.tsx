'use client';

import { ROSTER_DATA } from '@/lib/planner/constants';
import {
	Avatar,
	Badge,
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Input,
	ScrollArea,
	Separator,
	Stack,
	Tabs,
	Text,
	VStack
} from '@chakra-ui/react';
import { Maximize4, SearchNormal1 } from 'iconsax-reactjs';
import { useState } from 'react';
import { HiOutlineFilter } from 'react-icons/hi';

const AvailabilityDot = ({ label, color, bg }: { status: string; label: string; color?: string; bg?: string }) => {
	return (
		<Flex
			w="18px"
			h="18px"
			borderRadius="full"
			justify="center"
			align="center"
			bg={bg}
		>
			<Text
				fontSize="2xs"
				color={color}
				fontWeight="medium"
			>
				{label}
			</Text>
		</Flex>
	);
};

const RosterCard = ({ item }: { item: (typeof ROSTER_DATA)[0] }) => {
	console.log('item', item);
	return (
		<Box
			borderWidth="1px"
			borderColor="brandNeutralOutline"
			borderRadius="xl"
			p="2"
			bg="white"
			w="full"
		>
			<Stack gap={3}>
				{/* Header: Avatar, Name, Leave Status */}
				<Flex
					justify="space-between"
					align="flex-start"
					gap={2.5}
				>
					{item.initials ? (
						<Avatar.Root
							boxSize="10"
							variant="subtle"
							bg="brandNeutralLight"
							color="brandBlack"
						>
							<Avatar.Fallback name={item.name}>{item.initials || undefined}</Avatar.Fallback>
						</Avatar.Root>
					) : (
						<Box boxSize="10" />
					)}
					<VStack alignItems="start">
						<Text
							fontWeight="semibold"
							fontSize="sm"
							color="brandBlack"
						>
							{item.name}
						</Text>
						<Flex
							wrap="wrap"
							gapX={1}
							gapY={1.5}
							align="center"
						>
							<Badge
								variant="subtle"
								bg="brandNeutralLight"
								color="brandNeutralGrey"
								px={1.5}
								py={1}
								borderRadius="md"
								fontWeight="medium"
								fontSize="2xs"
							>
								{item.hours}
							</Badge>
							<Badge
								variant="subtle"
								bg="brandNeutralLight"
								color="brandNeutralGrey"
								px={1.5}
								py={1}
								borderRadius="md"
								fontWeight="medium"
								fontSize="2xs"
							>
								{item.overtime}
							</Badge>
							<Badge
								variant="subtle"
								bg="brandErrorLight"
								color="brandError"
								px={1.5}
								py={1}
								borderRadius="md"
								fontWeight="medium"
								fontSize="2xs"
							>
								{item.dateRange}
							</Badge>
						</Flex>
					</VStack>

					<VStack
						align="flex-end"
						w="max-content"
						gap={2}
						mt={2}
					>
						<Badge
							colorPalette="red"
							variant="subtle"
							bg="brandErrorLight"
							color="brandError"
							px={2}
							py={1}
							borderRadius="full"
							size="sm"
						>
							● On leave
						</Badge>
						<HStack gap={1}>
							{item.availability.map((day, idx) => (
								<AvailabilityDot
									key={idx}
									status={day.status}
									label={day.day}
									color={day.color}
									bg={day.bg}
								/>
							))}
						</HStack>
					</VStack>
				</Flex>
			</Stack>
		</Box>
	);
};

export const Roster = () => {
	const [activeTab, setActiveTab] = useState('On Leave');

	const tabs = [
		{ name: 'All', count: 32 },
		{ name: 'Available', count: 30 },
		{ name: 'On Leave', count: 4 }
	];

	return (
		<Box
			w="full"
			maxW="345px"
			h="full"
			bg="white"
			rounded="24px"
			borderWidth="2px"
			borderColor="rosterBorder"
			p={5}
		>
			<VStack
				align="stretch"
				gap={0}
			>
				{/* Header */}
				<Flex
					justify="space-between"
					align="center"
				>
					<HStack gap={3}>
						<Icon
							as={Maximize4}
							boxSize={5}
							color="#6C7278"
							// transform="rotate(45deg)"
						/>
						<Separator
							orientation="vertical"
							height="8"
						/>
						<Text
							fontSize="lg"
							fontWeight="bold"
							color="rosterHeader"
						>
							Roster
						</Text>
					</HStack>
					{/* Expand Icon - The design shows two arrows pointing out. Maximize might work. */}
				</Flex>
				<Separator
					mt={6}
					// orientation="vertical"
					height="1"
				/>
				{/* Search & Filter */}
				<HStack
					my={5}
					gap={2}
				>
					<Box
						pos="relative"
						flex={1}
					>
						<Input
							placeholder="Search"
							borderRadius="lg"
							borderColor="brandNeutralOutline"
							bg="white"
							_placeholder={{ color: 'brandNeutralGrey' }}
							pl={10}
							h="10"
						/>
						<Box
							pos="absolute"
							left={3}
							top="50%"
							transform="translateY(-50%)"
							color="brandNeutralGrey"
						>
							<SearchNormal1 size="18" />
						</Box>
					</Box>
					<Button
						variant="outline"
						borderColor="brandNeutralOutline"
						color="brandNeutralGrey"
						borderRadius="lg"
						h="11"
						w="11"
						p={0}
					>
						<HiOutlineFilter />
					</Button>
				</HStack>

				{/* Tabs */}
				<Tabs.Root
					lazyMount
					unmountOnExit
					defaultValue="tab-1"
					onValueChange={(e) => setActiveTab(e.value)}
					value={activeTab}
				>
					<Tabs.List>
						{tabs.map((tab, i) => {
							const isActive = activeTab === tab.name;
							return (
								<Tabs.Trigger
									value={tab.name}
									key={tab.name}
								>
									<HStack
										gap={2}
										flexShrink={0}
									>
										<Text
											color={isActive ? 'brandSecondary' : 'brandNeutralGrey'}
											fontWeight={isActive ? 'bold' : 'normal'}
										>
											{tab.name}
										</Text>
										<Badge
											borderRadius="full"
											px={2}
											bg={isActive ? 'brandSecondaryLight' : 'brandNeutralLight'}
											color={isActive ? 'brandSecondary' : 'brandNeutralGrey'}
										>
											{tab.count}
										</Badge>
									</HStack>
								</Tabs.Trigger>
							);
						})}
					</Tabs.List>
					<Tabs.Content value={tabs[0].name}>Tab 1: Content</Tabs.Content>
					<Tabs.Content value={tabs[1].name}>Tab 2: Content</Tabs.Content>
					<Tabs.Content value={tabs[2].name}>
						{' '}
						<ScrollArea.Root height="calc(100vh - 490px)">
							<ScrollArea.Viewport>
								<ScrollArea.Content textStyle="sm">
									<VStack
										mt={5}
										gap={4}
										align="stretch"
									>
										{ROSTER_DATA.map((item, idx) => (
											<RosterCard
												key={item.id + idx}
												item={item}
											/>
										))}
									</VStack>
								</ScrollArea.Content>
							</ScrollArea.Viewport>
							<ScrollArea.Scrollbar />
						</ScrollArea.Root>
					</Tabs.Content>
				</Tabs.Root>

				{/* List */}
			</VStack>
		</Box>
	);
};
