import { Box, Collapsible, HStack, StackProps, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { LuChevronRight } from 'react-icons/lu';

type TSidebarSectionProps = {
	title: string;
	children?: React.ReactNode;
	headingIcon?: React.ReactNode;
	style?: StackProps;
};

const SidebarSection = ({ title, children, headingIcon, style }: TSidebarSectionProps) => {
	return (
		<Collapsible.Root defaultOpen>
			<VStack
				align="stretch"
				gap={1}
			>
				<Collapsible.Trigger
					asChild
					p="3"
				>
					<HStack justify="space-between">
						<HStack gapX={3}>
							<Box
								color="{colors.base800}"
								w="5"
								h="5"
								display="flex"
								_icon={{ w: 'inherit', h: 'inherit' }}
								alignItems="center"
								justifyContent="center"
							>
								{headingIcon}
							</Box>
							<Text
								fontSize="md"
								fontWeight="bold"
								color="{colors.brandBlack}"
							>
								{title}
							</Text>
						</HStack>

						<Collapsible.Indicator
							transition="transform 0.2s"
							_open={{ transform: 'rotate(90deg)' }}
							color="#7E919F"
						>
							<LuChevronRight />
						</Collapsible.Indicator>
					</HStack>
				</Collapsible.Trigger>
				<Collapsible.Content>
					<VStack
						gap={0}
						align="stretch"
						{...style}
					>
						{children}
					</VStack>
				</Collapsible.Content>
			</VStack>
		</Collapsible.Root>
	);
};

export default SidebarSection;
