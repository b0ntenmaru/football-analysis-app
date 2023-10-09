import React from 'react';
import { Badge } from '@/app/analysis/Badge';
import { SelectStatsComboBox } from '@/app/analysis/SelectStatsComboBox';
import { StatsMappingItem } from '@/app/analysis/statsMapping';

type SelectStatsSectionProps = {
  statsList: StatsMappingItem[];
  handleChangeStats: (stats: StatsMappingItem[]) => void;
  handleRemoveStats: (statsId: string) => void;
};

export const SelectStatsSection = React.memo(function SelectStatsSection({
  statsList,
  handleChangeStats,
  handleRemoveStats,
}: SelectStatsSectionProps) {
  return (
    <>
      <div className='md:flex md:items-center md:justify-between mb-8 mt-8'>
        <div className='min-w-0 flex-1'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight'>
            スタッツを選ぶ
          </h2>
        </div>
      </div>

      <div className='mb-4'>
        <SelectStatsComboBox selectedStats={statsList} handleChangeStats={handleChangeStats} />
      </div>

      {statsList.map((stats, i) => (
        <div key={i} className='inline-block mr-2 mb-2'>
          <Badge label={stats.label} onRemove={() => handleRemoveStats(stats.value)} />
        </div>
      ))}
    </>
  );
});
