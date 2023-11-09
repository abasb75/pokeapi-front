interface Props{
    keyName:string,
    value:string,
}

function Property({keyName,value}:Props){
    return (<div className="flex text-yellow-50 py-3 px-2">
        <h3>{keyName} : </h3>
        <p>{value}</p>
    </div>)
}

export default Property;