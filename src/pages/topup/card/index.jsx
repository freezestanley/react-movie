import React from 'react';
import SpecGroup from '@/components/SpecGroup';

export default function CardPage(props) {
  return (
    <div>
      CardPage
      <SpecGroup
        dataSource={props.productItems}
      />
    </div>
  );
}