import {MenuTable} from "../MenuTable";
import React from "react";
import {AttributeMenu} from "../AttributeMenu";


export function MenuNode({selectedNode, setSelectedNode}) {
    return (
        <div className="bg-[#222326] h-full w-[22rem] fixed z-10">
            <div className='flex items-center justify-center mt-16'>
                <a className="text-white text-xl cursor-pointer mr-8 hover:text-gray-400" onClick={() => setSelectedNode(null)}> {'<'} </a>
                <p className="text-white">{selectedNode.data.label}</p>
            </div>
            <div className="mt-5">
                <AttributeMenu index={'1'}/>
                <AttributeMenu index={'2'}/>
                <AttributeMenu index={'3'}/>
            </div>
            <div>
                <button>Add Column</button>
            </div>
        </div>
    )
}