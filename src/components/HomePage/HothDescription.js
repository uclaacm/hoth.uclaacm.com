import React from 'react';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

import hothImage1 from '../../images/homepage-carousel/IMG_1914.jpg';
import hothImage2 from '../../images/homepage-carousel/IMG_2030.jpg';
import fbLogo from '../../images/fb_logo.png';

const eventURL = 'https://www.facebook.com';

export default function HothDescription() {
	const theme = useTheme();
	// const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Container maxWidth='md' style={{ paddingTop: '40px' }}>
			<Typography variant='h5' style={{
				fontSize: '3em',
				fontWeight: 700,
				color: '#bbbbbb'
			}}>What’s</Typography>
			<Typography variant='h4' style={{
				textTransform: 'uppercase',
				textAlign: 'center',
				fontSize: '4em',
				fontWeight: 700,
				color: theme.palette.primary.main,
				paddingBottom: 80
			}}>Hack on the Hill?</Typography>

			<Grid container spacing={8}>
				<Grid item md={6}>
					<img src={hothImage1} width='100%' style={{
						borderRadius: '14px'
					}}/>
				</Grid>
				<Grid item md={6}>
					<Typography variant="body1" style={{ paddingTop: 20 }}>
						Hack on the Hill (HOTH) 7 is a 12-hour,
						<Box fontWeight='bold' component="span">
							{` beginner-friendly `}
						</Box>
						hackathon designed to give beginners a glimpse into what a real
						hackathon would be and feel like.
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={8}>
				<Grid item md={6}>
					<Typography variant='body1' component='p' style={{ paddingTop: 20 }}>
						During HOTH, there will be
						<Box fontWeight='bold' component="span">{` workshops`}</Box>,
						<Box fontWeight='bold' component="span">{` mentors`}</Box>, and
						<Box fontWeight='bold' component="span">{` amazing prizes `}</Box>
						for the best hacks. We will also be providing a selection of
						hardware for hackers to check out and hack with.
					</Typography>
					<Typography variant='body1' component='p' style={{ paddingTop: '2ex' }}>
						Learn more about our planned workshops, prize tracks and hardware
						below!
					</Typography>
				</Grid>
				<Grid item md={6}>
					<img src={hothImage2} width='100%' style={{
						borderRadius: '14px'
					}}/>
				</Grid>
			</Grid>

			{ eventURL === '' ?
				null :
				<Box display='flex' flexDirection='column' alignItems='center'>
					<Typography variant='body1' style={{
						textAlign: 'center',
						width: '40%',
						paddingTop: 80,
						margin: '0 auto'
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
