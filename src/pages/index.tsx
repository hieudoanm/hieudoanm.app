import { NextPage } from 'next';
import Link from 'next/link';
import {
  FaAppStore,
  FaChessKnight,
  FaLinkedin,
  FaSquareGithub,
  FaSquareTwitter,
} from 'react-icons/fa6';

const HomePage: NextPage = () => {
  return (
    <div className='h-screen w-screen bg-gray-100 p-8'>
      <div className='flex h-full flex-col items-center justify-center gap-y-8 text-black'>
        <p className='text-xl font-black tracking-wide uppercase'>Hieu Doan</p>
        <div className='flex flex-col gap-y-4'>
          <p className='text-center text-lg font-black tracking-wide uppercase'>
            Apps
          </p>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            {[
              {
                id: 'chess',
                href: 'https://hieudoanm.github.io/chess',
                name: 'chess',
                icon: <FaChessKnight />,
              },
              {
                id: 'nothing',
                href: 'https://hieudoanm.github.io/nothing',
                name: 'nothing',
                icon: <FaAppStore />,
              },
            ].map(({ id, href, name, icon }) => {
              return (
                <div
                  key={id}
                  className='flex items-center gap-x-1 border-b border-dotted'>
                  {icon}
                  <Link
                    href={href}
                    target='_blank'
                    className='tracking-wide lowercase'>
                    {name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-col gap-y-4'>
          <p className='text-center text-lg font-black tracking-wide uppercase'>
            Profile
          </p>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            {[
              {
                id: 'github',
                href: 'https://github.com/hieudoanm',
                name: 'GitHub',
                icon: <FaSquareGithub />,
              },
              {
                id: 'twitter',
                href: 'https://x.com/hieudoanm',
                name: 'Twitter',
                icon: <FaSquareTwitter />,
              },
              {
                id: 'linkedin',
                href: 'https://www.linkedin.com/in/hieudoanm',
                name: 'LinkedIn',
                icon: <FaLinkedin />,
              },
            ].map(({ id, href, name, icon }) => {
              return (
                <div
                  key={id}
                  className='flex items-center gap-x-1 border-b border-dotted'>
                  {icon}
                  <Link
                    href={href}
                    target='_blank'
                    className='tracking-wide lowercase'>
                    {name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const dynamic = 'force-static';

export default HomePage;
