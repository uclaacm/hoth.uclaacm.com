import React from 'react';

import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';

export default function AnnouncementsPage() {
	const theme = useTheme();

	return (
		<>
			<Typography variant='h4' component='h1'
				style={{ fontWeight: theme.typography.fontWeightBold,
					// paddingTop: theme.spacing(isSmall ? 4 : 8),
					paddingBottom: theme.spacing(4),
					textAlign: 'center' }}>
				Coming Soon!
			</Typography>
		</>
	);
}
