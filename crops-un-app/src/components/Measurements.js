import React from 'react';
import Button from '@material-ui/core/Button';
import { useFirebaseApp, useFirestoreCollection } from 'reactfire';
import 'firebase/firestore';
import MeasurementCard from './MeasurementCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Measurements() {
  const classes = useStyles();

  const firebaseApp = useFirebaseApp();
  const medicionesRef = firebaseApp.firestore().collection('mediciones');
  const mediciones = useFirestoreCollection(medicionesRef).docs.map(
    d => ({id: d.id, ...d.data()}));

  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>
      <Grid item xs={6}>
        <MeasurementCard></MeasurementCard>
      </Grid>
      <Grid item xs={6}>
        <MeasurementCard></MeasurementCard>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </Grid>
      <Grid item xs={3}>
        <MeasurementCard></MeasurementCard>
      </Grid>
      <Grid item xs={3}>
      <MeasurementCard></MeasurementCard>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </Grid>
    </Grid>
    <div className="Measurements">
    {
      mediciones.map(
        (medicion) => <MeasurementCard value = {medicion.Valor}></MeasurementCard>
      )     
/*       mediciones.map(
        (medicion) => <Button variant="contained" color="primary">
        {medicion.Valor}
        </Button>
      ) */
    }        
    </div>
  </div>
  );
}

export default Measurements;