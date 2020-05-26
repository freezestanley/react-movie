import React from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';

import styles from './index.less';

export default function CardPage(props) {
  return (
    <div className={styles.cardPage}>
      <SpecAndVIP
        dataSource={props.productSpecItems}
        onChange={props.onChange}
      />
    </div>
  );
}