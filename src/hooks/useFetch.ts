import { useEffect, useState } from "react";

function useFetch(url:string,optins={}){

    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [data,setData] = useState<any>(null);

    const loadData = ()=>{

        setLoading(true);
        setError(null);

        fetch(url,optins)
        .then(res=>res.json())
        .then(data=>{
            setError(null);
            setData(data);
            setLoading(false);
        })
        .catch(err=>{
            setError(error);
            setLoading(false);
            setData(null);
        });

    }

    useEffect(()=>{
        loadData();
    },[]);

    const reload = loadData;

    return {loading,error,data,reload};

}

export default useFetch;