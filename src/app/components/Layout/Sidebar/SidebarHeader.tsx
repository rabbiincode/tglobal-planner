import { HStack, IconButton } from '@chakra-ui/react';
import logo from '@root/public/assets/icons/logo.svg';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

type TSidebarHeaderProps = {
	onToggle?: () => void;
};

const SidebarHeader = ({ onToggle }: TSidebarHeaderProps) => (
	<HStack
		justifyContent="space-between"
		pr="0.6875rem"
		pl="1.3125rem"
	>
		<Image
			src={logo}
			alt="Excellent care clinics"
			// width={140}
			// height={36}
		/>
		<IconButton
			aria-label="Toggle sidebar"
			variant="outline"
			size="sm"
			border="1px solid {colors.brandNeutralLight}"
			onClick={onToggle}
			borderRadius="lg"
		>
			<FiMenu
				style={{ flexShrink: 0, width: '1.25rem', height: '1.25rem' }}
				color="#2D3648"
			/>
		</IconButton>
	</HStack>
);

export default SidebarHeader;
