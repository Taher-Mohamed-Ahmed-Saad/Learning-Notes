import { useState, useEffect } from "react";

const useFetch = (endponint) => {

    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error , setError] = useState(null);
  
    useEffect(()=>{

        const abortCont = new AbortController();

        (async function (){ 
            try{
                const res = await fetch(`${process.env.REACT_APP_API_URL}${endponint}`, {signal:abortCont.signal });
                
                if (!res.ok){  throw Error('couldn\'t fetch data'); }

                const data = await res.json();

                setdata(data);           

                setIsPending(false);

                setError(null);

            } catch(err) {
                if (err.name !== 'AbortError'){
                    setIsPending(false);
                    setError(err.message);                    
                }
            }
        }());  
        return () => {
            abortCont.abort();
        } 
    },[endponint]);

    return {data , error , isPending};
}
 
export default useFetch;