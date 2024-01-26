import React from 'react';

import { Container, Typography } from '@mui/material';
import { useSurah } from '../../hooks/useSurah';

export const Surah = () => {
	const { data, loading, error } = useSurah();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<Container>
			{data.ayat.map((surat) => (
				<Typography
					key={surat.nomorAyat}
					component='div'
				>
					{surat.teksArab}
				</Typography>
			))}
		</Container>
	);
};
