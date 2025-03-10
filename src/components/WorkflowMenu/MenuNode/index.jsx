import {useState} from "react";

import {FieldMenu} from "../FieldMenu";
import { PencilIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export function MenuNode({selectedNode, setSelectedNode,updateNode}) {

    const [modifyLabel, setModifyLabel] = useState(false);

    const createColumn = () => {
        let node = {...selectedNode};
        node.data.columns.push({name: "column_"+(node.data.columns.length+1), type: "BIGINT", nullable: false, primary: false, unique: false, index: false, default: null, autoIncrement: false, unsigned: false, comment: null});
        updateNode(node);
    };

    const updateColumn = (column,index) => {
        const newColumns = [...selectedNode.data.columns];
        newColumns[index] = column;
        const newNode = {...selectedNode, data: {...selectedNode.data, columns: newColumns}};
        updateNode(newNode);
    }

    const deleteColumn = (index) => {
        let node = {...selectedNode};
        const val = index === 0 ? node.data.columns.shift() : node.data.columns.splice(index,1);
        updateNode(node);
    }

    const changeLabel = (e) => {
        const newNode = {...selectedNode, data: {...selectedNode.data, label: e.target.value}};
        updateNode(newNode);
    }

    return (
        <div className="bg-[#222326] h-full w-[22rem] fixed z-10">
            <div className='flex items-center justify-center mt-16' onBlur={() => setModifyLabel(false)}>
                <a className="text-white text-xl cursor-pointer mr-8 hover:text-gray-400" onClick={() => setSelectedNode(null)}> {'<'} </a>
                {
                    modifyLabel ?
                        <input type="text" value={selectedNode.data.label} onChange={changeLabel} className="w-36 mr-4 text-black focus:outline-none"
                        onKeyDown={(e) => {
                            if (e.key === "Enter")
                                setModifyLabel(false);
                            }}/>
                        :
                        <p className="text-white mr-4">{selectedNode.data.label}</p>
                }
                {
                    modifyLabel ?
                        <CheckCircleIcon className="text-white h-5" onClick={() => {setModifyLabel(false)}}/>
                        :
                        <PencilIcon className="text-white h-5" onClick={() => setModifyLabel(true)}/>
                }
            </div>
            <div className="mt-5">
                {selectedNode.data.columns.map((column,index) => (
                    <FieldMenu key={index} column={column} index={index} updateColumn={updateColumn} deleteColumn={deleteColumn}/>
                ))}
            </div>
            <div>
                <button onClick={createColumn}>Add Column</button>
            </div>
        </div>
    )
}