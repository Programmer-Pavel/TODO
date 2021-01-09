import React, {useState} from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import {TodoList} from "./components/TodoList";
import {ITodo} from "./interfaces";

const App: React.FC = () => {
  return <>
      <Navbar/>
      <div className="container">
          <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos}/>
      </div>
  </>
}

export default App;
