import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function Workshop(props) {
	return (
		<Grid item xs={12} sm={8} md={6}>
			<ReactPlayer
				style={{ borderRadius: '10px', overflow: 'hidden' }}
				controls={true} width='100%' url={props.youtube} />
			<hgroup style={{ marginTop: '1em' }}>
				<Typography variant='h5' component='h3'>
					{props.title}
				</Typography>
				<Typography variant='subtitle1' component='h4' style={{
					textTransform: 'uppercase',
					fontSize: '1em',
					letterSpacing: '.5px'
				}}>
					{'Taught by: ' + props.author}
				</Typography>
			</hgroup>
			<Typography variant='body1' style={{ paddingTop: '0.5em', paddingBottom: '0.5em' }}>
				{props.description}
			</Typography>
			<Box component="span" display="flex" justifyContent="space-between">
				<Button variant='contained' disableElevation color="secondary" component='a'
					href={props.youtube} target='_blank' rel='noreferrer noopener'
					style={{ textTransform: 'none', padding: '4px 1.5em', maxWidth: 'fit-content' }}>
					Video
				</Button>
				<Button variant='contained' disableElevation color="secondary" component='a'
					href={props.readme} target='_blank' rel='noreferrer noopener'
					style={{ textTransform: 'none', padding: '4px 1.5em', maxWidth: 'fit-content' }}>
					README
				</Button>
				<Button variant='contained' disableElevation color="secondary" component='a'
					href={props.slides} target='_blank' rel='noreferrer noopener'
					style={{ textTransform: 'none', padding: '4px 1.5em', maxWidth: 'fit-content' }}>
					Slides
				</Button>
			</Box>
		</Grid>);
}

export default Workshop;

Workshop.propTypes = {
	title: PropTypes.string.isRequired,
	youtube: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	readme: PropTypes.string.isRequired,
	slides: PropTypes.string.isRequired
};
