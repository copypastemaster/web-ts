import React, { useState, useEffect } from 'react';
import formatDate from '../../utils/formatDate';

interface Todo {
  id: number;
  todos: string;
  date: string;
  IsCompleted: boolean;
  IsDeleted: boolean 
}

type ErrorTypes = number | string | null

const Home: React.FC = () => {
  const [data, setData] = useState<Todo[]>([]);
  const [error, setError] = useState<ErrorTypes>(null);

  const api = '/api/todos';

  useEffect(() => {
    (async(): Promise<void> => {
      try {
        const response: Response = await fetch(api, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) setError(response.status);
        const result: Todo[] = await response.json();
        setData(result)
      } 
      catch(err) {
        if (err instanceof Error) {
          setError(err.message)
        }
      }
    })()
}, [])

  return (
    <>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.todos}, created: {formatDate(todo.date)}</li>
        ))}
      </ul>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </>
  );
};

export default Home;
