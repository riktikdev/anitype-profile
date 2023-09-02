import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  return (
    <>
      <div className='container my-4'>
        <div className='space-y-4'>
          <div className='flex items-center md:justify-between flex-col md:flex-row'>
            <div className='flex gap-6 items-center justify-center md:justify-start pb-3 w-[512px]'>
              <Avatar className='w-24 h-24'>
                <AvatarImage src='/images/avatars/fllcker.svg' alt='fllcker' />
                <AvatarFallback>FL</AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <span className='text-[16px] font-medium text-white'>fllcker</span>
                <span className='text-[14px] font-normal text-zinc-500'>Был 2 мин. назад</span>
                <span className='text-[14px] font-normal text-white w-48'>Я мега крутой чел😎 ха🧐хахаа🥳</span>
              </div>
            </div>
            <div className='flex flex-col items-center gap-y-2'>
              <div className='flex'>
                <div className='flex flex-col items-center font-medium w-28'>
                  <span className='text-[16px] text-white font-medium'>87934</span>
                  <span className='text-[15px] text-zinc-500 font-normal'>Комментария</span>
                </div>
                <div className='flex flex-col items-center font-medium w-28'>
                  <span className='text-[16px] text-white font-medium'>87934</span>
                  <span className='text-[15px] text-zinc-500 font-normal'>Подборки</span>
                </div>
                <div className='flex flex-col items-center font-medium w-28'>
                  <span className='text-[16px] text-white font-medium'>87934</span>
                  <span className='text-[15px] text-zinc-500 font-normal'>Друга</span>
                </div>              
              </div>
              <div className='hidden md:flex'>
                <div className='flex flex-col items-center font-medium cursor-pointer w-28'>
                  <span className='text-[16px] text-[#6899E1] font-medium cursor-pointer'>skyflicker</span>
                  <span className='text-[15px] text-zinc-500 font-normal'>Telegram</span>
                </div>
                <div className='flex flex-col items-center font-medium cursor-pointer w-28'>
                  <span className='text-[16px] text-[#6899E1] font-medium'>skyflicker</span>
                  <span className='text-[15px] text-zinc-500 font-normal'>Telegram</span>
                </div>
                <div className='flex flex-col items-center font-medium cursor-pointer w-28'>
                  <span className='text-[16px] text-[#6899E1] font-medium'>skyflicker</span>
                  <span className='text-[15px] text-zinc-500 font-normal'>Telegram</span>
                </div>              
              </div>
            </div>
          </div>
          <div className='flex gap-4 items-center justify-center md:justify-start'>
            <button className='text-sm text-black bg-white font-medium rounded-3xl px-4 py-2.5'>Добавить в друзья</button>
            <button className='text-sm text-black bg-white font-medium rounded-3xl px-4 py-2.5'>Написать сообщение</button>
          </div>
        </div>
      </div>
    </>
  )
}
