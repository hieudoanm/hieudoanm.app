import players from '@web/json/chess/players/2800.json';
import { AppLayout } from '@web/layout/AppLayout';
import Link from 'next/link';
import { FC } from 'react';

export const Chess2800: FC = () => {
  return (
    <AppLayout full nav>
      <div className='container mx-auto'>
        <div className='p-4 md:p-8'>
          <div className='border-base-content rounded-xl border'>
            <table className='table'>
              <caption className='py-2'>2800 Clubs ({players.length})</caption>
              <thead>
                <tr className='border-base-content border-t'>
                  <th>Username</th>
                  <th>Name </th>
                  <th align='right'>Peak</th>
                </tr>
              </thead>
              <tbody>
                {players.map(
                  ({
                    username,
                    name,
                    live,
                  }: {
                    username: string;
                    name: string;
                    live: number;
                  }) => {
                    return (
                      <tr
                        key={username}
                        className='border-base-content border-t'>
                        <td>
                          <Link href={`/apps/chess/players/2800/${username}`}>
                            {username}
                          </Link>
                        </td>
                        <td>{name}</td>
                        <td align='right'>{live}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
