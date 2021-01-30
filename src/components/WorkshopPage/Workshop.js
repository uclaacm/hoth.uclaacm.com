import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const workshops = [
	{
		type: 'Web Development',
		elements: [
			{
				title: 'Intro to HTML',
				author: 'Eric',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
				url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'
			},
			{
				title: 'Intro to CSS',
				author: 'Chandra',
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
				title: 'Reactive Native',
				author: 'Jakob',
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

function Workshop() {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

	const workshopCards = workshops.map(item =>
		<Grid key={item.type} style={{ paddingBottom: theme.spacing(isSmall ? 4 : 8) }}>
			<Typography
				style={{
					fontWeight: theme.typography.fontWeightMedium,
					paddingBottom: theme.spacing(isSmall ? 4 : 8)
				}}
				variant='h3'
				component='h2'
			>
				{item.type}
			</Typography>

			<Grid container spacing={8} justify='left'>
				{item.elements.map(element => {
					return (
						<Grid key={element.title} item xs={12} sm={8} md={6}
							style={{
								paddingRight: theme.spacing(isSmall ? 4 : 8)
							}}>
							<ReactPlayer controls={true} width='100%' url={element.url} />
							<Typography variant='h4' component='h3' style={{ paddingTop: '0.5em' }}>
								{element.title}</Typography>
							<Typography variant='h5' component='h3' style={{ paddingTop: '0.5em' }}>
								{'Taught by: ' + element.author}</Typography>
							<Typography variant='body1' style={{ paddingTop: '0.5em', paddingBottom: '0.5em' }}>
								{element.description}
							</Typography>
							<Button variant='contained' disableElevation color="secondary" component='a'
								href={element.url} target='_blank' rel='noreferrer noopener'
								style={{ textTransform: 'none', padding: '4px 1.5em', maxWidth: 'fit-content' }}>
								See Video
							</Button>
						</Grid>
					);
				})}
			</Grid>
		</Grid>);

	return (
		<Container maxWidth='lg' style={{ marginBottom: theme.spacing(8) }}>
			<Typography variant='h2' component='h1'
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

export default Workshop;
