type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const availableStyle =
  'rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';

// 利用不可 スタイル
const unavailableStyle =
  'opacity-50 cursor-not-allowed rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';

export function PrimaryButton({ children, onClick, disabled }: PrimaryButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={disabled ? unavailableStyle : availableStyle}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
