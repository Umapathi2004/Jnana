import React, { Fragment, useState } from 'react'

const App = () => { 
  const [Todos,SetTodos] = useState([]);
  const [NewTodo,setNewTodo] = useState("");

  const AddTodo = () =>{
    const id = (Todos.length?(Todos[Todos.length-1]).id+1:0) 
    if(NewTodo.trim()){
    SetTodos([...Todos,{id:id,task:NewTodo.trim()}]);
    console.log(Todos)
    }
    setNewTodo("")
  }

  const RemoveTodo = (id) =>{
    const removed = Todos.filter((todo)=>todo.id!==id);
    SetTodos(removed);
  }
  return (
    <Fragment>
        <div className="container">
          <div className="header">TODO List</div>
          <div className="addTodos">
            <input type="text" name="" id="" placeholder="Read Books..." required value={NewTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
            <button onClick={AddTodo} type='submit'>Add New</button>
          </div>
         {!Todos.length?<div className="norecords"><i className="fa-solid fa-triangle-exclamation"></i> No Todos!</div>:
          <div className="todos">
          {Todos.map((todo,index)=>(
            <div className="todo_con" key={todo.id}>
              <div className="todo">{`${index+1}. ${todo.task}`}</div>
              <button onClick={()=>RemoveTodo(todo.id)}><i className="fa-solid fa-trash"></i></button>
            </div>
          ))}
          </div>}
        </div>
    </Fragment>
  )
}

export default App