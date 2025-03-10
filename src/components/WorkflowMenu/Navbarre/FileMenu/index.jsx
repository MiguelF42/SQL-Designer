export default function FileMenu() {
    return(
        <div className="absolute top-12 bg-slate-700 z-20 rounded-md w-64 overflow-hidden">
            <div>
                <a href="" className="flex flex-row gap-2 w-full py-2 px-4 hover:bg-slate-900">
                    <div>L</div>
                    Settings
                </a>
                <a href="" className="flex flex-row gap-2 w-full py-2 px-4 hover:bg-slate-900">
                    <div>L</div>
                    Version History
                </a>
                <a href="" className="flex flex-row gap-2 w-full py-2 px-4 hover:bg-slate-900">
                    <div>L</div>
                    Presentation Mode
                </a>
            </div>
            <div>
                <a href="" className="flex flex-row gap-2 w-full py-2 px-4 hover:bg-slate-900">
                    <div>L</div>
                    Import
                </a>
                <a href="" className="flex flex-row gap-2 w-full py-2 px-4 hover:bg-slate-900">
                    <div>L</div>
                    Export
                </a>
            </div>
            <div>
                <a href="" className="flex flex-row gap-2 w-full py-2 px-4 hover:bg-slate-900">
                    <div>L</div>
                    Create a new Diagram
                </a>
                <a href="" className="flex flex-row gap-2 w-full py-2 px-4 hover:bg-slate-900">
                    <div>L</div>
                    Load from templates
                </a>
                <a href="" className="flex flex-row gap-2 w-full py-2 px-4 hover:bg-slate-900">
                    <div>L</div>
                    Make a copy
                </a>
            </div>
        </div>
    )
}