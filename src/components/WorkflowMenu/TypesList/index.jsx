export default function TypesList({typesList,setType}) {

    // const setType = (t) => {
    //     setField({...field, type: t});
    //     setTypesList([]);
    // }

    return(
        <div className="flex flex-col absolute top-1/2 left-full overflow-y-scroll overflow-x-hidden z-10 bg-slate-900 text-white h-52 w-52">
            {typesList.map((t) => (
                <button 
                    key={t} 
                    onClick={() =>
                        setType(t)
                    } 
                    className="w-full text-left px-2 py-1 hover:bg-[#444547]">
                    {t}
                </button>
            ))}
        </div>
    )
}