import { useState, useEffect } from "react";
import { FingerPrintIcon, HashtagIcon, KeyIcon } from "@heroicons/react/16/solid";
import delay from "../../../modules/timeHandler";

import IndexTypeMenu from "../IndexTypeMenu";

export default function IndexTypeButton({field, setField}) {
    
    const [indexTypeVisible, setIndexTypeVisible] = useState(false);
    const [indexLogo, setIndexLogo] = useState(null);

    useEffect(() => {
        setIndexLogo(field.primary ? <KeyIcon className="h-4" /> : field.unique ? <FingerPrintIcon className="h-4" /> : field.index ? <HashtagIcon className="h-4" /> : <div className="h-3 w-3 rounded-full border-2 border-white"></div>);
    },[field]);

    return (
        <button
            onClick={() => setIndexTypeVisible(!indexTypeVisible)}
            onBlur={() => {delay(100).then(() => setIndexTypeVisible(false))}}
            className="text-white w-1/3 h-full flex items-center justify-center hover:bg-[#444547] rounded-md relative">
            {indexLogo}
            {indexTypeVisible && <IndexTypeMenu field={field} setField={setField}/>}
        </button>
    )
}