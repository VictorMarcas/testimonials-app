import Avatar from '../ui/Avatar.jsx';
import TalentlyLogoImage from '../assets/images/default/talently-logo.svg';

const Sidebar = () => {
    return (
        <div aria-label='sidebar' className="flex flex-col p-6 bg-gray-100 gap-y-6">
            <a href="" className='inline-flex'>
                <img src={TalentlyLogoImage} alt="Talently" className='w-10 h-auto' />
            </a>
            <nav className="flex-1 w-full py-6">
                <ul className='-mx-6'>
                    <li>
                        <a href="" className='flex items-center px-6 py-2 text-sm font-bold leading-6 text-gray-800 gap-x-2'>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className='flex items-center px-6 py-2 text-sm font-bold leading-6 text-indigo-500 bg-gray-200 gap-x-2'>
                            <span>Testimonial</span>
                        </a>
                        <ul>
                            <li>
                                <a href="" className='flex items-center px-6 py-2 text-sm font-normal leading-6 text-gray-400'>
                                    <span>Recent's</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className='flex items-center px-6 py-2 text-sm font-normal leading-6 text-gray-400'>
                                    <span>Stand by</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className='flex items-center px-6 py-2 text-sm font-normal leading-6 text-gray-400'>
                                    <span>Discontinued</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="" className='flex items-center px-6 py-2 text-sm font-bold leading-6 text-gray-800 gap-x-2'>
                            <span>Reports</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className='flex items-center px-6 py-2 text-sm font-bold leading-6 text-gray-800 gap-x-2'>
                            <span>Feed's</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <Avatar />
        </div>
    )
}


export default Sidebar;