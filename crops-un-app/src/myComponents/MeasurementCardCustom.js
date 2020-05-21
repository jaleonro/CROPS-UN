import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import OpacityIcon from '@material-ui/icons/Opacity';

const useStyles = makeStyles({
  root: {
    minWidth: 275,      
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  header: {
    background: '#3f51b5',
    color: 'White',
    textAlign: 'center',    
  },
  title: {
    fontSize: 14,    
  },
  waterIcon: {
    fontSize: 40,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function MeasurementCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} 
      action={        
        <OpacityIcon className={classes.waterIcon}></OpacityIcon>        
      }
      title="HUMEDAD"/>      
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.value}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>

    </Card>
  );
}
