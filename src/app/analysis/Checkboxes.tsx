type CheckboxesProps = {
  statsList: { label: string; value: string }[];
  handleChangeStats: (value: string) => void;
};

export function Checkboxes({ statsList, handleChangeStats }: CheckboxesProps) {
  return (
    <fieldset>
      <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
        {statsList.map((item, i) => (
          <div key={i} className='relative flex items-start py-4'>
            <div className='flex h-6 items-center'>
              <input
                id={`item-${item.value}`}
                name={`item-${item.value}`}
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                onChange={() => handleChangeStats(item.value)}
              />
            </div>

            <div className='min-w-0 flex-1 text-sm leading-6 ml-3'>
              <label
                htmlFor={`item-${item.value}`}
                className='select-none font-medium text-gray-900 cursor-pointer'
              >
                {item.label}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
