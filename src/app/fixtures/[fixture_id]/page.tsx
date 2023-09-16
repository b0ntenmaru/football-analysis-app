import { FixtureDetailUi } from '@/app/fixtures/[fixture_id]/FixtureDetailUi';
import { useFixture } from '@/app/fixtures/[fixture_id]/useFixture';

export default async function MatchDetailPage({
  params,
}: {
  params: {
    fixture_id: number;
  };
}) {
  const fixture = await useFixture(params.fixture_id);

  return <FixtureDetailUi fixture={fixture} />;
}
