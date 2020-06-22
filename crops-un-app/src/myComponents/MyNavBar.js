import React from "react";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SpeedIcon from '@material-ui/icons/Speed';


import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: 'White',
  },
}));

function MyNavBar(props) {
  const classes = useStyles();  

  const handleClick = (e) => {    
    
  };

  return (
    <div className={classes.root}>
    
    <List component="nav" aria-label="main mailbox folders">
    <Divider />
    <ListItem button id = 'Button1' onClick={handleClick}>
      <ListItemIcon>
        <SpeedIcon />
      </ListItemIcon>
      <Link to='/' className={props.activo ? classes.linkStyle : null}><ListItemText primary="Estado del cultivo"/></Link>
    </ListItem>
    <Divider />
    <ListItem button id = 'Button2' onClick={handleClick}>
      <ListItemIcon>
        <TrendingUpIcon />
      </ListItemIcon>
      <Link to='/resultados' className={props.activo ? null : classes.linkStyle}><ListItemText primary="Resultados" /></Link>
    </ListItem>
    <Divider />
  </List>
  
  </div>
  );
}

export default MyNavBar;