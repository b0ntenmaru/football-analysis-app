import { blue } from '@ant-design/colors';
import { RetweetOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar, Card, Image, List, Typography } from 'antd';
import React, { useMemo } from 'react';
import { FixtureEvent, Team } from '@/app/utils/types/Fixture';

const { Paragraph, Title } = Typography;

type FixtureTimelineProps = {
  homeParticipant: Team;
  awayParticipant: Team;
  events: FixtureEvent[];
};

export function FixtureTimeline({
  homeParticipant,
  awayParticipant,
  events,
}: FixtureTimelineProps) {
  // ホームチームであるか否か
  const isHome = (participantId: number) => {
    const homeParticipantId = homeParticipant?.id as number;
    return homeParticipantId === participantId;
  };

  // eventを時系列の降順に並び替える
  const reversedEvent = useMemo(() => {
    return events.sort((a, b) => {
      if (a.minute > b.minute) {
        return -1; // aを前に移動
      } else if (a.minute < b.minute) {
        return 1; // bを前に移動
      } else {
        return 0; // 変更しない
      }
    });
  }, [events]);

  return (
    <Card style={{ height: '500px', overflowY: 'scroll' }}>
      <Title level={3}>Timeline</Title>
      <List
        itemLayout='horizontal'
        dataSource={reversedEvent}
        renderItem={(event) => (
          <List.Item style={{ gap: '10px' }}>
            <div style={{ color: '#ccc' }}>{event.minute}’</div>
            <List.Item.Meta
              style={{ alignItems: 'center' }}
              avatar={
                <Avatar
                  size={30}
                  src={
                    <Image
                      src={
                        isHome(event.participant_id)
                          ? homeParticipant?.image_path
                          : awayParticipant?.image_path
                      }
                      alt={
                        isHome(event.participant_id) ? homeParticipant?.name : awayParticipant?.name
                      }
                    />
                  }
                />
              }
              title={event.type.name}
              description={<EventDescription event={event} />}
            />
            <div>
              <EventIcon event={event} />
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}

type EventDescriptionProps = {
  event: FixtureEvent;
};

function EventDescription({ event }: EventDescriptionProps) {
  if (event.type.code === 'substitution') {
    return (
      <>
        IN: {event.player_name} / OUT: {event.related_player_name}
      </>
    );
  }

  if (
    event.type.code === 'yellowcard' ||
    event.type.code === 'VAR' ||
    event.type.code === 'penalty' ||
    event.type.code === 'goal'
  )
    return event.player_name;
}

type EventIconProps = {
  event: FixtureEvent;
};

function EventIcon({ event }: EventIconProps) {
  // 選手交代
  if (event.type.code === 'substitution') {
    return <RetweetOutlined style={{ fontSize: '20px', color: blue.primary }} />;
  }

  if (event.type.code === 'goal') {
    return <>{event.result}</>;
  }

  if (event.type.code === 'yellowcard') {
    return (
      <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNyIgeT0iNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iI0ZGRTAzQSIvPgo8L3N2Zz4K' />
    );
  }

  if (event.type.code === 'VAR') {
    return <VideoCameraOutlined />;
  }
}
