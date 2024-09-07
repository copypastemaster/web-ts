import React from 'react'
import Todo from '../types/todoSchema'
import formatDate from '../utils/formatDate';

interface Data {
  data: Todo[];
  header: string;
}

const Todos: React.FC<Data> =( { data, header } ) =>{
  
  return (
    <>
      <h1> {header} </h1>
        {data.map((todo) => (
          <p key={todo.id}>
            todo: {todo.todos}, created at: {formatDate(todo.date)}
          </p>
        ))}
    </>
  )
}

export default Todos