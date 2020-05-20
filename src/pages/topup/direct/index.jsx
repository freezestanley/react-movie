import React from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';
import ProductSpecGroup from '@/components/ProductSpecGroup';
import SwitchAccount from '@/components/SwitchAccount';

export default function DirectPage() {
  return (
    <div>
      <ProductSpecGroup>
        {(tabKey) => {
          return (
            <div>
              DirectPage-{tabKey}
              <SwitchAccount />
              <SpecAndVIP />
            </div>
          )
        }}
      </ProductSpecGroup>
    </div>
  );
}