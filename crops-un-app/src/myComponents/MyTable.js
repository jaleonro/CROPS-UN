import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import AccessTime from "@material-ui/icons/AccessTime";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('E1', 159, '06:00', 2, 20),
  createData('E2', 237, '09:00', 3, 30),
  createData('E3', 262, '16:00', 4, 50),
  createData('E4', 305, '17:00', 6, 40),
  createData('E5', 356, '20:00', 9, 70),  
];

export default function MyTable() {
  const classes = useStyles();

  return (
    <Card>
    <CardHeader color="rose">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Estrategia</TableCell>
            <TableCell align="right">Cantidad de agua</TableCell>
            <TableCell align="right">Hora de riego</TableCell>
            <TableCell align="right">Frecuencia de riego</TableCell>
            <TableCell align="right">Producción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardHeader>
    <CardBody>
      <h2 className={classes.cardTitle}>Variables controladas y resultados obtenidos</h2>
    </CardBody>
    <CardFooter chart>
    </CardFooter>
    </Card>
  );
}