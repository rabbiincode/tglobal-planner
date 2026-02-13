import { Provider } from '@/app/components/ui/provider';
import { PlannerViewProvider } from '@/context/PlannerViewContext';
import { Grid, GridItem } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<Provider forcedTheme="light">
			<PlannerViewProvider>
				<Grid
					templateColumns="16.31rem calc(100vw - 17.31rem)"
					templateRows="auto 1fr"
					height="100vh"
					overflow="hidden"
				>
					<GridItem rowSpan={2}>
						<Sidebar />
					</GridItem>
					<GridItem>
						<Header />
					</GridItem>
					<GridItem maxW="full">{children}</GridItem>
				</Grid>
			</PlannerViewProvider>
		</Provider>
	);
};

export default Layout;
