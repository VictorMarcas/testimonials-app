import { MenuAlt1Icon } from '@heroicons/react/outline';

const Header = ({ title, children }) => {
    return (
        <div className="flex items-center py-10 gap-x-4">
            <MenuAlt1Icon className='w-6 h-6 text-gray-900 shrink-0' />
            <h1 className='flex-1 text-2xl font-bold leading-tight'>{ title }</h1>
            { children }
        </div>
    )
}

export default Header;