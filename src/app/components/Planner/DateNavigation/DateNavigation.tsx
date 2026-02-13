import { Badge, Box, Button, Flex, Group, HStack, IconButton, Text } from '@chakra-ui/react';
import { LuChevronDown, LuChevronLeft, LuChevronRight, LuFilter, LuPlus, LuUsers } from 'react-icons/lu';

export const DateNavigation = () => {
	return (
		<Flex
			justify="space-between"
			align="center"
			w="full"
		>
			{/* Date Display */}
			<HStack gap={2}>
				<HStack
					align="center"
					gap={3}
				>
					<Badge
						color="brandNeutralGrey"
						fontSize="sm"
						bg="transparent"
						borderColor="brandNeutralOutline"
						borderRadius="full"
						variant="outline"
						py="2"
						px="3"
					>
						Mon{' '}
						<Text
							fontWeight="semibold"
							color="brandBlack"
						>
							8
						</Text>
					</Badge>
					<Text
						fontSize="xl"
						fontWeight="semibold"
						color="brandBlack"
					>
						Sept, 2025
					</Text>
				</HStack>
			</HStack>

			{/* Controls */}
			<HStack gap={3}>
				<HStack gap={2}>
					<IconButton
						aria-label="Users"
						variant="outline"
						rounded="md"
						p="0.625rem"
						borderColor="brandNeutralOutline"
						_icon={{ w: '5', h: '5' }}
						w="10"
						h="10"
						color="brandBlack"
					>
						<LuUsers />
					</IconButton>
					<IconButton
						aria-label="Filter"
						variant="outline"
						rounded="md"
						p="0.625rem"
						borderColor="brandNeutralOutline"
						_icon={{ w: '5', h: '5' }}
						w="10"
						h="10"
						color="brandBlack"
					>
						<LuFilter />
					</IconButton>
				</HStack>

				<Group
					gap={0}
					borderWidth="1px"
					borderColor="brandNeutralOutline"
					rounded="md"
					color="brandBlack"
				>
					<IconButton
						aria-label="Previous day"
						variant="ghost"
						size="sm"
						rounded="none"
						roundedStart="md"
					>
						<LuChevronLeft />
					</IconButton>
					<Button
						variant="ghost"
						size="sm"
						fontWeight="medium"
						rounded="none"
						px={4}
						borderXWidth="1px"
						borderColor="brandNeutralOutline"
					>
						Current day
					</Button>
					<IconButton
						aria-label="Next day"
						variant="ghost"
						size="sm"
						rounded="none"
						roundedEnd="md"
					>
						<LuChevronRight />
					</IconButton>
				</Group>

				<Button
					variant="outline"
					size="sm"
					rounded="md"
					color="brandBlack"
					borderColor="brandNeutralOutline"
				>
					<Box
						w={2}
						h={2}
						rounded="full"
						bg="green.500"
					/>
					This day
					<LuChevronDown />
				</Button>

				<Button
					variant="outline"
					size="sm"
					rounded="md"
					color="brandBlack"
					borderColor="brandNeutralOutline"
				>
					Publish All
				</Button>

				<Button
					variant="outline"
					size="sm"
					rounded="md"
					color="brandNeutralGrey"
				>
					<LuPlus /> Lock Shift
				</Button>
			</HStack>
		</Flex>
	);
};
