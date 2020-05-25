import React from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';

export default function CardPage(props) {
  return (
    <div>
      <SpecAndVIP
        dataSource={props.productSpecItems}
        isVIP={props.isVIP}
        onOpenVIP={props.onOpenVIP}
        onChange={props.onChange}
      />
    </div>
  );
}