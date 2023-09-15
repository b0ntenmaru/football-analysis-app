'use client';

import { Button, ConfigProvider } from 'antd';
import React from 'react';
import theme from '@/app/themeConfig';

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <Button type='primary' htmlType='submit'>
      OK
    </Button>
    <Button style={{ marginLeft: 8 }}>Cancel</Button>
  </ConfigProvider>
);

export default HomePage;
