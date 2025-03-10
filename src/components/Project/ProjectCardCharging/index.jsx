import Image from "next/image";
import imageProject from "@/assets/img/testProjet.png";
import FavoriteButton from "@/components/Project/DetailsButton";
import Link from "next/link";


export default function ProjectCardCharging() {
    return (
        <div id="card" className="w-72 border-[1px] border-gray-500 rounded-lg min-h-64 hover:shadow-xl group/show overflow-hidden animate-pulse">
            <div className="w-full h-48 border-b-[1px] border-gray-500 relative object-cover rounded-t-lg">
                <div className="w-full h-full bg-[#1C1C1C]" alt="project-picture" />
            </div>
            <div className="px-3 py-2">
                <p className="text-white truncate w-3/4 bg-[#1C1C1C] h-4 rounded"></p>
                <p className="text-sm text-gray-400 w-1/2 bg-[#1C1C1C] h-3 rounded mt-3"></p>
            </div>
        </div>

    )
}