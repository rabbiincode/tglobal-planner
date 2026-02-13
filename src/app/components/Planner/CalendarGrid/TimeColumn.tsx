import { Box, Text, VStack } from '@chakra-ui/react';

interface TimeColumnProps {
	times: string[];
	rowHeight?: number | string;
}

export const TimeColumn = ({ times, rowHeight = 100 }: TimeColumnProps) => {
	return (
		<VStack
			gap={0}
			w="full"
			borderRightWidth="1px"
			borderColor="brandNeutralOutline"
		>
			{times.map((time) => (
				<Box
					key={time}
					h={`${rowHeight}px`}
					w="full"
					borderBottomWidth="1px"
					borderColor="brandNeutralOutline"
					p={2}
					bg="white"
				>
					<Text
						fontSize="xs"
						fontWeight="medium"
						color="brandNeutralGrey"
					>
						{time}
					</Text>
				</Box>
			))}
		</VStack>
	);
};
