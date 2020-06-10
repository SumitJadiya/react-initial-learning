import React, { useReducer } from 'react';
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import reducer from './context/reducer';
import "./App.css"
import { TodoContext } from "./context/TodoContext"
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

const App = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <img src="logo192.png" alt="" className="top-image" />
        <h1>Todo App with Context API</h1>
        <TodoForm />
        <Todos />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
