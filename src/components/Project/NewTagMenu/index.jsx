import {XMarkIcon} from "@heroicons/react/16/solid";
import ModalBackground from "@/components/Common/ModalBackground";
import {useState} from "react";
import {post} from "@/modules/fetchHandler";
import config from "@/config";


export default function NewTagMenu({setMenu}) {
    const [name, setName] = useState('')
    const [color, setColor] = useState('#000')
    const token = config.token;
    const createTag = async () => {
        const body = {
            name: name,
            color: color,
        }
        const res = await post('tag', body, token)
        if(await res.status === 201) {
            setMenu(false)
        }
    }
    return (
        <ModalBackground setIsModalOpen={setMenu}>
            <div className='w-1/3 h-2/5 bg-slate-200 pt-8 px-10 text-gray-900 z-20 rounded' onClick={e => e.stopPropagation()}>
                <div className='flex flex-row items-center justify-between mb-5'>
                    <h2 className='text-4xl'>New Tag</h2>
                    <XMarkIcon className="w-8" onClick={() => setMenu(false)}>X</XMarkIcon>
                </div>
                <div className='w-full h-0.5 bg-slate-900 mb-5'></div>
                <div>
                    <label htmlFor="name" className='flex flex-col items-start'>
                        Tag Name
                        <input type="text" id="name" className='px-2 w-full h-8 border border-slate-400 rounded' onChange={e => setName(e.target.value)}/>
                    </label>
                    <label htmlFor="color" className='flex flex-col items-start mt-5'>
                        Tag Color
                        <input type="color" id="color" className='w-full h-8 border border-slate-400 rounded' onChange={e => setColor(e.target.value)}/>
                    </label>
                    <div className="flex flex-row justify-end">
                        <button onClick={() => createTag()} className='bg-purple-900 px-5 py-3 rounded-xl text-cyan-300 mt-10'>Create Tag</button>
                    </div>
                </div>
            </div>
        </ModalBackground>
    )
}