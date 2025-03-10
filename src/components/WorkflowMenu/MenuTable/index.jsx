

export function MenuTable({node, setSelectedNode}) {

    return (
        <div className="border-b-2 border-[#444547] w-full h-16 flex items-center justify-between">
            <p className="text-white ml-5">{node.data.label}</p>
            <a className="text-white text-xl cursor-pointer mr-8 hover:text-gray-400" onClick={() => setSelectedNode(node)}>{">"}</a>
        </div>
    )
}