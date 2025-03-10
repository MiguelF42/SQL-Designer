import Link from "next/link";

export default function LeftBarButton({label, icon, link, active, setMenu}) {
    return (
        <button onClick={() => setMenu(link)} className="mt-1">
            <div className={`flex items-center p-2 ${active ? "bg-[#444547]" : "hover:bg-[#444547]"} rounded-md w-72 text-white`}>
                {icon}
                <span className="ml-2">{label}</span>
            </div>
        </button>
    )
}