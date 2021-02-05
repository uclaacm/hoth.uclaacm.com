import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Workshop from './Workshop.js';

const workshops = [
	{
		type: 'Web Development',
		elements: [
			{
				title: 'Web Dev #1: HTML CSS JS',
				author: 'Jakob Reinwald',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
				url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'
			},
			{
				title: 'Web Dev #2: React',
				author: 'Nareh Agazaryan, Eric Yang',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
				url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'
			},
			{
				title: 'Intro to Something Else',
				author: 'Rick Astley',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
				url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'
			}
		]
	},
	{
		type: 'Mobile Development',
		elements: [
			{
				title: 'Mobile Dev with React Native',
				author: 'Einar Balan',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
				url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'
			},
			{
				title: 'Android Studio',
				author: 'Nareh',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
				url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'
			}
		]
	}
];

function WorkshopPage() {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

	const workshopCards = workshops.map(item =>
		<React.Fragment key={item.type}>
			<Typography
				style={{
					fontWeight: theme.typography.fontWeightMedium,
					paddingBottom: theme.spacing(isSmall ? 2 : 4)
				}}
				variant='h4'
				component='h2'>
				{item.type}
			</Typography>

			<Grid
				container
				style={{
					// This counteracts the negative margin Material-UI places on the Grid component, and
					// hence acts as a small positive margin.
					marginBottom: theme.spacing(isSmall ? 0 : 4),

					// Material-UI's Grid seems to miscalculate the width, causing a spurious page overflow.
					width: 'calc(100% + 56px)'
				}}
				spacing={8}
				justify={isSmall ? 'center' : 'flex-start'}
			>
				{item.elements.map(element => <Workshop key={element.title} {...element} />)}
			</Grid>
		</React.Fragment>);

	return (
		<Container maxWidth='md' style={{ marginBottom: theme.spacing(8) }}>
			<Typography variant='h3' component='h1'
				style={{
					fontWeight: theme.typography.fontWeightBold,
					paddingTop: theme.spacing(isSmall ? 4 : 8),
					paddingBottom: theme.spacing(isSmall ? 4 : 8)
				}}>
				Workshops
			</Typography>
			{workshopCards}
		</Container>
	);
}

export default WorkshopPage;
