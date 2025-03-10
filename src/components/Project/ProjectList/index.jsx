import ProjectCard from "@/components/Project/ProjectCard";
import {useEffect, useState} from "react";
import {get} from "@/modules/fetchHandler";
import config from "@/config";
import ProjectCardCharging from "@/components/Project/ProjectCardCharging";


export default function ProjectList({tag}) {
    const [project, setProject] = useState(null)
    const token = config.token;

    const getProjects = async () => {
        let url = await tag && tag !== null ? `project/tag/${tag}` : 'project/@me';

        const response = await get(url, token);
        if (response && response.data) {
            setProject(response.data.data);
        }
    }

    useEffect(() => {
        getProjects()
    }, [tag]);

    return (
        <div className="grid gap-x-6 gap-y-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {!project ? (
                [...Array(3)].map((_, index) => <ProjectCardCharging key={index} />)
            ) : project && project.length > 0 ? (
                project.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))
            ) : (
                <p className="text-gray-500">No projects found</p>
            )}

        </div>
    )
}