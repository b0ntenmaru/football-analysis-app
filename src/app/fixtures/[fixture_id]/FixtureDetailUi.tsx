'use client';

import React, { useMemo } from 'react';
import { Fixture } from '@/app/utils/types/Fixture';

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

  return <>fixture detail ui</>;
}
