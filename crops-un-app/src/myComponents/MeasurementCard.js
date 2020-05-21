import React from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import OpacityIcon from '@material-ui/icons/Opacity';
import ScheduleIcon from '@material-ui/icons/Schedule';
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";

var styles = {
  ...dashboardStyle,  
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(dashboardStyle);

export default function MeasurementCard(props) {
  const classes = useStyles();
  return (
    <div>
    <Card>
    <CardHeader color="info" stats icon>
      <CardIcon color="info">
        <OpacityIcon/>
      </CardIcon>
      <p className={classes.cardCategory}>HUMEDAD</p>
      <h1 className={classes.cardTitle}>789</h1>
    </CardHeader>
    <CardFooter stats>
      <div className={classes.stats}>
        <ScheduleIcon/>
        14:00:00
      </div>
    </CardFooter>
  </Card>
    </div>
  );
}