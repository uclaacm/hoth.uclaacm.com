import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Announcement from './Announcement';
import data from '../../data/announcements.json';

export default function AnnouncementsPage() {
	const theme = useTheme();

	return (
		<Container maxWidth='md'>
			<Typography variant='h4' component='h1'
				style={{ fontWeight: theme.typography.fontWeightBold,
					paddingTop: theme.spacing(4),
					paddingBottom: theme.spacing(4),
					textAlign: 'center' }}>
			</Typography>
			{data.map(announcement =>
				<>
					<Announcement
						key={announcement.id}
						subject={announcement.subject}
						timestamp={announcement.timestamp}
						body={announcement.body}
					/>
					{announcement.id === data.length ?
						null :
						<Divider
						/>}
				</>)};
		</Container>
	);
}
