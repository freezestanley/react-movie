import React from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';
import SwitchAccount from '@/components/SwitchAccount';

export default function DirectPage(props) {
  console.log('[6] index.jsx: ', props);
  return (
    <div>
      tabKey-{props.tabKey}
      <SwitchAccount dispatch={props.dispatch} accountTypeList={props.accountTypeList} />
      <SpecAndVIP dataSource={props.productItems} />
    </div>
  );
}