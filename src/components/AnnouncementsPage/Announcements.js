import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Announcement from './Announcement';
import data from '../../data/announcements.json';

const useStyles = makeStyles(theme => ({
	heading: {
		fontWeight: theme.typography.fontWeightBold,
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		textAlign: 'center'
	}
}));

export default function AnnouncementsPage() {
	const classes = useStyles();

	return (
		<Container maxWidth='md'>
			{data.length !== 0 ?
				null :
				<Typography variant='h4' component='h1' className={classes.heading}>
							Check back here for announcements!
				</Typography>}
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
				</>)}
		</Container>
	);
}
