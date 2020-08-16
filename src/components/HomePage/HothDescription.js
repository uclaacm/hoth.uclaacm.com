import React from 'react';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import hothImage1 from '../../images/homepage-carousel/IMG_1914.jpg';
import hothImage2 from '../../images/homepage-carousel/IMG_2030.jpg';
import fbLogo from '../../images/fb_logo.png';

const eventURL = '';

const useStyles = makeStyles(theme => ({
	subtitle: {
		fontSize: '3em',
		fontWeight: theme.typography.fontWeightBold,
		color: '#bbb',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5em'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2em'
		}
	},
	title: {
		textTransform: 'uppercase',
		textAlign: 'center',
		fontSize: '4em',
		fontWeight: theme.typography.fontWeightBold,
		color: theme.palette.primary.main,
		[theme.breakpoints.down('sm')]: {
			fontSize: '3.5em'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2.5em'
		}
	}
}));

export default function HothDescription() {
	const theme = useTheme();
	const classes = useStyles();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Container maxWidth='md' style={{ paddingTop: '40px' }}>
			<hgroup>
				<Typography variant='h2' className={classes.subtitle}>What’s</Typography>
				<Typography variant='h2' className={classes.title} style={{
					paddingBottom: isSmall ? theme.spacing(2) : theme.spacing(8)
				}}>Hack on the Hill?</Typography>
			</hgroup>
			<Grid container spacing={isSmall ? 3 : 8} alignItems='center' justify='center'>
				<Grid item sm={8} md={6}>
					<img src={hothImage1} width='100%' style={{
						borderRadius: '14px'
					}}/>
				</Grid>
				<Grid item sm={10} md={6}>
					<Typography variant='body1' style={{ paddingBottom: isSmall ? theme.spacing(2) : 0 }}>
						Hack on the Hill (HOTH) 7 is a 12-hour,{' '}
						<strong>beginner-friendly</strong>
						{' '}hackathon designed to give beginners a glimpse into what a real
						hackathon would be and feel like.
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={ isSmall ? 3 : 8 } wrap='wrap-reverse' justify='center' alignItems='center'>
				<Grid item sm={10} md={6}>
					<Typography
						variant='body1'
						component='p'
						style={{ paddingBottom: isSmall ? theme.spacing(2) : 0 }}>
						During HOTH, there will be
						{` `}<strong>workshops</strong>,
						{` `}<strong>mentors</strong>, and
						{` `}<strong>amazing prizes</strong>{' '}
						for the best hacks. We will also be providing a selection of
						hardware for hackers to check out and hack with.
					</Typography>
				</Grid>
				<Grid item sm={8} md={6}>
					<img src={hothImage2} width='100%' style={{
						borderRadius: '14px'
					}}/>
				</Grid>
			</Grid>

			{ eventURL === '' ?
				null :
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					width={ isSmall ? '80%' : '40%' }
					margin='0 auto'>
					<Typography variant='body1' style={{
						textAlign: 'center'
					}}>
						Check out our Facebook event to stay tuned for additional updates!
					</Typography>
					<a href={eventURL} target='_blank' rel='noopener noreferrer'>
						<img src={fbLogo} width='30px' style={{
							paddingTop: 20
						}}/>
					</a>
				</Box>
			}

		</Container>
	);
}
