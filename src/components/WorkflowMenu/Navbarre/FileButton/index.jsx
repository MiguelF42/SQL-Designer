import { useState } from "react"
import FileMenu from "../FileMenu"

export default function FileButton() {
    const [isFileMenuOpen, setIsFileMenuOpen] = useState(false);

    const onClick = () => {
        setIsFileMenuOpen(!isFileMenuOpen);
    }

    const buttonCss = isFileMenuOpen ? "px-2 h-10 rounded-md bg-slate-700 relative" : "px-2 h-10 bg-transparent rounded-md relative hover:bg-slate-700";

    return(
        <button className={buttonCss} onClick={onClick}>
            File
            {isFileMenuOpen && 
                <FileMenu />
            }
        </button>
    )
}