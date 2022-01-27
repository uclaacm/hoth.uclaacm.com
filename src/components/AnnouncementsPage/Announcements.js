import React from 'react';

import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import Container from '@material-ui/core/Container';
import Announcement from './Announcement';

export default function AnnouncementsPage() {
	const theme = useTheme();

	return (
		<Container maxWidth='md'>
			<Typography variant='h4' component='h1'
				style={{ fontWeight: theme.typography.fontWeightBold,
					paddingTop: theme.spacing(4),
					paddingBottom: theme.spacing(4),
					textAlign: 'center' }}>
				Check back here for announcements!
			</Typography>
			<Announcement/>
			<Announcement/>
			<Announcement/>
		</Container>
	);
}
