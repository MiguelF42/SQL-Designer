import Link from "next/link";
import Image from "next/image";
import imageProject from "../../../assets/img/testProjet.png";
import DetailsButton from "../DetailsButton";

export default function ProjectCard({project}) {
    function timeSince(date) {
        const now = new Date();
        const seconds = Math.floor((now - new Date(date)) / 1000);

        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) return `${interval} years ago`;

        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return `${interval} months ago`;

        interval = Math.floor(seconds / 86400);
        if (interval > 1) return `${interval} days ago`;

        interval = Math.floor(seconds / 3600);
        if (interval > 1) return `${interval} hours ago`;

        interval = Math.floor(seconds / 60);
        if (interval > 1) return `${interval} minutes ago`;

        return `${Math.floor(seconds)} seconds ago`;
    }

    return (
        <Link href={`/workflow/${project.projectId}`} id="card" className="w-72 border-[1px] border-gray-500 rounded-lg min-h-64 hover:shadow-xl group/show">
            <div className="w-full h-48 border-b-[1px] border-gray-500 relative object-cover rounded-t-lg">
                <Image src={imageProject} className="w-full h-full rounded-t-lg" alt="project-picture" />
                <DetailsButton project={project}/>
            </div>
            <div className="px-3 py-2">
                <p className="text-white truncate">{project.name}</p>
                <p className="text-sm text-gray-400">Updated {timeSince(project.updatedAt)}</p>
            </div>
        </Link>
    );
}