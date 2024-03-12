import {ChildrenProps} from '@type/common';
import React from 'react';
import {RecoilRoot} from 'recoil';

function RecoilProvider({children}: ChildrenProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilProvider;
