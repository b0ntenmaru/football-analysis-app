type PanelProps = {
  children: React.ReactNode;
};

export function Panel({ children }: PanelProps) {
  return (
    <div className='rounded-lg bg-white shadow'>
      <div className='px-4 py-5 sm:p-6'>{children}</div>
    </div>
  );
}
