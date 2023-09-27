'use client';

import React from 'react';
import { Panel } from '@/app/fixtures/[fixture_id]/Panel';
import { League } from '@/app/leagues/League';
import { LeagueList } from '@/app/leagues/LeagueList';

type LeagueListProps = {
  leagueList: League[];
};

export function LeaguesUi({ leagueList }: LeagueListProps) {
  return (
    <div>
      <div className='mb-5'>
        <Panel>
          <div className='min-w-0 flex-1'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
              リーグ一覧
            </h2>
          </div>
        </Panel>
      </div>

      <div>
        <Panel>
          <LeagueList leagues={leagueList} />
        </Panel>
      </div>
    </div>
  );
}
