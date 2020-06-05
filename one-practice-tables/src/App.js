import React, { useState } from 'react';
import MaterialTable from 'material-table';

export default function App() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [state, setState] = React.useState({
    columns: [
      {
        field: 'url',
        title: 'Avatar',
        headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },
        render: rowData => <img src={rowData.url} alt={rowData.firstname} style={{ width: 50, borderRadius: '50%' }} />
      },
      {
        title: 'ID', field: 'modelID', editable: 'never', headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },
      },
      {
        title: 'FirstName', field: 'firstname', headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },
      },
      {
        title: 'lastname', field: 'surname', headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },
      },
      {
        title: 'Birth Year', field: 'birthYear', type: 'numeric', lookup: { 1: 1990, 2: 1991, 3: 1993, 4: 1994, 5: 1995, 6: 1996, 7: 1997, 8: 1998 }, headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },
      },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 1: 'Raipur', 2: 'Mumbai', 3: 'Nardaha' },
        headerStyle: {
          backgroundColor: '#777',
          color: '#fff'
        },

      },
    ],
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
    ],
  })

  return (
    <MaterialTable
      title="First Example using tables"
      columns={state.columns}
      data={state.data}
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
  );
}
