'use client';

import { Card, Col, Row, Space, Typography } from 'antd';
import React, { useMemo } from 'react';
import { FixtureResult } from '@/app/fixtures/[fixture_id]/FixtureResult';
import { Fixture } from '@/app/utils/types/Fixture';
import { FixtureTimeline } from '@/app/fixtures/[fixture_id]/FixtureTimeline';

const { Paragraph, Title } = Typography;

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

  return (
    <>
      <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
        <Row>
          <Col span={24}>
            {homeGoal && awayGoal && homeParticipant && awayParticipant && (
              <FixtureResult
                homeParticipant={homeParticipant}
                awayParticipant={awayParticipant}
                homeGoal={homeGoal}
                awayGoal={awayGoal}
                leagueName={fixture.league.name}
                fixtureStateName={fixture.state.name}
              />
            )}
          </Col>
        </Row>

        <Row gutter={8}>
          <Col span={16}>
            {homeParticipant && awayParticipant && (
              <FixtureTimeline
                homeParticipant={homeParticipant}
                awayParticipant={awayParticipant}
                events={fixture.events}
              />
            )}
          </Col>
          <Col span={8}>
            <Card>fff</Card>
          </Col>
        </Row>
      </Space>
    </>
  );
}
