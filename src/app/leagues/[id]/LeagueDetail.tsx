'use client';

import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Image,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useMemo, useState } from 'react';
import type { League, Season } from '@/app/utils/types/League';
import type { Standing } from '@/app/utils/types/Standing';

type LeagueProps = {
  league: League;
  standings: Standing[];
  currentSeason: Season;
};

export function LeagueDetail({ league, standings, currentSeason }: LeagueProps) {
  const [selectedSeasonId, setSelectedSeasonId] = useState<number>(currentSeason.id);

  const seasons = useMemo(() => {
    return league.seasons.sort((a, b) => {
      return b.id - a.id;
    });
  }, [league.seasons]);

  const onChangeSeason = (value: number) => {
    setSelectedSeasonId(value);
  };

  const formStyle = (form: 'W' | 'L' | 'D') => {
    if (form === 'W') {
      return styles.win;
    } else if (form === 'L') {
      return styles.lose;
    } else {
      return styles.draw;
    }
  };

  return (
    <Box>
      {/* ヘッダー */}
      <Card p={6}>
        <Flex alignItems={'center'} justifyContent={'space-between'} gap={2}>
          <Flex alignItems={'center'} gap={2}>
            <Box>
              <Image src={league.image_path} width={120} alt={league.name} />
            </Box>

            <Box>
              <Flex flexDirection={'column'} gap={2}>
                <Heading size={'lg'}>{league.name}</Heading>
                <Flex alignItems={'center'} gap={2}>
                  <Avatar size={'xs'} src={league.country.image_path} name={league.country.name} />
                  <Text>{league.country.name}</Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>

          <Box>
            <Select onChange={(e) => onChangeSeason(Number(e.target.value))}>
              {seasons.map((season) => {
                return (
                  <option key={season.id} value={season.id}>
                    {season.name}
                  </option>
                );
              })}
            </Select>
          </Box>
        </Flex>
      </Card>

      <Card>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>チーム</Th>
                <Th>最近の調子</Th>
                <Th>勝ち点</Th>
              </Tr>
            </Thead>
            <Tbody>
              {standings.map((standing) => {
                const participant = standing.participant;

                return (
                  <Tr key={standing.id}>
                    <Td>{standing.position}</Td>
                    <Td>
                      <Flex alignItems={'center'} gap={2}>
                        <Avatar size={'xs'} src={participant.image_path} />
                        <Text>{participant.name}</Text>
                      </Flex>
                    </Td>
                    {/* ここ各試合(fixtures)詳細に飛ばせれる */}
                    <Td>
                      <Flex gap={'8px'}>
                        {standing.form.map((formItem) => {
                          return (
                            <Flex
                              key={formItem.id}
                              justifyContent={'center'}
                              alignItems={'center'}
                              width={'25px'}
                              height={'25px'}
                              css={[formStyle(formItem.form as 'W' | 'L' | 'D'), styles.form]}
                            >
                              {formItem.form}
                            </Flex>
                          );
                        })}
                      </Flex>
                    </Td>
                    <Td>{standing.points}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}

const styles = {
  form: css`
    color: white;
    border-radius: 4px;
  `,
  win: css`
    background: rgba(0, 152, 95, 1);
  `,
  lose: css`
    background: rgba(221, 54, 54, 1);
  `,
  draw: css`
    background: rgba(141, 148, 153, 1);
  `,
};
