import { useState } from 'react';
import './App.css'
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {

  const [todoList , setTodoList] = useState([]);

  let addList = (inputText)=>{
    setTodoList([...todoList , inputText]);
  }

  const deleteItem = (key)=>{
    let newListTodo = [...todoList];
    newListTodo.splice(key , 1);
    setTodoList([...newListTodo]);
  }

  return (
    <>
      <h1 className="heading">Todo App</h1>
      <div className="main-container">
        <div className="center-container">
          <TodoInput 
            addList = {addList}
          />
          <br/>
          {
            todoList.map((listItem  , l)=>{
              return (
                <TodoList listItem={listItem}
                deleteItem = {deleteItem}
                key = {l}
                index = {l}
                />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App
