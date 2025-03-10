import React from "react";
import {MenuTable} from "../MenuTable";

export function Menu({addNode, nodes, setSelectedNode, projectName}) {
    return (
        <div className="bg-[#222326] h-full w-[22rem] fixed z-10">
            <div className="flex flex-row justify-between items-center h-16 px-6">
                <h2 className="text-white text-lg font-bold ">{projectName}</h2>
                <button className="text-white bg-cyan-700 px-4 py-2 rounded-lg" onClick={addNode}>
                    <span className="mr-1">
                        +
                    </span>
                    Add
                </button>
            </div>
            <div className="">
                {nodes.map((node, index) => (
                    <MenuTable key={index} node={node} setSelectedNode={setSelectedNode} />
                ))}
            </div>
        </div>
    )
}