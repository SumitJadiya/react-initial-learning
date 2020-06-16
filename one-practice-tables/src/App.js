import React, { useReducer } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import TableData from './components/TableData';
import TableForm from './components/TableForm';
import { Container } from '@material-ui/core';
import './App.css';
import { DataContext } from './context/DataContext';
import Reducer from './context/Reducer';

export default function App() {
  const [items, dispatch] = useReducer(Reducer, [])
  return (
    <DataContext.Provider value={{ items, dispatch }}>
      <Container>
        <TableForm />
        <TableData />
      </Container>
    </DataContext.Provider>
  )
}
