import { useState } from "react";

interface Sprites{
    [key:string]:string|object,
}

interface Props {
    sprites:Sprites,
}

function Sprites({sprites,}:Props){
    
    const spritesArray:string[] = [];
    const getSpritesAsArray = (sprites:Sprites) =>{
        Object.keys(sprites).forEach((key:any,index)=>{
            if(!sprites[key]){
                
            }
            else if(typeof sprites[key] === 'object'){
                getSpritesAsArray(sprites[key] as Sprites);
            }
            else if(typeof sprites[key] === 'string'){
                spritesArray.push(sprites[key] as string);
            }
        });
    }
    getSpritesAsArray(sprites);

    return (<div className="flex flex-wrap gap-2">
        {spritesArray.map((sprite,index)=>{
            return(<SpritesImage image={sprite} />)
        })}
    </div>)
}

interface SpriteImage {
    image:string,
}
function SpritesImage({image}:SpriteImage){
    const [isLoading,setIsLoading] = useState(true);
    return (<div className="w-12 h-12 relative" key={image}>
        <img className="w-12 h-12 " src={image} alt="sprite" onLoad={e=>setIsLoading(false)}  />
        {isLoading && <div className="absolute top-0 left-0 w-12 h-12 flex justify-center items-center">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div> }
    </div>)
}

export default Sprites;