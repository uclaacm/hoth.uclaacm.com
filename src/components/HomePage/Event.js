import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
	name: {
		color: theme.palette.secondary.main,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	subtitle: {
		fontWeight: theme.typography.fontWeightMedium,
		color: '#858585',
		display: 'flex',
		alignItems: 'center',
		marginTop: '1ex',
		'& > :nth-child(1)': {
			marginRight: '1em'
		},
		[theme.breakpoints.up('sm')]: {
			'& > :nth-child(1)': {
				marginRight: '1.5em'
			}
		}
	},
	description: {
		[theme.breakpoints.up('md')]: {
			paddingTop: 0,
			paddingLeft: '2.75em'
		}
	}
}));

function Event({ name, subtitles, description }) {
	const classes = useStyles();

	const renderSubtitle = [];
	const chunkSize = 2;

	// split subtitles array into chunks of 2 (only two items should be shown on the same line of any subtitle)
	for (let i = 0; i < subtitles.length; i += chunkSize) {
		const subtitleChunk = subtitles.slice(i, i + chunkSize);
		const renderChunk = subtitleChunk.map((subtitle, index) => {
			return (
				<Typography variant='body2' key={`${name}-subtitle-${index}`}>
					{subtitle}
				</Typography>);
		});
		renderSubtitle.push(
			<Box className={classes.subtitle}>
				{renderChunk}
			</Box>
		);
	}

	return (
		<Grid container spacing={1}>
			<Grid item sm={12} md={4}>
				<Typography component='h3' variant='subtitle1' className={classes.name}>
					{name}
				</Typography>
				{renderSubtitle}
				{/* <Box className={classes.subtitle}>
					<Typography component='time' variant='body2'>
						{subtitle[0]}
					</Typography> :
					<Typography variant='body2'>
						{subtitle[1]}
					</Typography>
				</Box>
				{subtitle.length}
				<Box className={classes.subtitle}>
					<Typography component='span' variant='body2'>
						{location}
					</Typography>
				</Box> */}
			</Grid>
			<Grid item sm={12} md={8}>
				<Typography variant='body1' className={classes.description}>
					{description}
				</Typography>
			</Grid>
		</Grid>
	);
}

Event.propTypes = {
	name: PropTypes.string.isRequired,
	// startTime: PropTypes.instanceOf(Date),
	// duration: PropTypes.string.isRequired,
	// location: PropTypes.string.isRequired,
	subtitles: PropTypes.array.isRequired,
	description: PropTypes.string.isRequired
};

export default Event;
