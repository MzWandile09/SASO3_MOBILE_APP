// src/components/common/ApplySection.js
import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  useMediaQuery,
} from '@mui/material';
import {makeStyles} from '@mui/styles';
import tutImage from '../../assets/images/tut_logo.jpg';

const useStyles = makeStyles(theme => ({
  heroSection: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${tutImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.palette.common.white,
    padding: theme.spacing(8, 0),
  },
  contentWrapper: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: theme.spacing(4),
  },
  applyButton: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 6),
    fontSize: '1.1rem',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  hashtagSection: {
    marginTop: theme.spacing(4),
    color: theme.palette.grey[300],
  },
  divider: {
    borderColor: 'rgba(255,255,255,0.3)',
    width: '60%',
  },
}));

export default function ApplySection() {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <div className={classes.heroSection}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={8}>
            <div className={classes.contentWrapper}>
              <Typography variant="h2" component="h1" gutterBottom>
                Apply Now
              </Typography>

              <Typography variant="h5" component="h2" gutterBottom>
                We are launching fully online programmes, see if you qualify!
              </Typography>

              {/* Moved hr styling to a CSS class */}
              <hr className={classes.divider} />

              <Button
                variant="contained"
                className={classes.applyButton}
                size={isMobile ? 'medium' : 'large'}>
                Get Started
              </Button>

              <div className={classes.hashtagSection}>
                <Typography variant="body2">
                  Tshwane University of Technology - Where knowledge works.
                </Typography>
                <Typography variant="caption">
                  #FutureReady #InnovationDriven #TUTExcellence
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
