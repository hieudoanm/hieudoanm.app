import { AppLayout } from '@web/layout/AppLayout';
import { ChangeEvent, FC, useState } from 'react';

type WeightUnit = 'ton' | 'pound' | 'ounce' | 'kg' | 'g' | 'mg';

const weightRates: Record<WeightUnit, number> = {
  ton: 1,
  pound: 2_000,
  ounce: 32_000,
  kg: 907.18474,
  g: 907184.74,
  mg: 907184740,
};

const convert =
  (rates: Record<string, number>) =>
  (from: string, anount: number): Record<string, number> => {
    const tos: string[] = Object.keys(rates);
    const result: Record<string, number> = {} as Record<string, number>;
    for (const to of tos) {
      result[to] = parseFloat(((anount * rates[to]) / rates[from]).toFixed(2));
    }
    return result;
  };

const convertWeight = convert(weightRates);

export const Weight: FC = () => {
  const [weight, setWeight] = useState<Record<WeightUnit, number>>(weightRates);

  return (
    <AppLayout nav full>
      <div className='container mx-auto h-full'>
        <div className='h-full p-4 md:p-8'>
          <div className='flex h-full items-center justify-center'>
            <div className='flex flex-col gap-y-4 md:gap-y-8'>
              <div className='flex flex-col gap-y-4'>
                <span className='capitalize'>imperial</span>
                <div className='join join-vertical lg:join-horizontal w-full'>
                  <label className='input join-item input-bordered flex w-full items-center gap-2'>
                    <input
                      type='number'
                      name='ton'
                      placeholder='ton'
                      min={0}
                      value={weight.ton}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const newTon: number = parseFloat(event.target.value);
                        setWeight(convertWeight('ton', newTon));
                      }}
                      className='grow'
                    />
                    <span>ton</span>
                  </label>
                  <label className='input join-item input-bordered flex w-full items-center gap-2'>
                    <input
                      type='number'
                      name='pound'
                      placeholder='pound'
                      min={0}
                      value={weight.pound}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const newPound: number = parseFloat(event.target.value);
                        setWeight(convertWeight('pound', newPound));
                      }}
                      className='grow'
                    />
                    <span>pound</span>
                  </label>
                  <label className='input join-item input-bordered flex w-full items-center gap-2'>
                    <input
                      type='number'
                      name='ounce'
                      placeholder='ounce'
                      min={0}
                      value={weight.ounce}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const newOunce: number = parseFloat(event.target.value);
                        setWeight(convertWeight('ounce', newOunce));
                      }}
                      className='grow'
                    />
                    <span>ounce</span>
                  </label>
                </div>
              </div>
              <div className='flex flex-col gap-y-4'>
                <span className='capitalize'>metric</span>

                <div className='join join-vertical lg:join-horizontal w-full'>
                  <label className='input join-item input-bordered flex w-full items-center gap-2'>
                    <input
                      type='number'
                      name='kg'
                      placeholder='kg'
                      min={0}
                      value={weight.kg}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const newKg: number = parseFloat(event.target.value);
                        setWeight(convertWeight('kg', newKg));
                      }}
                      className='grow'
                    />
                    <span>kg</span>
                  </label>
                  <label className='input join-item input-bordered flex w-full items-center gap-2'>
                    <input
                      type='number'
                      name='g'
                      placeholder='g'
                      min={0}
                      value={weight.g}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const newG: number = parseFloat(event.target.value);
                        setWeight(convertWeight('g', newG));
                      }}
                      className='grow'
                    />
                    <span>g</span>
                  </label>
                  <label className='input join-item input-bordered flex w-full items-center gap-2'>
                    <input
                      type='number'
                      name='mg'
                      placeholder='mg'
                      min={0}
                      value={weight.mg}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const newMg: number = parseFloat(event.target.value);
                        setWeight(convertWeight('mg', newMg));
                      }}
                      className='grow'
                    />
                    <span>mg</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
