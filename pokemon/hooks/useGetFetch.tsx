import { useEffect, useState } from "react";

export function useGetFetch<T>(baseUrl: string, mapper?: (data: any) => T) {
  const [data, setData] = useState<null | T>(null);

  const fetchData = async (url: string) => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(mapper ? mapper(response) : response);
      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(() => {
    fetchData(baseUrl);
  }, [])

  return { data, fetchData };
}
