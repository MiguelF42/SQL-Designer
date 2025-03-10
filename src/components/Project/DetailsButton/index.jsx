import {StarIcon} from "@heroicons/react/24/outline";
import {EllipsisHorizontalIcon, StarIcon as StarSolid} from "@heroicons/react/16/solid";
import {useState} from "react";
import ProjectActionMenu from "@/components/Project/ProjectActionMenu";



export default function DetailsButton({project}) {
    const [isVisible, setIsVisible] = useState(false);
    function openMenu(event) {
        event.preventDefault()
        setIsVisible(!isVisible);
        console.log(isVisible)
    }
    return (
        <div>
            <button onClick={e => openMenu(e)} id="detailsButton" className={`opacity-0 group absolute right-0 top-4 rounded-full bg-gray-700 p-1 bg-opacity-30 transform transition-all duration-300 ease-in-out group-hover/show:opacity-100 group-hover/show:right-4 ${isVisible ? "opacity-100 right-4" : ""}`}>
                <EllipsisHorizontalIcon className={`text-white opacity-0 w-5 font-bold group-hover/show:opacity-100 group-hover:text-gray-500 ${isVisible ? "text-gray-500 opacity-100" : ""}`}/>
            </button>
            {isVisible && <ProjectActionMenu project={project} setVisible={setIsVisible}/>}
        </div>
    )
}