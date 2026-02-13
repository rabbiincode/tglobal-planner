import { Box, HStack, IconButton } from '@chakra-ui/react';
import { Category, Setting2 } from 'iconsax-reactjs';
import { FiBell } from 'react-icons/fi';
import HeaderProfile from './HeaderProfile';

const Header = () => {
	return (
		<HStack
			as="header"
			justify="end"
			gapX="4.5"
			p="6"
		>
			<HStack gap="4.5">
				<IconButton
					borderRadius="lg"
					bgColor="{colors.btnBg}"
					color="{colors.brandPrimary}"
					p="2"
				>
					<Category size="6" />
				</IconButton>
				<IconButton
					borderRadius="lg"
					bgColor="{colors.btnBg}"
					color="{colors.brandBlack}"
					p="2"
				>
					<Setting2 size="6" />
				</IconButton>
				<IconButton
					borderRadius="lg"
					bgColor="{colors.btnBg}"
					color="{colors.brandBlack}"
					p="2"
				>
					<Box
						position="relative"
						h="full"
					>
						<FiBell size="6" />
						<Box
							as="span"
							pos="absolute"
							left="0.625rem"
							top="0"
							w="2"
							h="2"
							bg="red.500"
							borderRadius="full"
						/>
					</Box>
				</IconButton>
			</HStack>
			<HeaderProfile />
		</HStack>
	);
};

export default Header;
