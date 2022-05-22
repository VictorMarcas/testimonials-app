import { useRef, useEffect } from 'react';

const ContextMenu = ({ onOutSideClick }) => {
    const refMenu = useRef(null);
    
    useEffect (() => {
        const handleCLickOutside = (event) => {
            if (refMenu.current && !refMenu.current.contains(event.target)) {
                onOutSideClick();
            }
        }
        document.addEventListener('click', handleCLickOutside, true);

        return () => {
            document.removeEventListener('click', handleCLickOutside, true);
        }
        
    }, [onOutSideClick]);
    
    return (
        <div ref={refMenu} className='absolute w-40 p-3 bg-white z-[2] rounded-lg top-8 right-8 drop-shadow-lg'>
            <div className='flex flex-col -mx-3'>
                <button className="flex items-center w-full px-4 py-2 text-sm leading-6 text-gray-800 focus:outline-none hover:text-indigo-500 hover:bg-gray-100">Information</button>
                <button className="flex items-center w-full px-4 py-2 text-sm leading-6 text-gray-800 focus:outline-none hover:text-indigo-500 hover:bg-gray-100">Edit</button>
                <button className="flex items-center w-full px-4 py-2 text-sm leading-6 text-pink-500 focus:outline-none hover:text-pink-500 hover:bg-gray-100">Delete</button>
            </div>
        </div>
    )
}

export default ContextMenu;