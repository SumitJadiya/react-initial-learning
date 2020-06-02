import React, { useReducer } from 'react';
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import reducer from './context/reducer';
import "./App.css"
import { TodoContext } from "./context/TodoContext"
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
