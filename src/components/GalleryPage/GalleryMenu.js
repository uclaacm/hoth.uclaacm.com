import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'gatsby';

export default function GalleryMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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
				<MenuItem onClick={handleClose}><Link to='/gallery/hoth-8'>HOTH 8</Link></MenuItem>
				<MenuItem onClick={handleClose}><Link to='/gallery/hoth-7'>HOTH 7</Link></MenuItem>
				<MenuItem onClick={handleClose}><Link to='/gallery/hoth-6'>HOTH 6</Link></MenuItem>
				<MenuItem onClick={handleClose}><Link to='/gallery/hoth-5'>HOTH 5</Link></MenuItem>
				<MenuItem onClick={handleClose}><Link to='/gallery/hoth-4'>HOTH 4</Link></MenuItem>
				<MenuItem onClick={handleClose}><Link to='/gallery/hoth-3'>HOTH 3</Link></MenuItem>
				<MenuItem onClick={handleClose}><Link to='/gallery/hoth-2'>HOTH 2</Link></MenuItem>
				<MenuItem onClick={handleClose}><Link to='/gallery/hoth-1'>HOTH 1</Link></MenuItem>
			</Menu>
		</>
	);
}
