import { Search } from 'lucide-react'

const Header = () => {
    return (
        <header className='sticky top-0 z-40 w-full p-2'>
            <div className='container flex h-14 items-center'>
                <nav className='relative z-30 flex flex-1 items-center justify-between'>
                    <div className='flex items-center'>
                        <span className='text-xl font-bold text-white'>AniType</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <span className='text-lg font-medium text-zinc-600 hover:text-white cursor-pointer transition'>Главное</span>
                        <span className='text-lg font-medium text-zinc-600 hover:text-white cursor-pointer transition'>Каталог</span>
                        <span className='text-lg font-medium text-zinc-600 hover:text-white cursor-pointer transition'>Моё</span>
                        <span className='text-lg font-medium text-zinc-600 hover:text-white cursor-pointer transition'><Search size='20' /></span>
                    </div>
                    <div className='flex items-center'>
                    <span className='text-lg font-medium text-zinc-600 hover:text-white cursor-pointer transition'>root</span>
                    </div>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;