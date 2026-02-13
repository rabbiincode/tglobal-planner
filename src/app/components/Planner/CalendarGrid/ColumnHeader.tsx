import { Box, Text } from '@chakra-ui/react';

interface ColumnHeaderProps {
	label: string;
	bg?: string;
	borderColor?: string;
	color?: string;
}

export const ColumnHeader = ({
	label,
	bg = 'brandSurfaceLight',
	borderColor = 'brandMainBorder',
	color = 'brandGrey'
}: ColumnHeaderProps) => {
	return (
		<Box
			bg={bg}
			borderRightWidth="1px"
			borderBottomWidth="1px"
			borderColor={borderColor}
			h="full"
			display="flex"
			alignItems="center"
			justifyContent="center"
			py="1.125rem"
			px="0.625rem"
		>
			<Text
				fontSize="sm"
				fontWeight="semibold"
				color={color}
				textAlign="center"
				whiteSpace="normal"
				lineHeight="short"
			>
				{label}
			</Text>
		</Box>
	);
};
