'use client';

import React from 'react';
import { Panel } from '@/app/fixtures/[fixture_id]/Panel';
import { SectionHeading } from '@/app/fixtures/[fixture_id]/SectionHeading';
import type { LeagueStats } from '@/app/leagues/[season_id]/LeagueStats';
import { TopScorers } from '@/app/leagues/[season_id]/TopScorers';

type LeagueStatsUiProps = {
  leagueStats: LeagueStats;
};

export const LeagueStatsUi = ({ leagueStats }: LeagueStatsUiProps) => (
  <div>
    <div className='mb-5'>
      <Panel>
        <div className='min-w-0 flex-1'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
            <div className='flex items-center gap-6'>
              <div>
                <img
                  className='inline-block h-14 w-14 rounded-md'
                  src={leagueStats.image}
                  alt={leagueStats.name}
                />
              </div>
              <div>{leagueStats.name}</div>
            </div>
          </h2>
        </div>
      </Panel>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
      {/* main column */}
      <div className='col-span-2'>
        <div className='mb-5'>
          <Panel>
            <SectionHeading>Section Title</SectionHeading>
          </Panel>
        </div>
      </div>

      {/* sub column */}
      <div>
        <div className='col-span-1'>
          {/* トップ選手 */}
          {leagueStats.top_scorers && (
            <Panel>
              <SectionHeading>Top Scorers</SectionHeading>
              <div>
                <TopScorers topScorers={leagueStats.top_scorers} />
              </div>
            </Panel>
          )}
        </div>
      </div>
    </div>
  </div>
);
