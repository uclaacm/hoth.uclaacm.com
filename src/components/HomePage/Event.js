import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useUppercase } from '../shared-style';

const useStyles = makeStyles(theme => ({
	name: {
		color: theme.palette.secondary.main,
		fontWeight: 'bold'
	},
	subtitle: {
		fontWeight: theme.typography.fontWeightMedium,
		color: '#858585',
		display: 'flex',
		alignItems: 'center',
		marginTop: '1ex',
		'& > :nth-child(1)': {
			marginRight: '1em',
			[theme.breakpoints.up('sm')]: {
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
	const uppercase = useUppercase();

	const renderSubtitle = [];
	const chunkSize = 2;

	// split subtitles array into chunks of 2 (only two items should be shown on the same line of any subtitle)
	for (let i = 0; i < subtitles.length; i += chunkSize) {
		const subtitleChunk = subtitles.slice(i, i + chunkSize);
		const renderChunk = subtitleChunk.map((subtitle, index) => {
			if (subtitle !== '') {
				return (
					<Typography variant='body2' key={`${name}-subtitle-${index}`}>
						{subtitle}
					</Typography>
				);
			}
			return (
				<></>
			);
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
				<Typography component='h3' variant='subtitle1' className={classNames(classes.name, uppercase.root)}>
					{name}
				</Typography>
				{renderSubtitle}
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
	subtitles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	description: PropTypes.string.isRequired
};

export default Event;
