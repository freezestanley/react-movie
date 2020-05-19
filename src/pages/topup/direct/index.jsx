import React from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';
import ProductSpecGroup from '@/components/ProductSpecGroup';

export default function DirectPage() {
  return (
    <div>
      <ProductSpecGroup>
        {(tabKey) => {
          return (
            <div>
              DirectPage-{tabKey}
              <SpecAndVIP />
            </div>
          )
        }}
      </ProductSpecGroup>
    </div>
  );
}