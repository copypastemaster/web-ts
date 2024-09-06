import { useEffect, useState } from 'react';
import Todo from '../types/todoSchema'

const useFetch = (url: string) => {
  const [data, setData] = useState<Todo[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [notFound, setNotFound] = useState<string>('');

  useEffect(() => {
    const fetchData = async (): Promise<void>  => {
      try {
        setLoading(true);

        const response: Response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (response.status === 404) {
          setNotFound('No todos found.')
          setData([]);
          setLoading(false)
          return;
        } else if (!response.ok){
          throw new Error(`Failed to fetch: ${response.statusText}`)
        }

        const result: Todo[] = await response.json();
        setData(result);
        setNotFound('');
      }
      catch (err) {
        if (err instanceof Error) {
          setError(err)
          setLoading(false);
        }
      }
      finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [url])

  return { data, loading, error, notFound }
}

export default useFetch