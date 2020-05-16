import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const description = `Hack on the Hill (HOTH) is a 12-hour, beginner-friendly
hackathon designed to give beginners a glimpse into what a real hackathon would
be and feel like. During HOTH, there will be workshops, mentors, and amazing
prizes for the best hacks. We will also be providing a selection of hardware
for hackers to check out and hack with. Learn more about our planned workshops,
prize tracks and hardware below!`;

const useStyles = makeStyles({
  desc: {
    textTransform: "uppercase"
  },
});

export default function HothDescription() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const classes = useStyles();

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
              <Typography
                variant="h3"
                className={classes.desc}
                align={isSmall ? "center" : "right"}
                component="h3"
              >
                What is Hack on the Hill?
              </Typography>
            </Grid>
            <Grid item sm={9} md={7}>
              <Typography variant="p">{description}</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}
