import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';

const HeaderProfile = () => {
	return (
		<HStack gapX="3">
			<Box
				w="8"
				h="8"
			/>
			<HStack gapX="9">
				<VStack gapY="0.5">
					<Text
						fontSize="sm"
						fontWeight="semibold"
					>
						Paul Cornelius
					</Text>
					<Text fontSize="xs">Paul@dstrct.com</Text>
				</VStack>
				<Box
					color="{colors.base800}"
					w="5"
					h="5"
					display="flex"
					_icon={{ w: 'inherit', h: 'inherit' }}
					alignItems="center"
					justifyContent="center"
				>
					<LuChevronDown />
				</Box>
			</HStack>
		</HStack>
	);
};

export default HeaderProfile;
