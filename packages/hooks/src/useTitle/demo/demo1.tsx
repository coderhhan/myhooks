/**
 * title: 基础用法
 * desc: useLatest 返回的永远是最新值
 */

import React from 'react';
import { useTitle } from 'uni-hooks';

export default () => {
  useTitle('自定义标题');

  return <>自定义标题</>;
};
