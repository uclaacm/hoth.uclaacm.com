import React from 'react';
import { basename } from 'path';
import { graphql, useStaticQuery } from 'gatsby';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography } from '@material-ui/core';
import Img from 'gatsby-image/withIEPolyfill';

import { ReactComponent as Squiggle } from './images/squiggle.svg';

const prizeImageRadius = '50px';
const allPrizes = [
	{
		img: 'best-overall',
		track: 'Best Overall',
		prize: '$ Amazon Gift Card'
	},
	{
		img: 'health-wellness',
		track: 'Health and Wellness',
		prize: ''
	},
	{
		img: 'sustainability',
		track: 'Sustainability',
		prize: ''
	},
	{
		img: 'education',
		track: 'Education',
		prize: ''
	},
	{
		img: 'equity',
		track: 'Equity',
		prize: ''
	},
	{
		img: 'you-do-you',
		track: 'You Do You',
		prize: ''
	}
];

const useStyles = makeStyles({
	prizeGrid: {
		textAlign: 'center',
		paddingBottom: '20px'
	},
	prizeCard: {
		backgroundColor: grey[200],
		borderRadius: '10px',
		height: '100%',
		paddingTop: `${prizeImageRadius}`,
		paddingBottom: '20px',
		position: 'relative',
		zIndex: '-1'
	},
	prizeDescription: {
		paddingBottom: '20px'
	},
	header: {
		fontWeight: 700,
		textDecoration: 'underline',
		fontSize: '1.5em'
	},
	imageBox: {
		'--radius': '50px',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#fafafa',
		border: '6px solid',
		borderColor: grey[200],
		borderRadius: 'var(--radius)',
		display: 'flex',
		justifyContent: 'center',
		marginBottom: `calc(-1 * var(--radius))`,
		width: `calc(2 * var(--radius))`,
		height: `calc(2 * var(--radius))`
	},
	item: {
		fontWeight: 600,
		fontSize: '1em'
	}
});

export default function Prizes() {
	const classes = useStyles();
	const data = useStaticQuery(graphql`
	{
		prizeIcons: allFile(filter: {relativePath: {glob:"prize-icons/*"}}) {
			nodes {
				relativePath
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
		prizeImages: allFile(filter: {relativePath: {glob:"prize-images/*"}}) {
			nodes {
				relativePath
				childImageSharp {
					fixed(height: 128) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	}
	`);
	const iconImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.prizeIcons.nodes) {
		const id = basename(relativePath).split('.')[0];
		iconImageMap.set(id, childImageSharp.fluid);
	}

	const prizeImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.prizeImages.nodes) {
		const id = basename(relativePath).split('.')[0];
		prizeImageMap.set(id, childImageSharp.fixed);
	}
	return (
		<>
			<Container maxWidth='md'>
				<Grid container spacing={3} className={classes.prizeGrid}>
					{allPrizes.map(prize =>
						<Grid item xs={12} sm={6} md={4} key={prize.track}>
							<Box display='flex' justifyContent='center' flexDirection='column'>
								<Box className={classes.imageBox}>
									<Img fluid={iconImageMap.get(prize.img)} style={{ height: '70%', width: '70%' }} objectFit = "contain"/>
								</Box>
								<Box className={classes.prizeCard}>
									<Typography variant='h6' component='h3'>
										{prize.track}
									</Typography>
									<Box paddingX='20%'>
										<Squiggle />
									</Box>
									<Box className={classes.prizeDescription}>
										<Typography style={{ color: '#a1a1a1',
											fontSize: '14px',
											textTransform: 'uppercase' }}>
											prize
										</Typography>
										<Typography style={{ paddingLeft: '10px', paddingRight: '10px' }}>
											{prize.prize}
										</Typography>
									</Box>
									<Img fixed={prizeImageMap.get(prize.img)} style={{ height: '128px' }} />
								</Box>
							</Box>
						</Grid>)}
				</Grid>
			</Container>
		</>
	);
}
