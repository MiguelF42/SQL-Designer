import {Handle, Position} from "reactflow";
import {CheckIcon, FingerPrintIcon, HashtagIcon, KeyIcon} from "@heroicons/react/16/solid";

export function Attribute({column,color}) {

    const indexLogo = column.primary ? <KeyIcon className="h-4" /> : column.unique ? <FingerPrintIcon className="h-4" /> : column.index ? <HashtagIcon className="h-4" /> : <div className="w-4 h-4"></div>;

    return (
        <div className='w-full flex flex-1 border-b-2 border-[#444547] pl-4 pr-3 py-2'>
            <div className='w-1/2 truncate flex flex-row gap-2 items-center text-white'>
                {indexLogo}
                <p className='text-white'>{column.name}</p>
            </div>
            <div className='w-1/2 flex'>
                <p className={color}>{column.type}{column.nullable && '?'}</p>
            </div>
        </div>
    );
}