import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import { VictoryChart, VictoryAxis,  VictoryTheme, VictoryLine } from 'victory';

import { dailySalesChart } from "variables/charts.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);


function MyChart() {
  const classes = useStyles();
  return (
    <Card chart>
    <CardHeader color="info">
    <VictoryChart theme={VictoryTheme.material} height={262}>
    <VictoryAxis theme={VictoryTheme.material} label = 'Producción (kg)' dependentAxis style={{axisLabel: {padding: 40}}}/>
    <VictoryAxis theme={VictoryTheme.material} label = 'Estrategia' style={{axisLabel: {padding: 30}}}/>
  <VictoryLine
    style={{
      data: { stroke: "white" },
      parent: { border: "1px solid #ccc"}
    }}
    data={[
      { x: 'E1', y: 20 },
      { x: 'E2', y: 30 },
      { x: 'E3', y: 50 },
      { x: 'E4', y: 40 },
      { x: 'E5', y: 70 },
      { x: 'E6', y: 100 }
    ]}
  />
</VictoryChart>
    </CardHeader>
    <CardBody>
      <h2 className={classes.cardTitle}>Resultados de la estrategia de riego</h2>
    </CardBody>
    <CardFooter chart>
    </CardFooter>
  </Card>  
  );
}

export default MyChart;

