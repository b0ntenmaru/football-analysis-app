type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      {children}
    </button>
  );
}
