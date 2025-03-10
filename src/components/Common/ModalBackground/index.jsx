export default function ModalBackground({children, setIsModalOpen}) {
    return (
        <div 
            className="w-screen h-screen absolute bg-black bg-opacity-80 flex items-center justify-center z-10  top-0 left-0"
            onClick={() => setIsModalOpen(false)}>
                {children}
        </div>
    )
}