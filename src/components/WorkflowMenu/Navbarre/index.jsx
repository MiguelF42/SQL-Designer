import FileButton from "./FileButton"

export default function Navbarre({pushScheme, projectName}) {
    return(
        <div className="h-14 bg-slate-500 flex flex-row items-center justify-between px-4">
            <div className="flex flex-row items-center gap-x-4">
                <button onClick={() => window.location.href = "../project"}>
                    <h2 className="text-lg">
                        Init
                    </h2>
                </button>
                <FileButton />
            </div>
            <div>
                <h1 className="text-2xl font-bold">
                    {projectName}
                </h1>
            </div>
            <button onClick={pushScheme} className="px-4 h-10 bg-green-500 rounded-md">
                Save
            </button>
        </div>
    )
}