import React from 'react';
import { AnalysisTable } from '@/app/analysis/AnalysisTable';
import { PrimaryButton } from '@/app/analysis/PrimaryButton';
import { PlayerAnalysisTable } from '@/pages/api/fetch-analysis-table/generatePlayerAnalysisTable';

type AnalysisTableProps = {
  generateAnalysisResult: () => void;
  analysisButtonIsDisabled: boolean;
  analysisTable: PlayerAnalysisTable | null;
};

export function AnalysisTableSection({
  generateAnalysisResult,
  analysisButtonIsDisabled,
  analysisTable,
}: AnalysisTableProps) {
  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <div className='sm:flex-auto'>
          {/*<h1 className='text-base font-semibold leading-6 text-gray-900'>分析結果</h1>*/}
        </div>

        <div className='sm:ml-16 sm:mt-0 sm:flex-none'>
          <PrimaryButton onClick={generateAnalysisResult} disabled={analysisButtonIsDisabled}>
            分析する
          </PrimaryButton>
        </div>
      </div>

      {analysisTable && <AnalysisTable analysisTable={analysisTable} />}
    </div>
  );
}
