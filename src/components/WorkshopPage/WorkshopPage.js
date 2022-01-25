import React from 'react';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import Workshop from './Workshop.js';
import ComingSoon from '../ComingSoon/ComingSoon';

function WorkshopPage() {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Container maxWidth='md' style={{ marginBottom: theme.spacing(8) }}>
			<Typography variant='h3' component='h1'
				style={{
					fontWeight: theme.typography.fontWeightBold,
					paddingTop: theme.spacing(isSmall ? 4 : 8),
					paddingBottom: theme.spacing(isSmall ? 4 : 8)
				}}>
				Workshops
			</Typography>
			<ComingSoon alignment='left'/>
		</Container>
	);
}

export default WorkshopPage;
