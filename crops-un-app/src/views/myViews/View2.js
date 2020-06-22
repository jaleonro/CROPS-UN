import React from 'react';
import MyNavBar from "myComponents/MyNavBar.js";
import MyChart from "myComponents/MyChart.js";
import MyTable from "myComponents/MyTable.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EcoIcon from '@material-ui/icons/Eco';

import { makeStyles } from '@material-ui/core/styles';
import { whiteColor } from 'assets/jss/material-dashboard-react';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: whiteColor,
    background: '#00acc1',
  },
  title: {
    flexGrow: 1,
  },
  sideBar: {
    background: '#776DF0',
  },  
  topBar:{
    position: "static",     
    background: '#00acc1',    
  },
  ecoIcon: {
    fontSize: 40,
  },
}));

function View2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar className={classes.topBar}>
      <Toolbar>
        <EcoIcon className={classes.ecoIcon}/>
        <Typography variant="h6" className={classes.title}>CROPS UN APP</Typography>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>        
    <Grid container spacing={3}> 
      <Grid item xs={2}>        
        <div className={classes.sideBar} style = {{height:"170vh"}}>
          <MyNavBar style = {{height:"170vh"}} activo = {false}></MyNavBar>
        </div>               
      </Grid>
      <Grid item xs={5}>
      <MyChart/>         
      </Grid>  
      <Grid item xs={5}>      
      <MyTable/>            
      </Grid>  
    </Grid>   
 
  </div>
  );
}

export default View2;

