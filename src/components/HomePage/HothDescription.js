import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useUppercase } from '../shared-style';

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
	const uppercase = useUppercase();

	const data = useStaticQuery(graphql`
		query {
			image1: file(relativePath: {eq: "hoth-description/IMG_1914.jpg"}) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			image2: file(relativePath: {eq: "hoth-description/IMG_2030.jpg"}) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			image3: file(relativePath: {eq: "hoth-description/hack_motif_applied.jpg"}) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return (
		<Box component='section' paddingY={{ xs: 8, md: 10 }}>
			<Container maxWidth='md'>
				<hgroup>
					<Typography variant='h2' className={classes.subtitle}>What’s</Typography>
					<Typography variant='h2' className={classNames(classes.title, uppercase.root)} style={{
						paddingBottom: isSmall ? theme.spacing(2) : theme.spacing(8)
					}}>Hack on the Hill?</Typography>
				</hgroup>
				<Grid container spacing={isSmall ? 3 : 8} alignItems='center' justify='center'>
					<Grid item xs={12} sm={8} md={6}>
						<Img fluid={data.image1.childImageSharp.fluid} width='100%' style={{
							borderRadius: '14px'
						}}/>
					</Grid>
					<Grid item sm={10} md={6}>
						<Typography variant='body1' style={{ paddingBottom: isSmall ? theme.spacing(2) : 0 }}>
							Hack on the Hill (HOTH 9) is a{' '}
							<strong>12-hour beginner-friendly</strong>
							{' '}hackathon designed to be your first hackathon experience.
							HOTH 9 will be hybrid this year with the in-person
							portion in Covel Grand Horizon and the virtual portion on the
							{' '}<Link href='https://discord.com/invite/MStu2cnBV9'>Hack Discord</Link>.
						</Typography>
					</Grid>
				</Grid>
				<Grid container spacing={ isSmall ? 3 : 8 } wrap='wrap-reverse' justify='center' alignItems='center'>
					<Grid item sm={10} md={6}>
						<Typography
							variant='body1'
							component='p'
							style={{ paddingBottom: isSmall ? theme.spacing(2) : 0 }}>
							During HOTH, you{'\''}ll get to learn from
							{` `}<strong>workshops</strong>, receive technical help from
							{` `}<strong>mentors</strong>, and meet new people while participating in
							{` `}<strong>fun</strong> social activities.
							There will be <strong>prizes</strong> for the best hacks!
						</Typography>
					</Grid>
					<Grid item xs={12} sm={8} md={6}>
						<Img fluid={data.image2.childImageSharp.fluid} width='100%' style={{
							borderRadius: '14px'
						}}/>
					</Grid>
				</Grid>
				<Grid container spacing={isSmall ? 3 : 8} alignItems='center' justify='center'>
					<Grid item xs={12} sm={8} md={6}>
						<Img fluid={data.image3.childImageSharp.fluid} width='100%' style={{
							borderRadius: '14px'
						}}/>
					</Grid>
					<Grid item sm={10} md={6}>
						<Typography variant='body1' style={{ paddingBottom: isSmall ? theme.spacing(2) : 0 }}>
							Hack on the Hill is an event hosted by ACM Hack.
							A student run organization, Hack&apos;s mission is to help the community
							to apply their creativity and build amazing things with code.
							Check out our
							{' '}<Link href='https://hack.uclaacm.com/'>website</Link>
							{' '}to find out more about our quarterly workshops and other events!
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
