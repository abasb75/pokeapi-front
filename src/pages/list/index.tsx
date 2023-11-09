import { useSearchParams } from "react-router-dom";
import { pokemonList } from "../../api";
import Spiner from "../../components/spiner";
import useFetch from "../../hooks/useFetch";
import PokeGrid from "./pokeGrid";
import { useEffect } from "react";

function List(){

    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");

    const {loading,error,data,reload} = useFetch(`${pokemonList}?offset=${(page-1)*30}&limit=30`);

    useEffect(()=>{
        reload();
    },[page])
    
    if(loading){
        return (<>
            <Spiner />
        </>);
    }
    else if(error){
        return (<>
            <div className="w-full h-[70vh] flex justify-center items-center">
                 <p className="text-pink-600">
                    Error when loading data!
                </p>
                <button>try again</button>
            </div>
        </>)
    }
    else if(!data){
        return (<>
            <div className="w-full h-[70vh] flex justify-center items-center">
                 <p className="text-pink-600">
                    No item to show!
                </p>
            </div>
        </>);
    }
    else {
        return <PokeGrid 
        pokemons={data.results || []} 
        count={parseInt(data.count)}
        page={page}
        />
    }
    
    
}

export default List;