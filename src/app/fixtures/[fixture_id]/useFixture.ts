import { fetchFromSportmonks } from '@/app/utils/fetchFromSportmonks';
import { Fixture } from '@/app/utils/types/Fixture';

export const useFixture = async (fixtureId: number) => {
  const fixture: Fixture = await fetchFromSportmonks({
    query: `fixtures/${fixtureId}`,
    include:
      'league;state;lineups;events.type;statistics.type;scores;participants&filters=eventTypes:14',
  });
  return fixture;
};
