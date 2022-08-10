import { useEffect, useState } from 'react';

export default function useFetch(url) {

  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

    useEffect(()=>{

        // setTimeout(()=> {
            fetch(url)
            .then(res=>{
              if(!res.ok) {
                throw Error("Could not fetch data for that resource.");
              } else {
                return res.json();}
            })
            .then(data=>{
            //   console.log(data);
              setData(data)
              setLoad(false)
              setError(null);
              })
              .catch(err => {
                setError(err.message);
                setLoad(false);
            })
        // }, 1000);


      }, [url]);

      return {data, load, error};
}
