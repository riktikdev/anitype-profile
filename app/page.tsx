import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { notFound } from 'next/navigation';

interface Info {
  username: string;
  avatar: string;
  status: string;
  friends: string;
  subscriptions: string;
}

interface Selections {
  totalElements: number;
}

export default async function Home() {
  const [userDataResponse, userCommentsResponse, userSelectionsResponse] = await Promise.all([
    fetch('https://anitype.site/app2/users/info/root', { next: { revalidate: 600 } }),
    fetch('https://anitype.site/app2/comments/count/user/root', { next: { revalidate: 600 } }),
    fetch('https://anitype.site/app2/selections/user/root', { next: { revalidate: 600 } }),
  ]);

  if (!userDataResponse.ok || !userCommentsResponse.ok || !userSelectionsResponse.ok) {
    notFound();
  }

  const userData: Info = await userDataResponse.json();
  const userComments: number = parseInt(await userCommentsResponse.text(), 10);
  const userSelections: Selections = await userSelectionsResponse.json();

  const subscriptionIsActive = userData.subscriptions && userData.subscriptions.length > 0;

  return (
    <>
      <div className='container my-14 md:my-22'>
        <div className='space-y-4'>
          <div className='flex items-center md:justify-between flex-col md:flex-row'>
            <div className='flex gap-6 items-center justify-center md:justify-start pb-3 w-[512px]'>
              <Avatar className='w-24 h-24'>
                <AvatarImage
                  src={`https://anitype.site/app2/media/download?fileName=useravatars/${userData.avatar}`}
                  alt={userData.username}
                />
                <AvatarFallback>{userData.username}</AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <span
                  className={`text-[16px] font-medium ${
                    subscriptionIsActive ? 'text-[#ff4a6a]' : 'text-white'
                  }`}
                >
                  {userData.username}
                </span>
                <span className='text-[14px] font-normal text-zinc-500'>Был 2 мин. назад</span>
                <span className='text-[14px] font-normal text-white w-48'>{userData.status}</span>
              </div>
            </div>
            <div className='flex flex-col items-center gap-y-2'>
              <div className='flex'>
                <div className='flex flex-col items-center font-medium w-28'>
                  <span className='text-[16px] text-white font-medium'>
                    {userComments ? userComments : '-'}
                  </span>
                  <span className='text-[15px] text-zinc-500 font-normal'>Комментария</span>
                </div>
                <div className='flex flex-col items-center font-medium w-28'>
                  <span className='text-[16px] text-white font-medium'>
                    {userSelections.totalElements ? userSelections.totalElements : '-'}
                  </span>
                  <span className='text-[15px] text-zinc-500 font-normal'>Подборки</span>
                </div>
                <div className='flex flex-col items-center font-medium w-28'>
                  <span className='text-[16px] text-white font-medium'>
                    {userData.friends && userData.friends.length > 0
                      ? userData.friends.length
                      : '-'}
                  </span>
                  <span className='text-[15px] text-zinc-500 font-normal'>Друзей</span>
                </div>
              </div>
              <div className='hidden md:flex'>
                <div className='flex flex-col items-center font-medium cursor-pointer w-28'>
                  <span className='text-[16px] text-[#6899E1] font-medium cursor-pointer'>
                    skyflicker
                  </span>
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
            <button className='text-sm text-black bg-white font-medium rounded-3xl px-4 py-2.5'>
              Добавить в друзья
            </button>
            <button className='text-sm text-black bg-white font-medium rounded-3xl px-4 py-2.5'>
              Написать сообщение
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
