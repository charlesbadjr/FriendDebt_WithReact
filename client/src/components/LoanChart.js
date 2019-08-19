import React from 'react';
import {Header, Table } from 'semantic-ui-react';


const LoanChart = ( ) => (
 
    <div className="loanChart" >
      <Table inverted celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Payment Date</Table.HeaderCell>
                    <Table.HeaderCell> Principle Due </Table.HeaderCell>
                    <Table.HeaderCell> Intrest Due </Table.HeaderCell>
                    <Table.HeaderCell> Payment Amount </Table.HeaderCell>
                    <Table.HeaderCell> Payment Status </Table.HeaderCell>
                    <Table.HeaderCell> Running Total </Table.HeaderCell>
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

