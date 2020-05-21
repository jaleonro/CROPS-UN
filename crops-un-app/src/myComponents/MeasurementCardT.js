import React from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import WbSunnyIcon from '@material-ui/icons/WbSunny';
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

export default function MeasurementCardT(props) {
  const classes = useStyles();
  return (
    <div>
    <Card>
    <CardHeader color="danger" stats icon>
      <CardIcon color="danger">
        <WbSunnyIcon/>
      </CardIcon>
      <p className={classes.cardCategory}>TEMPERATURA</p>
      <h1 className={classes.cardTitle}>29°</h1>
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