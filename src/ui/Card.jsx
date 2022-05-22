import { useState } from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { TwitterIcon, FacebookIcon, LinkedinIcon } from '../utils/SocialMediaIcons.jsx';
import ContextMenu from './ContextMenu';

const Card = ({ id, avatar, fullname, profession, phone, email, companyLogo }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <div className="relative flex items-start gap-4 p-4 bg-white rounded-lg">
            <figure className="mt-3 overflow-hidden rounded-full w-14 h-14 shrink-0">
                <img src={avatar} alt={fullname} className="object-cover object-center w-full h-full" />
            </figure>
            <div className="flex-1 min-w-0 divide-y divide-gray-100 relative z-[1]">
                <div className="py-3 pr-4 space-y-1">
                    <h4 className='text-base font-semibold leading-tight text-gray-800 truncate'>{ fullname }</h4>
                    <p className='text-sm font-normal leading-tight text-gray-400 truncate'>{ profession }</p>
                </div>
                <div className="flex items-center py-3 gap-x-3">
                    { companyLogo && <img src={companyLogo} className="w-auto h-4 shrink-0" alt="company logo" /> }
                    <div className='flex items-center justify-end flex-1 gap-4'>
                        <a href="" className='text-gray-500 transition-colors duration-200 hover:text-blue-400'>
                            <TwitterIcon />
                        </a>
                        <a href="" className='text-gray-500 transition-colors duration-200 hover:text-blue-800'>
                            <FacebookIcon /> 
                        </a>
                        <a href="" className='text-gray-500 transition-colors duration-200 hover:text-blue-600'>
                            <LinkedinIcon /> 
                        </a>
                    </div>
                </div>
            </div>
            <button type="button" onClick={() => handleShowMenu() } className='absolute z-[2] inline-flex items-center justify-center w-6 h-6 text-gray-900 top-4 right-4 focus:outline-none hover:outline-indigo-500'>
                <DotsHorizontalIcon className='w-4 h-4 fill-current' />
            </button>
            { showMenu &&  <ContextMenu onOutSideClick={ () => setShowMenu(false) } /> }
        </div>
    )
}


export default Card;