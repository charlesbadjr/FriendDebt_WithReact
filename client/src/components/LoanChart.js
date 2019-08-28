import React from 'react';
import {Header, Table } from 'semantic-ui-react';



const LoanChart = ( props ) => (
 
    <div className="loanChart" >
      <Table inverted celled>
                <Table.Header>
                  <Table.Row >
                    <Table.HeaderCell>Payment Made </Table.HeaderCell>
                    <Table.HeaderCell> Principle Paid </Table.HeaderCell>
                    <Table.HeaderCell> Intrest Paid </Table.HeaderCell>
                    <Table.HeaderCell> Payment Total </Table.HeaderCell>
                    <Table.HeaderCell> Running Total </Table.HeaderCell>
                    <Table.HeaderCell> Next Payment Due </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
               
                <Table.Body >
                  <Table.Row > 
                     <Table.Cell > 
                       
                     </Table.Cell> 
                  </Table.Row>  
                </Table.Body>  
              </Table>   
    </div>
)

export default LoanChart;

