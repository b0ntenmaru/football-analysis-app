import { memo } from 'react';
import { Checkboxes } from '@/app/analysis/Checkboxes';
import { statsList } from '@/app/analysis/statsList';

type StatsSelectModalContentsProps = {
  selectedStats: string[];
  handleChangeStats: (value: string) => void;
};

export const StatsSelectModalContents = memo(function StatsSelectModalContents({
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
          <Checkboxes
            statsList={statsList.basicInfoStats}
            selectedStats={selectedStats}
            handleChangeStats={handleChangeStats}
          />
        </div>

        <div className='mb-6'>
          <legend className='text-base font-semibold leading-6 text-gray-900'>試合</legend>
          <Checkboxes
            statsList={statsList.appearanceStats}
            selectedStats={selectedStats}
            handleChangeStats={handleChangeStats}
          />
        </div>

        <div className='mb-6'>
          <legend className='text-base font-semibold leading-6 text-gray-900'>オフェンス</legend>
          <Checkboxes
            statsList={statsList.attackingStats}
            selectedStats={selectedStats}
            handleChangeStats={handleChangeStats}
          />
        </div>

        <div className='mb-6'>
          <legend className='text-base font-semibold leading-6 text-gray-900'>ディフェンス</legend>
          <Checkboxes
            statsList={statsList.defensiveStats}
            selectedStats={selectedStats}
            handleChangeStats={handleChangeStats}
          />
        </div>

        <div className='mb-6'>
          <legend className='text-base font-semibold leading-6 text-gray-900'>
            パフォーマンス
          </legend>
          <Checkboxes
            statsList={statsList.performanceStats}
            selectedStats={selectedStats}
            handleChangeStats={handleChangeStats}
          />
        </div>
      </div>
    </div>
  );
});
