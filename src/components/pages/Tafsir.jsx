import React from 'react';
import { Container, Typography } from '@mui/material';
import { useTafsir } from '../../hooks/useTafsir';

export const Tafsir = () => {
	const { data, loading, error } = useTafsir();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const url = data.audioFull['01'];
	const parts = url.split('/');
	const namaOrang = parts[parts.length - 2];

	return (
		<Container>
			<Typography
				key={data.nomor}
				component='div'
				variant='h3'
			>
				{data.namaLatin}
			</Typography>
			<Typography
				key={namaOrang}
				component='div'
				variant='subtitle'
			>
				{namaOrang}
			</Typography>
			<audio
				controls
				key={'murottal-' + data.nomor}
			>
				<source
					src={`${data.audioFull['01']}`}
					type='audio/mpeg'
					key={'audio-' + data.nomor}
				/>
			</audio>

			{data.tafsir.map((surat) => (
				<div key={'tafsir-' + data.nomor + '-ayat-' + surat.ayat}>
					<Typography
						key={'ayat-' + surat.ayat}
						component='div'
					>
						Ayat Ke - {surat.ayat}
					</Typography>
					<Typography
						key={'tafsir-ayat-' + surat.ayat}
						component='div'
					>
						{surat.teks}
					</Typography>
				</div>
			))}
		</Container>
	);
};
