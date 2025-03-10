import { useState, useEffect, useRef } from 'react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

// import delay from '../../../modules/timeHandler';

import AttributesMenu from '../AttributesMenu'

export default function AttributesButton({field, setField, deleteField}) {

    const [isVisibile, setIsVisible] = useState(false);
    const container = useRef(null);

    useEffect(() => {
        const handler = (event) => {
            if (!container.current.contains(event.target)) {
                setIsVisible(false);
            }
        }
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    });

    return (
        <div ref={container} className='w-1/3 h-full relative'>
        {/* <div className='w-1/3 h-full relative'> */}
            <button
            className="text-white w-full h-full flex items-center justify-center hover:bg-[#444547] rounded-md"
            onClick={() => {setIsVisible(!isVisibile)}}>
            <EllipsisHorizontalIcon className="h-4" />
            </button>
            {isVisibile && <AttributesMenu field={field} setField={setField} setIsVisible={setIsVisible} deleteField={deleteField}/>}
        </div>
    )
}

// import React, { useState, useRef, useEffect } from "react";

// const MenuToggle = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleMenuItemClick = (menuItem) => {
//     console.log(`Clicked on ${menuItem}`);
//     // Handle the menu item click
//   };

//   return (
//     <div>
//       <button onClick={toggleMenu}>Toggle Menu</button>
//       {isMenuOpen && (
//         <div ref={menuRef} style={menuStyles}>
//           <ul>
//             <li onClick={() => handleMenuItemClick("Item 1")}>Item 1</li>
//             <li onClick={() => handleMenuItemClick("Item 2")}>Item 2</li>
//             <li onClick={() => handleMenuItemClick("Item 3")}>Item 3</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// const menuStyles = {
//   position: "absolute",
//   top: "50px",
//   left: "0",
//   backgroundColor: "black",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   padding: "10px",
//   borderRadius: "4px",
// };

// export default MenuToggle;