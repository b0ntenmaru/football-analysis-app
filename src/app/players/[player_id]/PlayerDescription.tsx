type PlayerDescriptionProps = {
  age: number;
  nationality: string;
  height: string;
  weight: string;
  position: string;
};

export function PlayerDescription({
  age,
  nationality,
  height,
  weight,
  position,
}: PlayerDescriptionProps) {
  return (
    <div>
      <div className='px-4 sm:px-0'>
        <h3 className='text-base font-semibold leading-7 text-gray-900'>基本情報</h3>
      </div>
      <div className='mt-6 border-t border-gray-100'>
        <dl className='divide-y divide-gray-100'>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>国籍</dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {nationality}
            </dd>
          </div>

          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>年齢</dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{age}</dd>
          </div>

          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>身長</dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{height}</dd>
          </div>

          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>体重</dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{weight}</dd>
          </div>

          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>ポジション</dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {position}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
