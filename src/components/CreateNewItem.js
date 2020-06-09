import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    }
  }));

export default function CreateNewItem() {

    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Create a new item here
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Use this beautiful form for that
          </Typography>
        </Container>

      </div>
    )
}
