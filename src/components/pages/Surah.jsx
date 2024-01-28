import React, { useEffect, useState } from 'react';
import { Container, Typography, Stack, Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Surah = () => {
	const { nomorSurah } = useParams();
	const [data, setData] = useState({ ayat: [] });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	console.log('https://equran.id/api/v2/surat/' + nomorSurah);

	useEffect(() => {
		axios
			.get('https://equran.id/api/v2/surat/' + nomorSurah)
			.then((response) => {
				setData(response.data.data);
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [nomorSurah]);

	if (loading) {
		return (
			<Container>
				{data.ayat.map((surat) => (
					<Stack
						key={surat.nomorAyat}
						direction={'row'}
						spacing={2}
					>
						<Stack
							width={'100%'}
							direction={'column'}
							justifyContent='flex-end'
							alignItems='flex-end'
						>
							<Skeleton
								width={210}
								height={10}
							/>
							<Skeleton
								width={210}
								height={60}
							/>
						</Stack>
					</Stack>
				))}
			</Container>
		);
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

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
