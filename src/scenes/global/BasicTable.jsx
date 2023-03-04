import * as React from 'react';
import {Table,TableBody, TableCell, TableContainer, TableHead, TableRow, Paper }from '@mui/material';



const BasicTable = (props) => {
  const { tableHeader } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              tableHeader.map((header, index) => {
                return (
                  <TableCell key={index}><b>{header}</b></TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.children}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;