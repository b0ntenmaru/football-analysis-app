import { useLeague } from '@/app/leagues/[id]/useLeague';
import { League } from '@/app/leagues/[id]/League';

export default async function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const league = await useLeague(params.id);

  return (
    <div>
      <League league={league} />
    </div>
  );
}
