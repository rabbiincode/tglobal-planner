'use client';
import { Box, HStack, Text } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type TNavItemProps = {
	label: string;
	icon?: ReactNode;
	active?: boolean;
	onClick?: () => void;
	showBorder?: boolean;
};

const NavItem = ({ label, icon, onClick, showBorder }: TNavItemProps) => {
	const pathname = usePathname();
	const active = pathname === label.toLowerCase() || label.toLowerCase() === 'planner';
	return (
		<HStack
			as="button"
			onClick={onClick}
			gap={3}
			align="center"
			p={3}
			width="100%"
			borderLeftWidth={showBorder ? (active ? '2px' : '1px') : '0px'}
			borderLeftColor={showBorder ? (active ? '{colors.brandSecondary}' : '{colors.brandNeutralLight}') : 'transparent'}
			bg="transparent"
			_hover={showBorder ? { bg: active ? '{colors.brandNeutralLight}' : 'gray.50' } : { bg: 'gray.50' }}
		>
			<Box
				color="{colors.base800}"
				w="5"
				h="5"
				display="flex"
				_icon={{ w: 'inherit', h: 'inherit' }}
				alignItems="center"
				justifyContent="center"
			>
				{icon}
			</Box>
			<Text
				fontSize="md"
				fontWeight="medium"
				color={active ? '{colors.brandSecondary}' : '{colors.brandNeutralGrey}'}
			>
				{label}
			</Text>
		</HStack>
	);
};

export default NavItem;
