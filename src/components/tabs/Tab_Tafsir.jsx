import React from 'react';

import { Skeleton, Grid, Typography, Paper, Badge, Stack } from '@mui/material';
import useQuran from '../../hooks/useQuran';

import { experimentalStyled as styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { MenuBook } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export const Tab_Tafsir = () => {
	const { data, loading, error } = useQuran('surat');
	return (
		<>
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
							to={'tafsir/' + surat.nomor}
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
										<Typography component={'h2'}>
											{loading ? (
												<Skeleton
													animation='wave'
													sx={{ bgcolor: 'grey.900' }}
												/>
											) : (
												surat.namaLatin + ' - ' + surat.nama
											)}
										</Typography>
										<Typography component={'p'}>
											{loading ? (
												<Skeleton
													animation='wave'
													sx={{ bgcolor: 'grey.900' }}
												/>
											) : (
												`(${surat.arti})`
											)}
										</Typography>
									</Stack>
								</Stack>
							</Item>
						</Link>
					</Grid>
				))}
			</Grid>
		</>
	);
};
