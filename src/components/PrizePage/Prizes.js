import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';

import DesignHack from './images/design-hack.png';
import GameHack from './images/game-hack.png';
import MLHack from './images/ml-hack.png';
import MobileHack from './images/mobile-hack.png';
import OverallHack from './images/overall-hack.png';
import WebHack from './images/web-hack.png';
import { Typography } from '@material-ui/core';

// import Squiggle from './swiggly.js';
import { ReactComponent as Squiggle } from './images/squiggle.svg';

const prizeImageRadius = '50px';
const allPrizes = [
	{
		img: MLHack,
		track: 'Best ML',
		prize: 'Echo Dot'
	},
	{
		img: DesignHack,
		track: 'Best Design',
		prize: 'Drawing Tablet'
	},
	{
		img: MobileHack,
		track: 'Best Mobile',
		prize: 'Mini Phone Printer'
	},
	{
		img: WebHack,
		track: 'Best Web',
		prize: 'Solar Phone Charger'
	},
	{
		img: GameHack,
		track: 'Best Game',
		prize: 'Google Cardboard'
	},
	{
		img: OverallHack,
		track: 'Best Overall',
		prize: 'Mini Projector'
	},
	{
		track: '“You do You”',
		prize: 'Seat Cushion'
	}
];

const TableCell = withStyles({
	root: {
		borderBottom: 'none'
	}
})(MuiTableCell);

const useStyles = makeStyles({
	prizeGrid: {
		textAlign: 'center'
	},
	prizeCard: {
		backgroundColor: '#e6e6e6',
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
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#fafafa',
		border: '6px solid',
		borderColor: '#e6e6e6',
		borderRadius: prizeImageRadius,
		display: 'flex',
		justifyContent: 'center',
		marginBottom: `calc(-1 * ${prizeImageRadius})`,
		width: `calc(2 * ${prizeImageRadius})`,
		height: `calc(2 * ${prizeImageRadius})`
	},
	prizeBox: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	item: {
		fontWeight: 600,
		fontSize: '1em'
	}
});

export default function Prizes() {
	const classes = useStyles();
	const theme = useTheme();
	const hideImg = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<>
			<Container maxWidth='md'>
				<Grid maxWidth='md' container spacing={3} className={classes.prizeGrid}>
					{allPrizes.map(prize =>
						<Grid item xs={12} sm={4} key={prize.track}>
							<Box className={classes.prizeBox}>
								<Box className={classes.imageBox}>
									<img src={prize.img} height='60px'/>
								</Box>
								<Box className={classes.prizeCard}>
									<Typography variant='h6' component='h3'>
										{prize.track}
									</Typography>
									<Box paddingLeft='20%' paddingRight='20%'>
										<Squiggle />
									</Box>
									<Box className={classes.prizeDescription}>
										<Typography style={{ color: '#a1a1a1', fontSize: '14px' }}>
											PRIZE
										</Typography>
										<Typography>
											{prize.prize}
										</Typography>
									</Box>
									<img height='120px' src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg'/>
								</Box>
							</Box>
						</Grid>)}
				</Grid>
			</Container>
			<Container maxWidth='md'>
				<TableContainer>
					<Table aria-label="prize table">
						<TableHead>
							<TableRow>
								{ hideImg ? null : <TableCell></TableCell> }
								<TableCell align='center' className={classes.header}>Track</TableCell>
								<TableCell align='center' className={classes.header}>Prize</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{allPrizes.map(row =>
								<TableRow key={row.track}>
									{ hideImg ?
										null :
										<TableCell align='center' width='20%'>
											<img src={row.img} height='60px'/>
										</TableCell>
									}
									<TableCell align='center' width='40%' className={classes.item}>
										{row.track}
									</TableCell>
									<TableCell align='center' width='40%' className={classes.item}>
										{row.prize}
									</TableCell>
								</TableRow>)}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		</>
	);
}
