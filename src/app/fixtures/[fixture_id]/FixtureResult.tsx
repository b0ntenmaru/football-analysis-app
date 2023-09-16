import { Avatar, Card, Image } from 'antd';
import { green } from '@ant-design/colors';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import React from 'react';
import { Team } from '@/app/utils/types/Fixture';

type FixtureResultProps = {
  homeParticipant: Team;
  awayParticipant: Team;
  homeGoal: number;
  awayGoal: number;
  leagueName: string;
  fixtureStateName: string;
};

export function FixtureResult({
  homeParticipant,
  awayParticipant,
  homeGoal,
  leagueName,
  fixtureStateName,
  awayGoal,
}: FixtureResultProps) {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 60, alignItems: 'center' }}>
        {/* ホームチーム */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div>
              <div style={{ fontSize: '22px', fontWeight: 'bold' }}>{homeParticipant.name}</div>
              <div style={{ fontSize: '12px', color: '#ccc' }}>
                {leagueName} {homeParticipant.meta.position}位
              </div>
            </div>
            <div>
              <Avatar
                size={56}
                src={<Image src={homeParticipant.image_path} alt={homeParticipant.name} />}
              />
            </div>
          </div>
          <div style={{ fontSize: '48px' }}>{homeGoal}</div>
          {homeParticipant.meta.winner && (
            <div style={{ color: green.primary }}>
              <CaretLeftOutlined />
            </div>
          )}
        </div>

        {/* state */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{fixtureStateName}</div>
        </div>

        {/* アウェーチーム */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            {awayParticipant?.meta.winner && (
              <div style={{ color: green.primary }}>
                <CaretRightOutlined />
              </div>
            )}
            <div style={{ fontSize: '48px' }}>{awayGoal}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div>
                <Avatar
                  size={56}
                  src={<Image src={awayParticipant.image_path} alt={awayParticipant.name} />}
                />
              </div>
              <div>
                <div style={{ fontSize: '22px', fontWeight: 'bold' }}>{awayParticipant.name}</div>
                <div style={{ fontSize: '12px', color: '#ccc' }}>
                  {leagueName} {awayParticipant.meta.position}位
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
