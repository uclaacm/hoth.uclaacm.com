import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

import { applicationOpen, applyDeadline } from '../constants.js';

const useStyles = makeStyles(theme => {
	const menuBarAdaptiveThreshold = theme.breakpoints.values.sm * 1.3;
	return {
		btn: {
			fontWeight: 500
		},
		borderBtn: {
			margin: 10,
			transition: theme.transitions.create(['color', 'background'], {
				duration: theme.transitions.duration.complex
			}),
			'&:hover': {
				color: '#FFFFFF',
				background: '#DB99FD'
			},
			[theme.breakpoints.down(menuBarAdaptiveThreshold)]: {
				// mobile
				margin: 0
			}
		}
	};
});

function ButtonBar({ isMobile }) {
	const classes = useStyles();

	const PoppinLink = ({ ...props }) =>
		<Button component={Link} role='link' fullWidth={isMobile} className={classes.btn} {...props} />;

	const BorderLink = ({ ...props }) =>
		<Button
			component={Link}
			role='link'
			className={classes.btn}
			style={{ margin: 10 }}
			variant='contained'
			{...props}
			color='secondary'
		/>;

	const links = [
		{
			name: 'Home',
			to: '/'
		},
		{
			name: 'Announcements',
			to: '/announcements'
		},
		{
			name: 'Schedule',
			to: '/schedule'
		},
		{
			name: 'Workshops',
			to: '/workshops'
		},
		{
			name: 'Prizes',
			to: '/prizes'
		},
		{
			name: 'Gallery',
			to: '/gallery/hoth-8'
		}
	];

	return (
		<>
			{links.map((link, index) =>
				<PoppinLink to={link.to} key={`nav-${index}`}>
					{link.name}
				</PoppinLink>)}
			{
				<BorderLink
					disabled={Date.now() < applicationOpen.getTime() || Date.now() > applyDeadline.getTime()}
					href={'http://links.uclaacm.com/hoth9-application-form'}
					target='_blank'
				>
					Apply
				</BorderLink>
			}
		</>
	);
}

ButtonBar.propTypes = {
	isMobile: PropTypes.bool
};

ButtonBar.defaultProps = {
	isMobile: false
};

export default ButtonBar;
