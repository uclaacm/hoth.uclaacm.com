import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

function GalleryMenu({ hothNames, galleryLinks }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const menuLinks = hothNames.map((hothName, index) =>
		<MenuItem key={`menu-link-${index}`} onClick={handleClose}>
			<Link to={galleryLinks[index]}>{hothName}</Link>
		</MenuItem>);
	return (
		<>
			<Button
				id='fade-button'
				aria-controls={open ? 'fade-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				variant='text'
				disableElevation
				color='secondary'
				component='a'
			>
				See All HOTHs <ArrowDropDownIcon />
			</Button>
			<Menu
				id='fade-menu'
				MenuListProps={{
					'aria-labelledby': 'fade-button'
				}}
				anchorEl={anchorEl}
				getContentAnchorEl={null}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				transformOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				{menuLinks}
			</Menu>
		</>
	);
}

GalleryMenu.propTypes = {
	hothNames: PropTypes.array.isRequired,
	galleryLinks: PropTypes.array.isRequired
};

export default GalleryMenu;
