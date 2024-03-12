import NavigationProvider from '@providers/NavigationProvider';
import ReactQueryProvider from '@providers/ReactQueryProvider';
import RecoilProvider from '@providers/RecoilProvider';
import {ChildrenProps} from '@type/common';
import React from 'react';

function ProviderContainer({children}: ChildrenProps) {
  return (
    <ReactQueryProvider>
      <RecoilProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </RecoilProvider>
    </ReactQueryProvider>
  );
}

export default ProviderContainer;
