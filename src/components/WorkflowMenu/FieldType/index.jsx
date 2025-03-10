import {useState} from "react";

import delay from "../../../modules/timeHandler";
import mysqlTypes from "../../../constants/mysqlTypes";
import TypesList from "../TypesList";

export default function FieldType({field, setField}) {

    const [typesList, setTypesList] = useState(mysqlTypes);
    const [isFocused, setIsFocused] = useState(false);

    const onChangeType = (e) => {
        setType(e.target.value);
        setTypesList(mysqlTypes.filter((t) => t.includes(e.target.value.toUpperCase())));
    }

    const setType = (t) => {
        setField({...field, type: t});
    }

    return(
        <div className="flex flex-col relative">
            <input 
                className="text-sm border-2 border-[#444547] bg-transparent w-24 rounded-md px-2 py-1" 
                name="type"
                value={field.type} 
                onChange={onChangeType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    delay(200).then(() => setIsFocused(false));
                }}
            >
            </input>
            {isFocused && <TypesList typesList={typesList} setType={setType}/>}
        </div>
    );
}