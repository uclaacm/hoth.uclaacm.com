import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const description = `Hack on the Hill (HOTH) is a 12-hour, beginner-friendly
hackathon designed to give beginners a glimpse into what a real hackathon would
be and feel like. During HOTH, there will be workshops, mentors, and amazing
prizes for the best hacks. We will also be providing a selection of hardware
for hackers to check out and hack with. Learn more about our planned workshops,
prize tracks and hardware below!`;

function HothDescription() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    return (
      <div>
        <Container maxWidth="md">
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={isSmall ? 1 : 6}
          >
            <Grid item sm={9} md={5}>
              <Typography variant={isSmall ? "h4" : "h3"} align={isSmall ? "center" : "right"}>WHAT IS HACK ON THE HILL?</Typography>
            </Grid>
            <Grid item sm={9} md={7}>
              <Typography variant="p">{description}</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}

export default HothDescription;