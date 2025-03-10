export default function DatabaseType({type,selectType,setSelectType}) {
    return(
        <div 
            className={selectType === type ? 'w-1/3 h-32 border border-cyan-800 rounded text-cyan-600' : 'w-1/3 h-32 border border-black rounded'}
            onClick={() => setSelectType(type)}>
        {type}
        </div>
    )
}