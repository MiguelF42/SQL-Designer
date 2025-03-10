import {DocumentDuplicateIcon, PencilSquareIcon, StarIcon, TrashIcon} from "@heroicons/react/16/solid";
import {useState} from "react";
import Swal from "sweetalert2";
import '@sweetalert2/theme-dark/dark.css'
import {del, post} from "@/modules/fetchHandler";
import config from "@/config";

export default function ProjectActionMenu({project, setVisible}) {
    async function deleteProject(event) {
        event.preventDefault()
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            background: '#222326',
            color: '#fff',
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await del('project/' + project.projectId, config.token, null)
                if (res.status === 201) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your project has been deleted.",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong.",
                        icon: "error"
                    });
                }
            }
        });
    }

    async function duplicateProject(event) {
        event.preventDefault()
        Swal.fire({
            title: "Are you sure?",
            icon: "question",
            showCancelButton: true,
            background: '#222326',
            color: '#fff',
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, duplicate!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const body = {
                    name : project.name,
                    description : '',
                    dbScheme : {},
                    dbType : project.dbType,
                    isPublic : project.isPublic,
                    urlRepo : project.urlRepo,
                }
                console.log(body)
                const res = await post('project', body, config.token);
                if(res.status === 201) {
                    Swal.fire({
                        title: "Duplicate!",
                        text: "Your project has been duplicate.",
                        icon: "success"
                    });
                }
            }
        });
    }


    async function editProject() {

    }

    return (
        <div className="w-52 bg-[#222326] rounded-lg absolute top-0 left-full z-10" >
            <div className="flex flex-col py-3">
                <p className="px-3 text-white text-sm font-bold">ACTIONS</p>
                <div className="flex flex-col mt-2">
                    <button
                        className=" text-sm px-3 py-2 outline-none bg-transparent border-gray-100 rounded w-full flex flex-row gap-2 items-center justify-start hover:bg-[#46484e] transition">
                        <PencilSquareIcon className="h-4"/>
                        <span>Edit</span>
                    </button>
                    <button
                        onClick={(e) => duplicateProject(e)}
                        className="text-sm px-3 py-2 outline-none bg-transparent border-gray-100 rounded w-full flex flex-row gap-2 items-center justify-start hover:bg-[#46484e] transition">
                        <DocumentDuplicateIcon className="h-4"/>
                        <span>Duplicate</span>
                    </button>
                    <button
                        onClick={(e) => deleteProject(e)}
                        className="text-sm px-3 py-2 outline-none bg-transparent border-gray-100 rounded w-full flex flex-row gap-2 items-center justify-start hover:bg-[#46484e] transition">
                        <TrashIcon className="h-4"/>
                        <span>Delete Project</span>
                    </button>
                </div>
            </div>
        </div>
    )

}