import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import { StatsSelectModalContents } from '@/app/analysis/StatsSelectModalContents';

type StatsSelectModalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
  submitStats: (selectedStats: string[]) => void;
};

export function StatsSelectModal({ isOpen, handleCloseModal, submitStats }: StatsSelectModalProps) {
  const cancelButtonRef = useRef(null);

  const [selectedStats, setSelectedStats] = useState<string[]>([]);

  const handleChangeStats = (value: string) => {
    setSelectedStats((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50'
        initialFocus={cancelButtonRef}
        onClose={handleCloseModal}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-50 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative w-full transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6'>
                <div>
                  <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                    <Dialog.Title
                      as='h3'
                      className='text-base font-semibold leading-6 text-gray-900'
                    >
                      表示スタッツ設定
                    </Dialog.Title>

                    {/* モーダルコンテンツ */}
                    <div className='mt-4'>
                      <StatsSelectModalContents
                        selectedStats={selectedStats}
                        handleChangeStats={handleChangeStats}
                      />
                    </div>
                  </div>
                </div>

                <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto'
                    onClick={() => submitStats(selectedStats)}
                  >
                    完了
                  </button>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={handleCloseModal}
                    ref={cancelButtonRef}
                  >
                    キャンセル
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
