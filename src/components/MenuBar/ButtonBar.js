import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import LinkNoStyle from '../LinkNoStyle/LinkNoStyle';

const useStyles = makeStyles(theme => {
	return {
		btn: {
			fontFamily: theme.typography.fontFamily,
			fontWeight: 500
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
		<LinkNoStyle>
			<Button variant='outlined' fullWidth={isMobile} className={classes.btn} {...props} />
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
			to: '/'
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
	classes: PropTypes.object.isRequired,
	isMobile: PropTypes.bool.isRequired
};

ButtonBar.defaultProps = {
	isMobile: false
};

export default ButtonBar;
