import React, { useState, useEffect } from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import WavesIcon from '@material-ui/icons/Waves';
import ScheduleIcon from '@material-ui/icons/Schedule';
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(dashboardStyle);

export default function MeasurementCard3(props) {
  const [value, setValue] = useState(0);

  const classes = useStyles();
  return (
    <div>
    <Card>
    <CardHeader color="primary" stats icon>
      <CardIcon color="primary">
        <WavesIcon/>
      </CardIcon>
      <p className={classes.cardCategory}>HUMEDAD RELATIVA</p>
      <h1 className={classes.cardTitle}>{value}</h1>
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