import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link as RouterLink}from 'react-router-dom';

export default function Header() {

    const useStyles = makeStyles((theme) => ({
        icon: {
          marginRight: theme.spacing(2),
        }}))
    const classes = useStyles();

    return (
        <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <RouterLink to='/' style={{color: 'inherit', textDecoration: 'none'}}>

            <Typography variant="h6" color="inherit" noWrap>
              Invoices
            </Typography>
            </RouterLink>

          </Toolbar>
        </AppBar>
        </>
    )
}
