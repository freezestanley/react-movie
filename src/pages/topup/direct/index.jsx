import React from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';
import SwitchAccount from '@/components/SwitchAccount';
import { productCornerMark } from '@/utils/ants';

export default function DirectPage(props) {
  // console.log('[6] index.jsx: ', props);
  return (
    <div>
      tabKey-{props.tabKey}
      <SwitchAccount accountTypeList={props.accountTypeList} />
      <SpecAndVIP
        dataSource={props.productItems}
        isVIP={props.isVIP}
        onOpenVIP={props.onOpenVIP}
      />
    </div>
  );
}