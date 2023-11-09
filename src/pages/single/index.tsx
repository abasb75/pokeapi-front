import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { pokemonList } from "../../api";
import Spiner from "../../components/spiner";
import Sprites from "./sprites";
import Property from "./Property";

function SinglePage(){

    const { pokemon } = useParams();

    const {loading,error,data,reload} = useFetch(`${pokemonList}/${pokemon}`);

    if(loading){
        return <Spiner />
    }
    else if(error){
        return (<>
            <div className="w-full h-[70vh] flex justify-center items-center">
                 <p className="text-pink-600">
                    Error when loading data!
                </p>
                <button onClick={reload}>try again</button>
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
    return (<>
        <div className="max-w-3xl mx-auto px-2 py-4">
            <h1 className="text-blue-400 text-2xl">{data?.name}</h1>
            <Property keyName="id" value={data?.id} />
            <Property keyName="weight" value={data?.weight} />
            <Property keyName="height" value={data?.height} />
            <Property keyName="is_default" value={data?.is_default} />
            <Property keyName="order" value={data?.order} />
            <Sprites sprites={data?.sprites} />
        </div>
    </>);
}

export default SinglePage;