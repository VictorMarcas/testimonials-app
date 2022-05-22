import { DotsHorizontalIcon } from '@heroicons/react/outline';
import userAvatarImage from '../assets/images/avatar/user-avatar.png';
const Avatar = () => {
    return (
        <div className="flex items-center gap-x-4">
            <img src={userAvatarImage} className="object-cover object-center w-12 h-12 rounded-full shrink-0" alt="Victor Marcas" />
            <span className='flex-1 text-sm font-bold leading-tight text-gray-900 truncate'>Victor Marcas</span>
            <button className="flex items-center justify-center w-6 h-6 border-transparent focus:outline-none">
                <DotsHorizontalIcon className='w-4 h-6 fill-gray-900' />
            </button>
        </div>
    )
}

export default Avatar;