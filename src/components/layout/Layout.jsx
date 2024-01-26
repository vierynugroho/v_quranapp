import React from 'react';
import Container from '@mui/material/Container';
import { Stack, Typography } from '@mui/material';
import Tabs_Quran from '../Tabs_Quran';

export const Layout = () => {
	return (
		<Container maxWidth='lg'>
			<Stack
				direction={'row'}
				spacing={2}
			>
				<Typography
					component={'h1'}
					variant='h1'
				>
					QuranApp
				</Typography>
			</Stack>
			<Stack
				direction={'row'}
				spacing={2}
			>
				<Tabs_Quran />
			</Stack>
		</Container>
	);
};
