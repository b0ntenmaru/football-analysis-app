import { Checkboxes } from '@/app/analysis/Checkboxes';
import { statsList } from '@/app/analysis/statsList';

type StatsSelectModalContentsProps = {
  selectedStats: string[];
  handleChangeStats: (value: string) => void;
};

export function StatsSelectModalContents({
  selectedStats,
  handleChangeStats,
}: StatsSelectModalContentsProps) {
  return (
    <div className='overflow-y-scroll h-96'>
      {/* 選択肢の一覧 */}
      <div>
        {/* 基本情報 */}
        <div className='mb-6'>
          <legend className='text-base font-semibold leading-6 text-gray-900'>基本情報</legend>
          <Checkboxes statsList={statsList.basicInfoStats} handleChangeStats={handleChangeStats} />
        </div>

        <div className='mb-6'>
          <legend className='text-base font-semibold leading-6 text-gray-900'>試合</legend>
          <Checkboxes statsList={statsList.appearanceStats} handleChangeStats={handleChangeStats} />
        </div>

        <div className='mb-6'>
          <legend className='text-base font-semibold leading-6 text-gray-900'>オフェンス</legend>
          <Checkboxes statsList={statsList.attackingStats} handleChangeStats={handleChangeStats} />
        </div>

        <div className='mb-6'>
          <legend className='text-base font-semibold leading-6 text-gray-900'>ディフェンス</legend>
          <Checkboxes statsList={statsList.defensiveStats} handleChangeStats={handleChangeStats} />
        </div>

        <div className='mb-6'>
          <legend className='text-base font-semibold leading-6 text-gray-900'>
            パフォーマンス
          </legend>
          <Checkboxes
            statsList={statsList.performanceStats}
            handleChangeStats={handleChangeStats}
          />
        </div>
      </div>
    </div>
  );
}
