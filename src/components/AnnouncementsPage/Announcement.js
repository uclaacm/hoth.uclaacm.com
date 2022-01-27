import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function Announcement(props) {
    const theme = useTheme();
    return (
        <Container>
            <Typography variant='h4' component='h2' style={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightBold,
				paddingTop: theme.spacing(4)}}>
                HOTH 9 Date
			</Typography>
            <Typography variant='h7' component='h3' style={{
                color: theme.palette.secondary.light,
            }}>
                Posted on: January 27 at 11:59 PM PST
            </Typography>
            <Typography variant='h6' component='h4' style={{
                paddingBottom: theme.spacing(4)
            }}>
                HOTH 9 is set to begin on Saturday, February 26. We look forward to seeing you then!
            </Typography>
        </Container>
    );
}

export default Announcement

Announcement.propTypes = {
	
};