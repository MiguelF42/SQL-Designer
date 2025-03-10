import LeftBarButton from "../LeftBarButton";
import {
    ChatBubbleBottomCenterIcon,
    StarIcon,
    CircleStackIcon,
    FolderPlusIcon, Square3Stack3DIcon
} from "@heroicons/react/16/solid";
import {} from "@heroicons/react/24/outline";


export default function LeftBar({menu, setMenu}) {
    return (
        <div className="flex flex-col">
            <div className="border-b-[1px] border-gray-500 flex flex-col pb-2">
                <LeftBarButton label={"My projects"} icon={<CircleStackIcon className="w-5" />} link={"projects"} active={menu === "projects"} setMenu={setMenu}/>
                <LeftBarButton label={"Create new tags"} icon={<FolderPlusIcon className="w-5" />} link={"newTags"} active={false} setMenu={setMenu} />
                <LeftBarButton label={"My favorites"} icon={<StarIcon className="w-5" />} link={"favorites"} active={menu === "favorites"} setMenu={setMenu}/>
            </div>
            <div className="pt-2">
                <LeftBarButton label={"Templates"} icon={<Square3Stack3DIcon className="w-5" />} link={"templates"} active={menu === "templates"} setMenu={setMenu}/>
            </div>
        </div>
    )
}