import { Link, useSearchParams } from "react-router-dom";

interface Pokemon {
    name:string,
    url:string,
}

interface Props {
    pokemons:Pokemon[],
    count:number,
    page:number,
}

function PokeGrid({pokemons,page,count}:Props){
    const [searchParams, setSearchParams] = useSearchParams();
    const lastPage = Math.floor(count/30);
    
    return (<>
        <div className="max-w-5xl mx-auto flex flex-wrap py-10">
            {pokemons?.map((pokemon)=>(<div 
            className="w-1/3 h-[40px] text-blue-300 text-center "
            key={pokemon.name}>
                <Link to={'/'+pokemon.name}>
                    <h3 className="hover:underline">{pokemon.name}</h3>
                </Link>
            </div>))}
        </div>
        <div className="max-w-xl mx-auto flex flex-wrap py-4 gap-2 px-4">
            <div>
                {page > 1 && <button 
                className="text-pink-600"
                onClick={()=>{
                    searchParams.set('page',(`${page-1}`))
                    setSearchParams(searchParams)
                }}>{'< prev'}</button>}
            </div>
            <div className="flex-1 text-pink-200 text-center">
                page : {page} / {lastPage}
            </div>
            <div>
                {page<lastPage  && <button 
                className="text-pink-600"
                onClick={()=>{
                    searchParams.set('page',(`${page+1}`))
                    setSearchParams(searchParams)
                }}>{'next >'}</button>}
            </div>
        </div>
    </>);
}

export default PokeGrid;