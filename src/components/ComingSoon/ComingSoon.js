import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';

function ComingSoon(props) {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
	const { alignment } = props;

	return (
		<Typography align={alignment} variant='h5' component='h2'
			style={{
				paddingBottom: theme.spacing(isSmall ? 4 : 8)
			}}>
			Coming Soon...
		</Typography>
	);
}

ComingSoon.propTypes = {
	alignment: PropTypes.string
};

export default ComingSoon;
