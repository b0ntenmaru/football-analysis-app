import React from 'react';

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className='border-b border-gray-200 pb-5'>
    <h3 className='text-base font-semibold leading-6 text-gray-900'>{children}</h3>
  </div>
);
