import React from 'react';
import SpecAndVIP from '@/components/SpecAndVIP';

import styles from './index.less';

export default function CardPage(props) {
  const { defaultValue } = props;
  return (
    <div className={styles.cardPage}>
      <SpecAndVIP
        prePay={props.prePay}
        dataSource={props.productSpecItems}
        onChange={props.onChange}
        defaultValue={{
          specIndex: defaultValue.specIndex,
          isOpenVIP: defaultValue.isOpenVIP,
        }}
      />
    </div>
  );
}