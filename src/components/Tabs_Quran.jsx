import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Tabs, Tab, Box, Typography } from '@mui/material';

import { Tab_Surah } from './tabs/Tab_Surah';
import { Tab_Murottal } from './tabs/Tab_Murottal';
import { Tab_Tafsir } from './tabs/Tab_Tafsir';

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
						component={'p'}
						variant='body2'
					>
						{children}
					</Typography>
				</Box>
			)}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function Tabs_Quran() {
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
}
