import {ConnectionMode, Handle, Position} from "@xyflow/react";
import { Attribute } from "../Attribute";

export function Table({ id, data }) {

    // console.log(data);
    console.log(id)
    return (
        <div className='w-[22.5rem] rounded-t-md bg-[#222326] node group'>
            <div className='rounded-t-md text-white bg-[#444547] py-2 w-full relative pl-4'>
                <p className='font-bold'>{data.label}</p>
                <Handle className="block w-4 h-4 z-10" type="target" position={Position.Left} id={`${id}-L`} />
                <Handle className="block w-4 h-4 z-10" type="source" position={Position.Right} id={`${id}-D`} />
                <Handle className="block w-4 h-4 z-10" type="target" position={Position.Right} id={`${id}-D`} />
                <Handle className="block w-4 h-4 z-10" type="source" position={Position.Left} id={`${id}-L`} />
            </div>
            <div className="border-x-2 border-[#444547]">
                {data.columns.map((column,index) => (
                    <Attribute key={index} column={column} color="text-orange-500"/>
                ))}
                {/* <Attribute name='id' type='int' color="text-yellow-500"/>
                <Attribute name='name' type='varchar(250)' color="text-orange-500"/>
                <Attribute name='length' type='int' color="text-yellow-500"/>
                <Attribute name='release_dt' type='date' color="text-green-500"/>
                <Attribute name='synopsis' type='text' color="text-orange-500"/> */}
            </div>
        </div>
    );
}