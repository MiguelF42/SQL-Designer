export default function EdgeMenu(position,setPosition,setDependancy,deleteEdge) {
    
    const onClick = (e) => {
        console.log(e);
        setDependancy(e);
        setPosition(false);
    };

    return (
        <div className="bg-slate-900 text-white py-2 px-4 rounded-md absolute flex gap-4" style={{top: position.y, left: position.x}}>
            <button onClick={() => onClick(1)}>1:1</button>
            <button onClick={() => onClick(2)}>1:N</button>
            <button onClick={() => onClick(3)}>N:1</button>
            <button onClick={deleteEdge}>X</button>
        </div>
    );
}