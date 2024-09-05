import React, { useState, useEffect } from 'react';
import formatDate from '../../utils/formatDate';

interface Todo {
  id: number;
  todos: string;
  date: string;
  IsCompleted: boolean;
  IsDeleted: boolean 
}

const Home: React.FC = () => {
  const [data, setData] = useState<Todo[]>([]);
  const [notFound, setNotFound] = useState<string | null>(null);
  const [error, setError] = useState<Error | string>('');

  const api = '/api/todos/?completed=false&deleted=false';

  useEffect(() => {
    (async(): Promise<void> => {
      try {
        const response: Response = await fetch(api, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok || response.status === 404) {
          setNotFound('No todos found.')
          return;
        };

        const result: Todo[] = await response.json();
        console.log('Result: ', result)
        setData(result)
      } 
      catch(err) {
        if (err instanceof Error) {
          setError(err)
        }
      }
    })()
  }, [])


  return (
    <>
      <ul>
          {data.map((todo) => (
          <li key={todo.id}>todo: {todo.todos} created at: {formatDate(todo.date)}</li>
          ))}
      </ul>
      <p> {notFound} </p>
      <p> {error.toString()} </p>
    </>
  );
};

export default Home;
