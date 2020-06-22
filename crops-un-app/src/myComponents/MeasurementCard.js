import React, { useState, useEffect } from "react";
import firebase from "firebase";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import OpacityIcon from '@material-ui/icons/Opacity';
import ScheduleIcon from '@material-ui/icons/Schedule';
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(dashboardStyle);


export default function MeasurementCard(props) {
  const [valor, setValor] = useState(0);
  const [time, setTime] = useState('14:00:00');

  useEffect(() => {
    const nameRef = firebase.database().ref('sensor1').limitToLast(1);
    console.log(nameRef);
    nameRef.on('child_added', snapshot => {
      console.log(snapshot.child("sensora").val());
      setValor(snapshot.child("sensora").val());
      var currentdate = new Date();
/*       var datetime = currentdate.getHours() + ":"+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
      setTime(       
        datetime
      ); */
     })
  });

  const classes = useStyles();
  return (
    <div>
    <Card style = {{backgroundColor:'#EFEEF8'}}>
    <CardHeader color="info" stats icon>
      <CardIcon color="info">
        <OpacityIcon/>
      </CardIcon>
      <p className={classes.cardCategory}>HUMEDAD DEL SUELO</p>
      <h1 className={classes.cardTitle}>{valor}</h1>
      <p className={classes.cardCategory}>Valores criticos: Min. 23 - Max. 120 </p>
      <p className={classes.cardCategory}>Estado: OK</p>
    </CardHeader>
    <CardFooter stats>
      <div className={classes.stats}>
        <ScheduleIcon/>
        Ultima medición: {time}  
      </div>       
    </CardFooter>
  </Card>
    </div>
  );
}