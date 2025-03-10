import {CheckIcon, FingerPrintIcon, HashtagIcon, KeyIcon} from "@heroicons/react/16/solid";

export default function IndexTypeMenu({field, setField}) {

    const primaryClick = () => {
        setField({...field, primary: true, unique: true, index: true, nullable: false});

    }

    const uniqueClick = () => {
        setField({...field, primary: false, unique: true, index: true, nullable: true});
    }

    const indexClick = () => {
        setField({...field, primary: false, unique: false, index: true});
    }

    const noneClick = () => {
        setField({...field, primary: false, unique: false, index: false});
    }

    const styleActive = "h-4 mr-1 text-green-700"
    const styleInactive = "h-4 mr-1 text-green-700 invisible"

    return(
        <div className="w-52 bg-[#2A2E33] rounded-lg absolute top-0 left-full z-10">
            <div className="flex flex-col p-3">
                <p className="text-white text-sm font-bold">INDEX TYPE</p>
                <div className="flex flex-col mt-2">
                    <button className="flex items-center justify-between hover:bg-[#2B3A4A] rounded-lg py-1.5 px-4" onClick={primaryClick}>
                        <span className="flex items-center text-[#E0E0E0]"><CheckIcon className={(field.primary) ? styleActive : styleInactive}/>Primary Key</span>
                        <KeyIcon className="h-4"/>
                    </button>
                    <button className="flex items-center justify-between hover:bg-[#2B3A4A] rounded-lg py-1.5 px-4" onClick={uniqueClick}>
                        <span className="flex items-center text-[#E0E0E0]"><CheckIcon className={(!field.primary && field.unique) ? styleActive : styleInactive}/>Unique Key</span>
                        <FingerPrintIcon className="h-4"/>
                    </button>
                    <button className="flex items-center justify-between hover:bg-[#2B3A4A] rounded-lg py-1.5 px-4" onClick={indexClick}>
                        <span className="flex items-center text-[#E0E0E0]"><CheckIcon className={(!field.primary && !field.unique && field.index) ? styleActive : styleInactive}/>Index</span>
                        <HashtagIcon className="h-4"/>
                    </button>
                    <button className="flex items-center justify-between hover:bg-[#2B3A4A] rounded-lg py-1.5 px-4" onClick={noneClick}>
                        <span className="flex items-center text-[#E0E0E0]"><CheckIcon className={(!field.primary && !field.unique && !field.index) ? styleActive : styleInactive}/>None</span>
                    </button>
                </div>
            </div>
        </div>
    )
}