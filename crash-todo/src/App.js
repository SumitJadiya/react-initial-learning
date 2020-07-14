import React, { useState } from 'react';
import logo from "./logo.svg"
import "./App.css"

function App() {

  const [newItem, setNewItem] = useState("")
  const [todo, setTodo] = useState([])

  const addItem = item => {
    if (item !== "") {
      setNewItem({
        id: Date.now(),
        value: item,
        isDone: false
      })
      setTodo([...todo, newItem])
      setNewItem("")
    }
  }

  const deleteItem = (id) => {
    setTodo(todo.filter(item => item.id !== id))
  }

  const updateInput = (input) => {
    setNewItem(input)
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" width="100" height="100" className="logo" alt="logo" />
      <h1 className="app-title">Todo App</h1>
      <div className="container">
        Add an item...
        <br />
        <input
          type="text"
          className="input-text"
          placeholder="Write a todo"
          name="item"
          required
          value={newItem}
          onChange={e => updateInput(e.target.value)}
        />
        <button
          className="add-btn"
          disabled={!newItem.length}
          onClick={() => {
            addItem(newItem)
          }} > Add todo </button>
        <div className="list">
          <ul>
            {todo.map(item => {

              return (
                <li key={item.index}>
                  <input type="checkbox" name="" id="" checked={item.isDone} />
                  {item.value}
                  <button className="btn" >delete</button>
                </li>
              )

            })}
            <li >
              <input type="checkbox" name="" id="" />
                Record video
                <button className="btn" >delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App