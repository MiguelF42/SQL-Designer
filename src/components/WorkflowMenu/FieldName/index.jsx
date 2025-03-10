export default function FieldName({field, setField}) {
    const onChangeName = (e) => {
        setField({...field, name: e.target.value});
    }

    return (
        <input 
            className="text-sm border-2 border-[#444547] bg-transparent mr-1 w-36 rounded-md px-2 py-1" 
            name="name" 
            value={field.name} 
            onChange={onChangeName}>
        </input>
    );
}