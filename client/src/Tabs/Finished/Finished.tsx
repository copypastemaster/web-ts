import React from 'react'
import useFetch from '../../hooks/useFetch'
import Searchbar from '../../Header/Searchbar'
import Todos from '../../Content/Todos'


const Finished: React.FC = () => {
  const { data, error, loading, notFound } = useFetch('/api/todos/completed')

  return (
    <>
    { loading && <p> Fetching completed todos... </p> }
    { notFound && <p> {notFound} </p> }
    { error && <p> {error.message} </p> }

    { !loading && !error && !notFound && (
      <>
        <Searchbar shouldHide={true}/>
        <Todos data={data} header='Finished todos'/>
      </>
    )}

    </>
  )
}

export default Finished