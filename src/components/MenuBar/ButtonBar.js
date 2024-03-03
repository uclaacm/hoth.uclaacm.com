import React from "react"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Link as GatsbyLink } from "gatsby"
import { Link as MUILink } from "@material-ui/core"

import {
	applicationOpen,
	applyDeadline,
	hothStart,
	hothEnd,
} from "../constants.js"

const useStyles = makeStyles(theme => {
	const menuBarAdaptiveThreshold = theme.breakpoints.values.sm * 1.3
	return {
		btn: {
			fontWeight: 500,
		},
		borderBtn: {
			margin: 10,
			color: "#FFFFFF",
			transition: theme.transitions.create(["color", "background"], {
				duration: theme.transitions.duration.complex,
			}),
			"&:hover": {
				background: "#DB99FD",
			},
			[theme.breakpoints.down(menuBarAdaptiveThreshold)]: {
				// mobile
				margin: 0,
			},
		},
	}
})

function ButtonBar({ isMobile }) {
	const classes = useStyles()

	const PoppinLink = ({ ...props }) => (
		<Button
			component={GatsbyLink}
			role="link"
			fullWidth={isMobile}
			className={classes.btn}
			{...props}
		/>
	)

	const BorderLink = ({ ...props }) => (
		<Button
			component={MUILink}
			role="link"
			className={classes.borderBtn}
			style={{ margin: 10, textDecoration: "none" }}
			variant="contained"
			{...props}
			color="secondary"
		/>
	)

	const links = [
		{
			name: "Home",
			to: "/",
		},
		{
			name: "Announcements",
			to: "/announcements",
		},
		{
			name: "Schedule",
			to: "/schedule",
		},
		{
			name: "Workshops",
			to: "/workshops",
		},
		{
			name: "Prizes",
			to: "/prizes",
		},
		{
			name: "Gallery",
			to: "/gallery/hoth-x", // need to update this link to be latest HOTH
		},
	]

	return (
		<>
			{links.map((link, index) => (
				<PoppinLink to={link.to} key={`nav-${index}`}>
					{link.name}
				</PoppinLink>
			))}

			{Date.now() < hothStart.getTime() ? (
				<BorderLink
					disabled={
						Date.now() < applicationOpen.getTime() ||
						Date.now() > applyDeadline.getTime()
					}
					href={"https://forms.gle/VMhdCzMov8RvGUfP8"}
					target="_blank"
				>
					Apply
				</BorderLink>
			) : (
				<BorderLink
					disabled={
						Date.now() < hothStart.getTime() || Date.now() > hothEnd.getTime()
					}
					href="/submissions"
				>
					Submit
				</BorderLink>
			)}
		</>
	)
}

ButtonBar.propTypes = {
	isMobile: PropTypes.bool,
}

ButtonBar.defaultProps = {
	isMobile: false,
}

export default ButtonBar
