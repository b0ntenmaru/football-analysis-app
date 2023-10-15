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
