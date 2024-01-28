import React, { useEffect, useState } from 'react';
import { Skeleton, Grid, Typography, Paper, Badge, Stack } from '@mui/material';

import { experimentalStyled as styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { MenuBook } from '@mui/icons-material';
import axios from 'axios';
import useQuran from '../../hooks/useQuran';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export const Tab_Surah = () => {
	const { data, loading, error } = useQuran();

	return (
		<>
			{loading ? (
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{data.map((surat, index) => (
						<Grid
							key={surat.nomor}
							item
							xs={2}
							sm={4}
							md={4}
						>
							<Item>
								<Stack
									direction={'row'}
									spacing={2}
								>
									<Skeleton
										variant='circular'
										width={40}
										height={40}
									/>
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
							</Item>
						</Grid>
					))}
				</Grid>
			) : (
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{data.map((surat, index) => (
						<Grid
							key={surat.nomor}
							item
							xs={2}
							sm={4}
							md={4}
						>
							<Link
								to={'surat/' + surat.nomor}
								style={{ textDecoration: 'none' }}
							>
								<Item>
									<Stack
										direction={'row'}
										spacing={2}
									>
										<Badge
											badgeContent={surat.nomor}
											color='error'
											max={100000}
										>
											<MenuBook color='action' />
										</Badge>
										<Stack
											width={'100%'}
											direction={'column'}
											justifyContent='flex-end'
											alignItems='flex-end'
										>
											<Typography component={'h2'}>{surat.namaLatin + ' - ' + surat.nama}</Typography>
											<Typography component={'p'}>{`(${surat.arti})`}</Typography>
										</Stack>
									</Stack>
								</Item>
							</Link>
						</Grid>
					))}
				</Grid>
			)}
		</>
	);
};
