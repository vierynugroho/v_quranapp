import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { Tab_Surah } from './tabs/Tab_Surah';
import { Tab_Murottal } from './tabs/Tab_Murottal';
import { Tab_Tafsir } from './tabs/Tab_Tafsir';
import useQuran from '../hooks/useQuran';

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography
						component={'div'}
						variant='body2'
					>
						{children}
					</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Tabs_Quran = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='basic tabs example'
				>
					<Tab
						label='Surah'
						{...a11yProps(0)}
					/>
					<Tab
						label='Tafsir'
						{...a11yProps(1)}
					/>
					<Tab
						label='Murottal'
						{...a11yProps(2)}
					/>
				</Tabs>
			</Box>
			<CustomTabPanel
				value={value}
				index={0}
			>
				<Tab_Surah />
			</CustomTabPanel>
			<CustomTabPanel
				value={value}
				index={1}
			>
				<Tab_Tafsir />
			</CustomTabPanel>
			<CustomTabPanel
				value={value}
				index={2}
			>
				<Tab_Murottal />
			</CustomTabPanel>
		</Box>
	);
};

export default Tabs_Quran;
