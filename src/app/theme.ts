import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
	theme: {
		tokens: {
			colors: {
				brandNeutralLight: { value: '#f0f5fa' },
				brandNeutralOutline: { value: '#D9E5F2' },
				brandNeutralGrey: { value: '#4e5d69' },
				brandSecondary: { value: '#5653fc' },
				brandSecondaryBorder: { value: '#BAB9FE' },
				brandSecondaryLight: { value: '#F0F0FF' },
				brandPrimary: { value: '#009FE3' },
				brandBlack: { value: '#242424' },
				btnBg: { value: '#F6FAFD' },
				base800: { value: '#2D3648' },
				brandErrorBorder: { value: '#FF6669' },
				brandError: { value: '#FF383C' },
				brandErrorLight: { value: '#FFF5F5' },
				brandToggleText: { value: '#7E919F' },
				brandGrey: { value: '#5D636F' },
				brandMainBorder: { value: '#E2E4E9' },
				brandSurfaceLight: { value: '#F3F5F7' },
				rosterBorder: { value: '#F3F4F6' },
				rosterHeader: { value: '#141B34' } // Assuming this is the intended color for the roster border
				// eventBorderOrage: { value: '#E35F00' },
				// eventBorderGreen: { value: '#19C34C' },
				// eventBorderLemon: { value: '#A19712' }
			}
		}
	}
});

export const system = createSystem(defaultConfig, config);
