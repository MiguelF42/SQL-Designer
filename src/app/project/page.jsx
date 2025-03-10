"use client";

import LeftBar from "../../components/Project/LeftBar";
import ProjectCard from "../../components/Project/ProjectCard";
import {useEffect, useState} from "react";
import NewProjectMenu from "../../components/Project/NewProjectMenu";
import ProjectList from "@/components/Project/ProjectList";
import NewTagMenu from "@/components/Project/NewTagMenu";
import SelectUserTags from "@/components/Project/SelectUserTags";
import { isUserToken } from "@/modules/tokenHandler";


function Project() {

    isUserToken('login');

    const [menu, setMenu] = useState("projects");
    const [activeTag, setActiveTag] = useState(null)
    const [isNewProjectMenu, setIsNewProjectMenu] = useState(false);
    return (
        <div className="mt-36">
            {isNewProjectMenu && <NewProjectMenu setIsNewProjectMenuOpen={setIsNewProjectMenu}/>}
            {menu === "newTags" && <NewTagMenu setMenu={setMenu}/>}
            <div className="flex flex-row justify-center">
                <LeftBar menu={menu} setMenu={setMenu}/>
                <div className="flex flex-col w-[60rem] px-8">
                    <div className="flex flex-row items-center mb-10 justify-between">
                        <h1 className="text-3xl font-bold text-center ">Projects</h1>
                        <div className="flex">
                            <SelectUserTags setActiveTag={setActiveTag}/>
                            <button className="border border-gray-500 px-4 py-2.5 rounded-lg"
                                    onClick={() => setIsNewProjectMenu(true)}>Create Project
                            </button>
                        </div>
                    </div>
                    <ProjectList tag={activeTag}/>
                    <nav className="flex justify-center mt-10 mb-20" aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-base h-10 gap-5">
                            <li>
                                <a href="#"
                                   className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-white bg-transparent hover:bg-gray-100 hover:text-gray-700">Previous</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-transparent rounded-lg border border-transparent hover:bg-gray-100 hover:text-gray-700">1</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-transparent rounded-lg border border-transparent hover:bg-gray-100 hover:text-gray-700">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page"
                                   className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-transparent rounded-lg border border-transparent hover:bg-gray-100 hover:text-gray-700">3</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-white bg-transparent hover:bg-gray-100 hover:text-gray-700">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Project;
