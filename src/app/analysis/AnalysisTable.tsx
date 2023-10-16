import React from 'react';
import { PlayerAnalysisTable } from '@/pages/api/fetch-analysis-table/generatePlayerAnalysisTable';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type AnalysisTableProps = {
  analysisTable: PlayerAnalysisTable;
};

export function AnalysisTable({ analysisTable }: AnalysisTableProps) {
  const { headRow, bodyRows } = analysisTable;

  return (
    <div className='flow-root'>
      <div className='-mx-4 -my-2 sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle'>
          <table className='min-w-full border-separate border-spacing-0'>
            <thead>
              <tr>
                {headRow.map((headCell, headCellIdx) => {
                  return (
                    <th
                      key={headCell.id}
                      scope='col'
                      className='sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8'
                    >
                      {headCell.value}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className={classNames(
                          rowIdx !== bodyRows.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                        )}
                      >
                        {cell.value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
