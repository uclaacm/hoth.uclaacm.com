import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const styles = {
	icon: {
		width: '30px'
	}
};

function IconLink({ classes, icon: Icon, ...props }) {
	return (
		<IconButton component='a' {...props}>
			<Icon className={classes.icon} />
		</IconButton>
	);
}

IconLink.propTypes = {
	classes: PropTypes.object.isRequired,
	icon: PropTypes.elementType.isRequired,

	// Forwarded to the underlying <a> element.
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	role: PropTypes.string,
	target: PropTypes.string,
	rel: PropTypes.string
};

IconLink.defaultProps = {
	// Identify this element as a link to assistive technologies, rather than a
	// button (default behavior of IconButton).
	role: 'link',
	// Open link in a new tab.
	target: '_blank',
	// Protect against certain security/privacy attacks. See
	// https://web.dev/external-anchors-use-rel-noopener/.
	rel: 'noopener noreferrer'
};

export default withStyles(styles)(IconLink);
