'use client';

import React, { useMemo } from 'react';
import { Fixture } from '@/app/utils/types/Fixture';
import { List } from '@/app/fixtures/[fixture_id]/List';
import { SectionHeading } from '@/app/fixtures/[fixture_id]/SectionHeading';
import { Panel } from '@/app/fixtures/[fixture_id]/Panel';
import { FixtureHeader } from '@/app/fixtures/[fixture_id]/FixtureHeader';

type FixtureDetailUiProps = {
  fixture: Fixture;
};

export function FixtureDetailUi({ fixture }: FixtureDetailUiProps) {
  const awayGoal = useMemo(() => {
    return fixture.statistics.find(
      (statistic) => statistic.location === 'away' && statistic.type.code === 'goals',
    )?.data.value;
  }, [fixture.statistics]);

  const homeGoal = useMemo(() => {
    return fixture.statistics.find(
      (statistic) => statistic.location === 'home' && statistic.type.code === 'goals',
    )?.data.value;
  }, [fixture.statistics]);

  const homeParticipant = useMemo(() => {
    return fixture.participants.find((participant) => participant.meta.location === 'home');
  }, [fixture.participants]);

  const awayParticipant = useMemo(() => {
    return fixture.participants.find((participant) => participant.meta.location === 'away');
  }, [fixture.participants]);

  console.log(fixture);

  return (
    <div>
      <div className='mb-5'>
        {/* page heading */}
        {homeParticipant && awayParticipant && (
          <FixtureHeader
            homeGoal={homeGoal}
            awayGoal={awayGoal}
            homeTeam={homeParticipant}
            awayTeam={awayParticipant}
            leagueName={fixture.league.name}
            stateName={fixture.state.name}
          />
        )}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        {/* main column */}
        <div className='col-span-2'>
          <div className='mb-5'>
            <Panel>
              <SectionHeading>Section Title</SectionHeading>
              <List />
            </Panel>
          </div>

          <div>
            <Panel>
              <SectionHeading>Section Title</SectionHeading>
            </Panel>
          </div>
        </div>

        {/* sub column */}
        <div>
          <div className='col-span-1'>
            <Panel>aaa</Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
