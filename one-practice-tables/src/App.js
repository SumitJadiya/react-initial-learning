import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { Container } from '@material-ui/core';

export default function App() {
  const tableRef = React.createRef();
  const [selectedRow, setSelectedRow] = useState(null);
  const [state, setState] = React.useState({
    columns: [
      {
        field: 'profile_image',
        title: 'Avatar',
        headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },
        render: rowData => <img src={rowData.url} alt={rowData.firstname} style={{ width: 50, borderRadius: '50%' }} />
      },
      {
        title: 'ID', field: 'id', editable: 'never', headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },
      },
      {
        title: 'Name', field: 'employee_name', headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },
      },
      {
        title: 'Salary', field: 'employee_salary', headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },
      },
      {
        title: 'Age', field: 'employee_age', type: 'numeric', headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },
      }/* ,
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 1: 'Raipur', 2: 'Mumbai', 3: 'Nardaha' },
        headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },

      }, */
    ]
    /* ,
    data: [
      { url: 'https://svgsilh.com/svg/659651.svg', modelID: 1, firstname: 'Rup', surname: 'Kumar', birthYear: 3, birthCity: 1 },
      {
        url: 'https://svgsilh.com/svg/659651.svg',
        modelID: 2,
        firstname: 'John ',
        surname: 'wick',
        birthYear: 1,
        birthCity: 3,
      },
      {
        url: 'https://svgsilh.com/svg/659651.svg',
        modelID: 3,
        firstname: 'Sumit ',
        surname: 'Jadiya',
        birthYear: 5,
        birthCity: 2,
      }
    ], */
  })

  return (
    <Container>
      <MaterialTable
        title="First Example using tables"
        columns={state.columns}
        data={
          query =>
            new Promise((resolve, reject) => {
              let url = 'http://dummy.restapiexample.com/api/v1/employees'

              fetch(url)
                .then(response => response.json())
                .then(result => {
                  resolve({
                    data: result.data,
                    page: result.page - 1
                  })
                })
            })
        }
        actions={[
          {
            icon: 'refresh',
            tooltip: 'Refresh Data',
            isFreeAction: true,
            onClick: () => tableRef.current && tableRef.current.onQueryChange(),
          }
        ]}
        options={{
          headerStyle: {
            backgroundColor: '#777',
            color: '#FFF'
          },
          rowStyle: rowData => ({
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
          }),
          selection: true
        }}
        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}

        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowDuplicate: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </Container>
  );
}
