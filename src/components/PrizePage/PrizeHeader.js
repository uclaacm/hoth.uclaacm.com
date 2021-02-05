import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function PrizeHeader() {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			<Typography variant='h4' component='h1'
				style={{ fontWeight: theme.typography.fontWeightBold,
					paddingTop: theme.spacing(isSmall ? 4 : 8),
					paddingBottom: theme.spacing(4),
					textAlign: 'center' }}>
				Prize Tracks
			</Typography>
		</>
	);
}
