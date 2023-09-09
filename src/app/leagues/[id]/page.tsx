'use client';

export default function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  return <div>leabues/{params.id}</div>;
}
