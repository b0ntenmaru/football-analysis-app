'use client';

import { Card, Col, Row, Space, Typography } from 'antd';
import React, { useMemo } from 'react';
import { Fixture } from '@/app/utils/types/Fixture';
import { FixtureResult } from '@/app/fixtures/[fixture_id]/FixtureResult';

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

  const homeParticipant = fixture.participants.find(
    (participant) => participant.meta.location === 'home',
  );
  const awayParticipant = fixture.participants.find(
    (participant) => participant.meta.location === 'away',
  );

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

        <Row gutter={16}>
          <Col span={12}>
            <Card>col-12</Card>
          </Col>
          <Col span={12}>
            <Card>col-12</Card>
          </Col>
        </Row>
      </Space>
    </>
  );
}
