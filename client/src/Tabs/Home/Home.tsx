import React from 'react';
import Searchbar from '../../Header/Searchbar';
import useFetch from '../../hooks/useFetch';
import Todos from '../../Content/Todos';

const Home: React.FC = () => {
  const { data, error, loading, notFound } = useFetch('/api/todos/')

  return (
    <>
      { loading && <p> Fetching data...</p> }
      { error && <p> {error?.message} </p> }
      { notFound && <p className='text-red mx-auto'> {notFound} </p> }

      { !loading && !error && !notFound && (
        <>
          <Searchbar shouldHide={false}/>
          <Todos data={data} header='Todos'/>
        </>
      ) }

    </>
  );
};

export default Home;
