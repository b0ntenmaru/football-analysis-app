'use client';

import { Avatar, Box, Button, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { League } from '@/app/utils/types/League';

type LeaguesProps = {
  leagues: League[];
};

export function Leagues({ leagues }: LeaguesProps) {
  return (
    <Box>
      {leagues.map((league) => {
        return (
          <Card key={league.id} css={styles.card}>
            <CardBody>
              <Flex alignItems={'center'} gap={4} justifyContent={'space-between'}>
                <Box>
                  <Flex alignItems={'center'} gap={4}>
                    <Avatar name={league.name} src={league.image_path} />
                    <Text>{league.name}</Text>
                  </Flex>
                </Box>
                <Box>
                  <Button colorScheme='blue'>
                    <Link href={`/leagues/${league.id}`}>詳細</Link>
                  </Button>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        );
      })}
    </Box>
  );
}

const styles = {
  card: css`
    margin-bottom: 10px;
  `,
};
