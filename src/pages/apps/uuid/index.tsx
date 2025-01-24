import { AppLayout } from '@web/layout/AppLayout';
import { copyToClipboard } from '@web/utils/copy';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { v4 } from 'uuid';

const UuidPage: NextPage = () => {
  const [uuid, setUuid] = useState(v4());
  return (
    <AppLayout nav full>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <div className='flex h-full items-center justify-center'>
            <div className='join join-vertical md:join-horizontal w-full'>
              <label className='input join-item input-bordered border-base-content flex w-full items-center gap-2'>
                <input
                  id='uuid'
                  name='uuid'
                  placeholder='UUID'
                  className='grow'
                  value={uuid}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setUuid(event?.target.value)
                  }
                />
              </label>

              <button
                className='btn btn-outline join-item'
                onClick={() => setUuid(v4())}>
                Generate
              </button>
              <button
                className='btn btn-outline join-item'
                onClick={() => copyToClipboard(uuid)}>
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default UuidPage;
