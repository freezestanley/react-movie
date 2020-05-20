import React from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';
import SwitchAccount from '@/components/SwitchAccount';

export default function DirectPage(props) {
  return (
    <div>
      tabKey-{props.dataSource}
      <SwitchAccount />
      <SpecAndVIP />
    </div>
  );
}