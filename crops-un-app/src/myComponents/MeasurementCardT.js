import React, { useState, useEffect } from "react";
import firebase from "firebase";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ScheduleIcon from '@material-ui/icons/Schedule';
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(dashboardStyle);


export default function MeasurementCardT(props) {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const nameRef = firebase.database().ref('sensor1').limitToLast(1);
    console.log(nameRef);
    nameRef.on('child_added', snapshot => {
      console.log(snapshot.child("sensorb").val());
      setValor(
        snapshot.child("sensorb").val()
      );
     })
  });


  const classes = useStyles();
  return (
    <div>
    <Card>
    <CardHeader color="danger" stats icon>
      <CardIcon color="danger">
        <WbSunnyIcon/>
      </CardIcon>
      <p className={classes.cardCategory}>TEMPERATURA</p>
      <h1 className={classes.cardTitle}>{valor}</h1>
    </CardHeader>
    <CardFooter stats>
      <div className={classes.stats}>
        <ScheduleIcon/>
        Ultima medición: 14:00:00
      </div>
    </CardFooter>
  </Card>
    </div>
  );
}