import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import SlideshowIcon from '@material-ui/icons/Slideshow';

const useStyles = makeStyles(theme => ({
	button: {
		textTransform: 'none',
		padding: theme.spacing(1, 3),
		maxWidth: 'fit-content'
	},
	video: {
		borderRadius: '10px',
		overflow: 'hidden'
	},
	title: {
		marginTop: theme.spacing(2)
	},
	author: {
		textTransform: 'uppercase',
		fontSize: '1em',
		letterSpacing: '.5px'
	},
	description: {
		padding: theme.spacing(1, 0)
	},
	icon: {
		marginRight: theme.spacing(0.5)
	}
}));

function Workshop({ title, youtube, author, description, readme, slides }) {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={8} md={6}>
			<ReactPlayer
				className={classes.video} id={'id_' + title.replace(/ /g, '_')}
				controls={true} width='100%' url={youtube} />
			<hgroup className={classes.title}>
				<Typography variant='h5' component='h3'>
					{title}
				</Typography>
				<Typography variant='subtitle1' component='h4' className={classes.author}>
					{'Taught by: ' + author}
				</Typography>
			</hgroup>
			<Typography variant='body1' className={classes.description}>
				{description}
			</Typography>
			<Box component="span" display="flex" justifyContent="space-around">
				<Button variant='text' disableElevation color="secondary" component='a'
					href={youtube} target='_blank' rel='noreferrer noopener'
					className={classes.button}>
					<YouTubeIcon color="secondary" className={classes.icon} />
					Video
				</Button>
				{
					readme !== null &&
					<Button variant='text' disableElevation color="secondary" component='a'
						href={readme} target='_blank' rel='noreferrer noopener'
						className={classes.button}>
						<GitHubIcon color="secondary" className={classes.icon} />
						README
					</Button>
				}
				<Button variant='text' disableElevation color="secondary" component='a'
					href={slides} target='_blank' rel='noreferrer noopener'
					className={classes.button}>
					<SlideshowIcon color="secondary" className={classes.icon} />
					Slides
				</Button>
			</Box>
		</Grid>);
}

Workshop.propTypes = {
	title: PropTypes.string.isRequired,
	youtube: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	readme: PropTypes.string,
	slides: PropTypes.string.isRequired
};

export default Workshop;
