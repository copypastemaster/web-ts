import React from 'react';
import useFetch from '../../hooks/useFetch';
import Todos from '../../Content/Todos';
import Searchbar from '../../Header/Searchbar';

const Deleted: React.FC = () => {
  const { data, error, loading, notFound } = useFetch('api/todos/deleted')
  
  return (
    <>
      { loading && <p>Fetching deleted todos...</p> }
      { error && <p>error: ${error.message}</p> } 
      { notFound && <p>{notFound}</p> }

      { !loading && !error && !notFound && (
        <>
          <Searchbar shouldHide={true}/>
          <Todos data={data} header='Deleted todos'/>
        </>
      ) }   
    </>
  )
}

export default Deleted