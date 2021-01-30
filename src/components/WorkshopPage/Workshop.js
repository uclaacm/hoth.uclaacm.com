import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';

function Workshop(props) {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid key={props.title} item xs={12} sm={8} md={6}
			style={{
				paddingRight: theme.spacing(isSmall ? 4 : 8)
			}}>
			<ReactPlayer
				style={{ borderRadius: '10px', overflow: 'hidden' }}
				controls={true} width='100%' url={props.url} />
			<hgroup>
				<Typography variant='h5' component='h5' style={{ paddingTop: '0.5em' }}>
					{props.title}
				</Typography>
				<Typography variant='h6' component='h6' style={{ paddingTop: '0.5em' }}>
					{'Taught by: ' + props.author}
				</Typography>
			</hgroup>
			<Typography variant='body1' style={{ paddingTop: '0.5em', paddingBottom: '0.5em' }}>
				{props.description}
			</Typography>
			<Button variant='contained' disableElevation color="secondary" component='a'
				href={props.url} target='_blank' rel='noreferrer noopener'
				style={{ textTransform: 'none', padding: '4px 1.5em', maxWidth: 'fit-content' }}>
				See Video
			</Button>
		</Grid>);
}

export default Workshop;

Workshop.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
