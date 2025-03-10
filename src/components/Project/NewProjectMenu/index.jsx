import {useState,useEffect} from 'react';
import {post} from '../../../modules/fetchHandler';
import DatabaseType from '../DatabaseType';
import ModalBackground from '@/components/Common/ModalBackground';
import { permanentRedirect } from 'next/navigation';
import {XMarkIcon} from "@heroicons/react/16/solid";
import config from '@/config';

export default function NewProjectMenu({setIsNewProjectMenuOpen}) {

    const [name, setName] = useState('');
    const [urlRepo, setUrlRepo] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [selectType, setSelectType] = useState('MySQL');
    const [project, setProject] = useState(null);

    const token = config.token;

    useEffect(() => {
        if(project !== null) {
            permanentRedirect(`/workflow/${project.projectId}`);
        }
    }, [project])

    const createProject = async () => {
        const body = {
            name : name,
            description : '',
            dbScheme : {},
            dbType : selectType,
            isPublic : isPublic,
            urlRepo : urlRepo,
        }
        const response = await post('project', body, token);
        if(await response.status === 201) {
            setProject(response.data);
        }
    }

    return(
        <ModalBackground setIsModalOpen={setIsNewProjectMenuOpen}>
            <div className='w-1/3 h-3/5 bg-slate-200 pt-8 px-10 text-gray-900 z-20 rounded' onClick={e => e.stopPropagation()}>
                <div className='flex flex-row items-center justify-between mb-5'>
                    <h2 className='text-4xl'>New Project</h2>
                    <XMarkIcon className="w-8" onClick={() => setIsNewProjectMenuOpen(false)}>X</XMarkIcon>
                </div>
                <div className='w-full h-0.5 bg-slate-900 mb-5'></div>
                <div className='flex flex-row gap-3 h-auto w-full'>
                    <div className='w-1/5'>
                        <h3>Diagram</h3>
                    </div>
                    <div className='w-4/5 flex flex-col gap-4'>
                        <label htmlFor="name" className='flex flex-col items-start'>
                            Project Name
                            <input type="text" id="name" className='w-full h-8 border border-slate-400 rounded' value={name} onChange={e => setName(e.target.value)}/>
                        </label>
                        <label htmlFor="urlRepo" className='flex flex-col items-start'>
                            Repository URL
                            <input type="text" id="urlRepo" className='w-full h-8 border border-slate-400 rounded' value={urlRepo} onChange={e => setUrlRepo(e.target.value)}/>
                        </label>
                        <label htmlFor="isPublic" className='flex flex-col items-start'>
                            Project Visibility
                            <div className='w-full flex flex-row gap-10 my-2'>
                                <label htmlFor="isPublicTrue" className='flex gap-3'>
                                    <input type="radio" checked={isPublic && true} name="isPublic" id="isPublicTrue" value={true} onClick={() => setIsPublic(true)}/>
                                    Public
                                </label>
                                <label htmlFor="isPublicFalse" className='flex gap-3'>
                                    <input type="radio" checked={!isPublic && true} name="isPublic" id="isPublicFalse" value={false} onClick={() => setIsPublic(false)}/>
                                    Private
                                </label>
                            </div>
                        </label>
                        <label htmlFor="" className='w-full'>
                            Database type
                            <div className='w-full flex gap-4'>
                                <DatabaseType type={'MySQL'} selectType={selectType} setSelectType={setSelectType}/>
                                <DatabaseType type={'PostGreSQL'} selectType={selectType} setSelectType={setSelectType}/>
                                <DatabaseType type={'SQL Server'} selectType={selectType} setSelectType={setSelectType}/>
                            </div>
                        </label>
                        <div className='flex flex-row justify-end'>
                            <button className='bg-purple-900 px-5 py-3 rounded-xl text-cyan-300' onClick={() => createProject()}>Create Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalBackground>
    )
}