type PlayerSeasonStatsProps = {
  leagueName: string;
  season: string;
  goalsOverall: number;
  assistsOverall: number;
  appearancesOverall: number;
  yellowCardsOverall: number;
  redCardsOverall: number;
};

export function PlayerSeasonStats({
  leagueName,
  season,
  goalsOverall,
  assistsOverall,
  appearancesOverall,
  yellowCardsOverall,
  redCardsOverall,
}: PlayerSeasonStatsProps) {
  const stats = [
    { name: 'ゴール数', value: goalsOverall },
    { name: 'アシスト数', value: assistsOverall },
    { name: '出場数', value: appearancesOverall },
    { name: 'イエローカード', value: yellowCardsOverall },
    { name: 'レッドカード', value: redCardsOverall },
  ];

  return (
    <>
      <div className='border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between'>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>
          {leagueName} {season}シーズン スタッツ
        </h3>
        <div className='mt-3 flex sm:ml-4 sm:mt-0'>
          <button
            type='button'
            className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          >
            Share
          </button>
        </div>
      </div>

      {/* シーズンスタッツサマリー */}
      <div>
        <div className='mx-auto max-w-7xl'>
          <div className='grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4'>
            {stats.map((stat) => (
              <div key={stat.name} className=' px-4 py-6 sm:px-6 lg:px-8'>
                <p className='text-sm font-medium leading-6 text-gray-400'>{stat.name}</p>
                <p className='mt-2 flex items-baseline gap-x-2'>
                  <span className='text-4xl font-semibold tracking-tight'>{stat.value}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
