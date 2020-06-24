import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import LinkNoStyle from '../LinkNoStyle/LinkNoStyle';

const useStyles = makeStyles(theme => {
	const menuBarAdaptiveThreshold = theme.breakpoints.values.sm * 1.3;
	return {
		btn: {
			fontFamily: theme.typography.fontFamily,
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
	/* eslint-disable */
	const PoppinLink = ({ to, ...props }) =>
		<LinkNoStyle to={to}>
			<Button fullWidth={isMobile} className={classes.btn} {...props} />
		</LinkNoStyle>;

	const BorderLink = ({ to, ...props }) =>
		<LinkNoStyle to={to}>
			<Button variant='outlined' disabled fullWidth={isMobile} className={classNames(classes.btn, classes.borderBtn)} {...props} />
		</LinkNoStyle>;
	/* eslint-enable */

	const links = [
		{
			name: 'Home',
			to: '/'
		},
		{
			name: 'Schedule',
			to: '/'
		},
		{
			name: 'Prizes',
			to: '/prizes'
		},
		{
			name: 'Gallery',
			to: '/'
		}
	];

	return (
		<>
			{links.map((link, index) =>
				<PoppinLink to={link.to} key={`nav-${index}`}>
					{link.name}
				</PoppinLink>)}
			<BorderLink to='/'>
				Apply
			</BorderLink>
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
