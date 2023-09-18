'use client';

import React, { useMemo } from 'react';
import { Fixture } from '@/app/utils/types/Fixture';
import { List } from '@/app/fixtures/[fixture_id]/List';
import { SectionHeading } from '@/app/fixtures/[fixture_id]/SectionHeading';

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

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div>
      <div className='mb-5'>
        {/* page heading */}
        <div className='md:flex md:items-center md:justify-between'>
          <div className='min-w-0 flex-1'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
              Back End Developer
            </h2>
          </div>
          <div className='mt-4 flex md:ml-4 md:mt-0'>
            <button
              type='button'
              className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
            >
              Edit
            </button>
            <button
              type='button'
              className='ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Publish
            </button>
          </div>
        </div>
      </div>

      {/*<div>*/}
      {/*  <FixtureTabItems />*/}
      {/*</div>*/}

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        {/* main column */}
        <div className='col-span-2 p-4'>
          <div className=' mb-5'>
            <div>
              <SectionHeading>Section Title</SectionHeading>
              <List />
            </div>

            <div>
              <SectionHeading>Section Title</SectionHeading>
            </div>
          </div>
        </div>

        {/* sub column */}
        <div>
          <div className='col-span-1 p-4'></div>
        </div>
      </div>
    </div>
  );
}
