export default function NullableButton({field, setField}) {
    const nullableClick = () => {
        setField({...field, nullable: !field.nullable});
    }
    return (
        <button
            className={`w-1/3 h-full hover:bg-[#444547] text-sm rounded-md ${field.nullable ? 'text-green-600' : ''}`}
            onClick={nullableClick}
        >
            N
        </button>
    )
}