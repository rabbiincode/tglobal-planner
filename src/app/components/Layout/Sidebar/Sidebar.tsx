import { ICON_LOOKUP } from '@/lib/constants';
import { Box, VStack } from '@chakra-ui/react';
import NavItem from './NavItem';
import SidebarHeader from './SidebarHeader';
import SidebarSection from './SidebarSection';

const Sidebar = () => (
	<Box
		as="aside"
		paddingTop="6"
		maxWidth="16.31rem"
		borderRightWidth="1px"
		borderRightColor="{colors.brandNeutralOutline}"
		height="100vh"
		bg="transparent"
	>
		<VStack
			align="stretch"
			gap="2.3125rem"
			height="100%"
		>
			<SidebarHeader />
			<VStack
				align="stretch"
				gap="2"
				mt={2}
				ml="0.8125rem"
				mr="0.625rem"
			>
				<NavItem
					icon={<ICON_LOOKUP.home.icon />}
					label={ICON_LOOKUP.home.label}
				/>
				<SidebarSection
					style={{
						mx: '4'
					}}
					title={ICON_LOOKUP.rooster.heading.label}
					headingIcon={<ICON_LOOKUP.rooster.heading.icon />}
				>
					{Object.entries(ICON_LOOKUP.rooster)
						.slice(1)
						.map(([key, value]) => (
							<NavItem
								key={key}
								icon={<value.icon />}
								label={value.label}
								showBorder
							/>
						))}
				</SidebarSection>
				{Object.entries(ICON_LOOKUP.other).map(([key, value]) => (
					<NavItem
						key={key}
						icon={<value.icon />}
						label={value.label}
					/>
				))}
			</VStack>
		</VStack>
	</Box>
);

export default Sidebar;
