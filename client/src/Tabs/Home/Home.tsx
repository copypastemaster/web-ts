import React from 'react';
import formatDate from '../../utils/formatDate';
import Searchbar from '../../Header/Searchbar';
import useFetch from '../../hooks/useFetch';

const Home: React.FC = () => {
  const { data, error, loading, notFound } = useFetch('/api/todos/?completed=false&deleted=false')

  return (
    <>
      { loading && <p> Fetching data...</p> }
      { error && <p> {error?.message} </p> }
      { notFound && <p className='text-red mx-auto'> {notFound} </p> }

      { !loading && !error && !notFound && (
        <>
          <Searchbar shouldHide={false}/>
          <ul>
              {data.map((todo) => (
              <li key={todo.id}>todo: {todo.todos} created at: {formatDate(todo.date)}</li>
              ))}
          </ul>
        </>
      ) }

    </>
  );
};

export default Home;
