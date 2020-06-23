import React from 'react';

import Container from '@material-ui/core/Container';
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

const allPrizes = [
	{
		img: MLHack,
		track: 'Best Machine Learning',
		prize: 'Echo Dot'
	},
	{
		img: DesignHack,
		track: 'Best Design',
		prize: 'Drawing Tablet'
	},
	{
		img: MobileHack,
		track: 'Best Mobile Hack',
		prize: 'Mini Phone Printer'
	},
	{
		img: WebHack,
		track: 'Best Web Hack',
		prize: 'Solar Phone Charger'
	},
	{
		img: GameHack,
		track: 'Best Game Design',
		prize: 'Google Cardboard'
	},
	{
		img: OverallHack,
		track: 'Best Overall Hack',
		prize: 'Mini Projector'
	},
	{
		track: '"You do You"',
		prize: 'Seat Cushion'
	}
];

const TableCell = withStyles({
	root: {
		borderBottom: 'none'
	}
})(MuiTableCell);

const useStyles = makeStyles({
	header: {
		fontWeight: 700,
		textDecoration: 'underline',
		fontSize: '1.5em'
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
	);
}
