import {useEffect, useState} from "react";
import {get} from "@/modules/fetchHandler";
import config from "@/config";


export default function SelectUserTags({setActiveTag}) {
    const [tags, setTags] = useState()
    const token = config.token;
    useEffect(() => {
        const getTags = async () => {
            const res = await get("tag/@me", token)
            if(await res.status === 200) {
                setTags(res.data)
            }
        }
        getTags()
    }, []);
    return (
        <select onChange={e => setActiveTag(e.currentTarget.value === "null" ? null : e.currentTarget.value)} id="countries" className="bg-black border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block truncate w-56 px-4 py-2.5 mr-4">
            <option defaultValue="null" value="null">All tags</option>
            {tags && tags.map(tag => (
                <option key={tag.tagId} value={tag.tagId}>{tag.name}</option>
            ))}
        </select>
    )
}