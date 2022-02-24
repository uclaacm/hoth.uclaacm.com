import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { basename } from 'path';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import GalleryMenu from '../../components/GalleryPage/GalleryMenu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme, isSmall) => ({
	titlegrid: {
		paddingBottom: theme.spacing(isSmall ? 4 : 8),
		display: 'flex',
		flexDirection: 'column'
	},
	winnerimage: {
		borderRadius: '14px',
		marginBottom: '1em'
	},
	winnercategory: {
		textTransform: 'uppercase',
		fontSize: '1em',
		letterSpacing: '.5px'
	},
	winnerdesc: {
		padding: '0.5em 0 1em'
	},
	winnerbutton: {
		textTransform: 'none',
		padding: '4px 1.5em',
		maxWidth: 'fit-content'
	},
	gallerybody: {
		marginBottom: theme.spacing(8)
	},
	gallerygrid: {
		marginBottom: theme.spacing(2)
	},
	gallerytitle: {
		fontWeight: theme.typography.fontWeightBold,
		paddingTop: theme.spacing(isSmall ? 4 : 8),
		paddingBottom: theme.spacing(isSmall ? 4 : 8)
	},
	devpostbutton: {
		textTransform: 'none',
		padding: '4px 1.5em',
		maxWidth: 'fit-content',
		marginTop: '2em'
	}
}));

function Winners({ winners, devpost, hothNames, galleryLinks, hothName }) {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
	const classes = useStyles(theme, isSmall);

	const data = useStaticQuery(graphql`
		{
			winnerImages: allFile(filter: {relativePath:  {regex: "/gallery-winners\/([0-9A-Za-z]+\/?)+/"}}) {
				nodes {
					relativePath
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	`);

	const winnerImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.winnerImages.nodes) {
		const id = basename(relativePath).split('.')[0];
		winnerImageMap.set(id, childImageSharp.fluid);
	}

	const winnerCards = winners.map(item => {
		const image = winnerImageMap.get(item.image);
		return (
			<Grid item key={item.id} xs={12} sm={8} md={6} className={classes.titlegrid} >
				<Img fluid={{ ...image, aspectRatio: 1.5 }} className={classes.winnerimage} />
				<hgroup>
					<Typography variant='h5' component='h2'>{item.title}</Typography>
					<Typography variant='subtitle1' component='h3' className={classes.winnercategory}>
						{item.category}
					</Typography>
				</hgroup>
				<Typography variant='body1' className={classes.winnerdesc}>
					{item.description}
				</Typography>
				<Button variant='contained' disableElevation color="secondary" component='a'
					href={item.link} target='_blank' rel='noreferrer noopener' className={classes.winnerbutton}>
					See Project
				</Button>
			</Grid >
		);
	});

	return (
		<Container maxWidth='md' className={classes.gallerybody}>
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="center"
				className={classes.gallerygrid}
			>
				<Typography variant='h4' component='h1' className={classes.gallerytitle}>
					{hothName} Winners 🎉
				</Typography>
				<GalleryMenu hothNames={hothNames} galleryLinks={galleryLinks} />
			</Grid>
			<Grid container spacing={8} justify='center'>
				{winnerCards}
			</Grid>
			<Box textAlign='center'>
				<Button variant='outlined' disableElevation color="secondary" component='a'
					href={devpost}
					target='_blank' rel='noreferrer noopener'
					className={classes.devpostbutton} >
					See All {hothName} Projects
				</Button>
			</Box>
		</Container>
	);
}

Winners.propTypes = {
	winners: PropTypes.array.isRequired,
	devpost: PropTypes.string.isRequired,
	hothNames: PropTypes.array.isRequired,
	galleryLinks: PropTypes.array.isRequired,
	hothName: PropTypes.string.isRequired
};

export default Winners;
