import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import LinkNoStyle from '../LinkNoStyle/LinkNoStyle';

const styles = theme => ({
    btn: {
        fontFamily: theme.typography.fontFamily,
        fontWeight: 500,
    },
});

function ButtonBar(props) {
    const { classes, isMobile } = props;

    const PoppinLink = ({ to, ...props }) =>
			<LinkNoStyle to={to}>
				<Button fullWidth={isMobile} className={classes.btn} {...props} />
            </LinkNoStyle>;
    const BorderLink = ({ to, ...props }) =>
        <LinkNoStyle>
            <Button variant="outlined" fullWidth={isMobile} className={classes.btn} {...props} />
        </LinkNoStyle>

		const links = [
			{
				name: "home",
				to: "/"
			},
			{
				name: "schedule",
				to: "/"
			},
			{
				name: "prizes",
				to: "/"
			},
			{
				name: "gallery",
				to: "/"
			}
		];

    return (
        <React.Fragment>
            {links.map((link) =>
								<PoppinLink to={link.to}>
									{link.name}
								</PoppinLink>
						)}
            <BorderLink to="/">
                Apply
            </BorderLink>
        </React.Fragment>
    )
}

ButtonBar.propTypes = {
	classes: PropTypes.object.isRequired,
	isMobile: PropTypes.bool.isRequired
};

ButtonBar.defaultProps = {
	isMobile: false
};

export default withStyles(styles)(ButtonBar);
