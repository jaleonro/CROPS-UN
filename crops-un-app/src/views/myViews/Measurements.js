import React from 'react';
import 'firebase/firestore';
import MeasurementCard from "myComponents/MeasurementCard.js";
import MeasurementCardT from "myComponents/MeasurementCardT.js";
import MeasurementCard3 from "myComponents/MeasurementCard3.js";
import Grid from '@material-ui/core/Grid';

function Measurements() {
 
  return (
    <div>
    <Grid item xs={3}>
    <MeasurementCard></MeasurementCard>
  </Grid>
  <Grid item xs={3}>
    <MeasurementCardT></MeasurementCardT>
  </Grid>
  <Grid item xs={3}> 
    <MeasurementCard3></MeasurementCard3>       
  </Grid>
  <Grid item xs={1}>        
  </Grid>
 
  </div>
  );
}

export default Measurements;

/*
<div className="Measurements">
{
  mediciones.map(
    (medicion) => <MeasurementCard value = {medicion.Valor}></MeasurementCard>
  )     
       mediciones.map(
    (medicion) => <Button variant="contained" color="primary">
    {medicion.Valor}
    </Button>
  ) 
}        
</div>
*/