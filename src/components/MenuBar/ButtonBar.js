import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinkNoStyle from '../LinkNoStyle/LinkNoStyle.js';
import { applicationOpen, applyDeadline } from '../constants.js';

const useStyles = makeStyles(theme => {
	return {
		link: {
			fontWeight: 500,
			color: 'black',
			margin: '0 13px',
			position: 'relative',
			textDecoration: 'none',
			'&::after': {
				content: '""',
				position: 'absolute',
				height: '2px',
				width: '100%',
				left: '0px',
				bottom: '-5px',
				backgroundColor: theme.palette.primary.dark,
				transform: 'scaleX(0)',
				transformOrigin: 'bottom right',
				transition: 'transform 0.3s ease-in-out'
			},
			'&:hover::after': {
				transform: 'scaleX(1)',
				transformOrigin: 'bottom left'
			}
		},
		mobileLink: {
			fontFamily: theme.typography.fontFamily,
			fontWeight: 500,
			margin: '25px 0px 0px',
			textAlign: 'center',
			color: 'black'
		},
		applyLink: {
			fontFamily: theme.typography.fontFamily,
			fontWeight: 600,
			backgroundColor: theme.palette.secondary.main,
			margin: props => props.isMobile ? '20px auto 0' : '0 25px 0 0',
			padding: '7px 20px',
			borderRadius: '20px',
			color: 'white',
			'&:hover': {
				backgroundColor: theme.palette.primary.light
			}
		}
	};
});


function ButtonBar({ isMobile }) {
	const classes = useStyles();

	const PoppinLink = ({ to, ...props }) => {
		return !isMobile ?
			<LinkNoStyle to={to} fullWidth={isMobile} className={classes.link} {...props} /> :
			<LinkNoStyle to={to} fullWidth={isMobile} className={classes.mobileLink} {...props} />;
	};

	PoppinLink.propTypes = {
		to: PropTypes.string.isRequired
	};

	const ApplyLink = ({ to, ...props }) => {
		return <LinkNoStyle to={to}>
			<Button fullWidth={isMobile} className={classes.applyLink} {...props} />
		</LinkNoStyle>;
	};

	ApplyLink.propTypes = {
		to: PropTypes.string.isRequired
	};

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
			to: '/gallery/hoth-xi' // need to update this link to be latest HOTH
		}
	];

	return (
		<>
			{links.map((link, index) =>
				<PoppinLink to={link.to} key={`nav-${index}`}>
					{link.name}
				</PoppinLink>)}
			{
				<ApplyLink
					disabled={Date.now() < applicationOpen.getTime() || Date.now() > applyDeadline.getTime()}
					href={'https://forms.gle/VMhdCzMov8RvGUfP8'}
					target='_blank'
				>
					Apply
				</ApplyLink>
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
