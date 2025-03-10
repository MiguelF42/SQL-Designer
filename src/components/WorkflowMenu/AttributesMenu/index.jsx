import { TrashIcon } from "@heroicons/react/24/outline";

export default function AttributesMenu({field, setField, deleteField}) {

    const changeDefault = (e) => {
        setField({...field, default: e.target.value});
    }

    const checkboxAutoIncrement = () => {
        setField({...field, autoIncrement: !field.autoIncrement});
    }
    const checkboxUnsigned = () => {
        setField({...field, unsigned: !field.unsigned});
    }

    const isTypeNumber = () => {
        return field.type === 'TINYINT'
            || field.type === 'SMALLINT'
            || field.type === 'MEDIUMINT'
            || field.type === 'INT'
            || field.type === 'BIGINT'
            || field.type === 'FLOAT'
            || field.type === 'DOUBLE'
            || field.type === 'DECIMAL'
    }

    return(
        <div className="w-72 bg-[#2A2E33] rounded-lg absolute top-0 left-full z-10" >
            <div className="flex flex-col px-5 py-4">
                <p className="text-white text-sm font-bold">ATTRIBUTES</p>
                <div className="flex flex-col mt-2">
                    {isTypeNumber() && 
                    <label className="flex items-center justify-between rounded-lg py-1.5" htmlFor="autoIncrement">
                        {field.autoIncrement ? <input type="checkbox" name="autoIncrement" id="autoIncrement" checked onChange={checkboxAutoIncrement} value={true}/> : <input type="checkbox" name="autoIncrement" onChange={checkboxAutoIncrement}/>}
                        Auto Increment
                    </label>}
                    {isTypeNumber() && 
                    <label className="flex items-center justify-between rounded-lg py-1.5" htmlFor="unsigned">
                        {field.unsigned ? <input type="checkbox" name="unsigned" id="unsigned" checked onChange={checkboxUnsigned} value={true}/> : <input type="checkbox" name="autoIncrement" onChange={checkboxUnsigned}/>}
                        Unsigned
                    </label>}
                    {(!isTypeNumber || !field.autoIncrement) &&
                        <label className="flex flex-col gap-1 items-start justify-between rounded-lg py-1.5">
                            <span>Default</span>
                            <input className="max-w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 border-gray-500 placeholder-gray-400 w-1/2 bg-gray-700 px-2 py-1 text-sm text-gray-200 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200" type="text" name="default" value={field.default ? field.default : ''} onChange={changeDefault}/>
                        </label>
                    }
                    <label className="flex flex-col gap-1 items-start justify-between rounded-lg py-1.5">
                        <span>Comment</span>
                        <textarea className="canvas-sidebar-comment-text-area px-2 py-1 text-sm leading-tight text-gray-200 block w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 resize-none border-gray-500 bg-gray-700 placeholder-gray-400" rows={2} name="comment" value={field.comment ? field.comment : ''} onChange={(e) => setField({...field, comment: e.target.value})}></textarea>
                    </label>
                    <div className="h-[1px] w-full bg-gray-500 my-3"></div>
                    <button onClick={deleteField} className="outline-none bg-transparent border-gray-100 rounded border w-2/3 flex flex-row gap-2 items-center justify-start hover:text-red-500 hover:border-red-500 transition">
                        <TrashIcon className="h-4"/>
                        <span>Delete Column</span>
                    </button>
                </div>
            </div>
        </div>
    )
}