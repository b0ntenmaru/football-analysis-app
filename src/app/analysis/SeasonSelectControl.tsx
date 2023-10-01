import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { Season } from '@/app/leagues/League';

export type Option = {
  id: number;
  label: string;
};

type SeasonSelectControlProps = {
  options: Option[] | undefined;
  value: Season | null;
  handleChange: (value: number) => void;
  disabled?: boolean;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function SeasonSelectControl({
  options,
  value,
  handleChange,
  disabled,
}: SeasonSelectControlProps) {
  const labelSeasonYear = (seasonYear: string) => {
    const startYear = seasonYear.slice(0, 4);
    const endYear = seasonYear.slice(4, 8);
    return `${startYear}-${endYear}`;
  };

  const isSelected = (option: Option) => {
    return value?.id === option.id;
  };

  return (
    <Listbox disabled={disabled}>
      {({ open }) => (
        <>
          <Listbox.Label className='block text-sm font-medium leading-6 text-gray-900'>
            シーズンを選択する
          </Listbox.Label>
          <div className='relative mt-2'>
            <Listbox.Button className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200'>
              <span className='block truncate'>
                {value ? labelSeasonYear(String(value.year)) : 'シーズンを選択してください'}
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              {options && (
                <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={() =>
                        classNames(
                          isSelected(option) ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white',
                        )
                      }
                      onClick={() => handleChange(option.id)}
                      value={option}
                    >
                      <>
                        <span
                          className={classNames(
                            isSelected(option) ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          )}
                        >
                          {option.label}
                        </span>

                        {isSelected(option) ? (
                          <span
                            className={classNames(
                              isSelected(option) ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              )}
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
