import React from 'react';
import { basename } from 'path';
import { graphql, useStaticQuery } from 'gatsby';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Img from 'gatsby-image/withIEPolyfill';

import { ReactComponent as Squiggle } from './images/squiggle.svg';

const prizeImageRadius = '50px';
const allPrizes = [
	{
		img: 'overall',
		track: 'Best Overall',
		prize: '$275 Amazon Gift Card'
		// caption: '1 Echo Studio'
	},
	{
		img: 'web',
		track: 'Best Web',
		prize: '$125 Amazon Gift Card'
		// caption: '1 Massage Gun'
	},
	{
		img: 'mobile',
		track: 'Best Mobile',
		prize: '$125 Amazon Gift Card'
		// caption: '4 Yeti Mugs'
	},
	{
		img: 'game',
		track: 'Best Game',
		prize: '$125 Amazon Gift Card'
		// caption: '4 Laptop Stands'
	},
	{
		img: 'ie',
		track: 'Best in Intersectional Environmentalism',
		prize: '$125 Amazon Gift Card'
		// caption: '4 Mini Phone Printers'
	},
	{
		img: 'beg',
		track: 'Best Beginner',
		prize: '$125 Amazon Gift Card'
		// caption: '4 Butt Cushions'
	}
];

const useStyles = makeStyles(theme => ({
	description: {
		padding: theme.spacing(1, 0)
	},
	prizeGrid: {
		textAlign: 'center',
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(15)
	},
	prizeCard: {
		backgroundColor: grey[200],
		borderRadius: '10px',
		height: '100%',
		paddingTop: `${prizeImageRadius}`,
		paddingBottom: theme.spacing(3),
		position: 'relative',
		zIndex: '-1'
	},
	prizeDescription: {
		paddingBottom: theme.spacing(3)
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
}));

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
				<Typography align='center' gutterBottom>
					Below are the total prize amounts for each category :)
				</Typography>
				{/* <Typography align='center' gutterBottom>
					Due to current restrictions with the CS Department we are unable
					to give the actual prizes, so we have left some recommendations
					that your team can buy when you win 😎
				</Typography> */}
				<Grid container spacing={3} className={classes.prizeGrid}>
					{allPrizes.map(prize =>
						<Grid item xs={12} sm={6} md={4} key={prize.track}>
							<Box display='flex' justifyContent='center' flexDirection='column'>
								<Box className={classes.imageBox}>
									<Img fluid={iconImageMap.get(prize.img)}
										style={{ height: '70%', width: '70%' }}
										objectFit = "contain"
									/>
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
									{/* <Img
										fixed={prizeImageMap.get(prize.img)}
										style={{
											height: '128px',
											borderRadius: '8px',
											marginBottom: '16px'
										}}/>
									<Typography style={{ color: '#a1a1a1',
										fontSize: '14px',
										textTransform: 'uppercase' }}
									>
										which can buy
									</Typography>
									<Typography>
										{prize.caption}
									</Typography> */}
								</Box>
							</Box>
						</Grid>)}
				</Grid>
			</Container>
		</>
	);
}
