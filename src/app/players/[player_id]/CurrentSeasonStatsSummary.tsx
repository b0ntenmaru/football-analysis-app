type Stats = {
  name: string;
  stat: string | number;
};

type CurrentSeasonStatsSummaryProps = {
  statsSummary: Stats[];
};
export const CurrentSeasonStatsSummary = ({ statsSummary }: CurrentSeasonStatsSummaryProps) => {
  return (
    <div>
      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3'>
        {statsSummary.map((item) => (
          <Card key={item.name}>
            <dt className='truncate text-sm font-medium text-gray-500'>{item.name}</dt>
            <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>
              {item.stat}
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  );
};

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className='overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6'>{children}</div>
  );
}
