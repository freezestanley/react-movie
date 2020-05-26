import React, { useReducer } from 'react';
import router from 'umi/router';
import useInterval from '@/hooks/useInterval';
import { Query } from '@/utils/tools';

import styles from './index.less';

async function orderInfo() {
  return {
    code: '0000',
    data: {
      status: 3,
    }
  };
}

export default function TopupTemp() {
  const orderId = Query.get('out_trade_no');
  const paylink = Query.get('paylink');
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    isOk: false,
    delay: 2000,
    count: 0,
  })

  const handleOk = () => {
    router.push(`/topup/result/?out_trade_no=${orderId}`);
  };

  useInterval(
    () => {
      setState({ count: state.count + 1 });
      if (state.count > 150) {
        setState({ delay: null });
      }
      orderInfo({ orderId: orderId }).then(res => {
        if (!res) return;
        const data = res.data || {};
        if (data.status === 3) {
          setState({ isOk: true });
          // handleOk();
        } else {
          setState({ isOk: false });
        }
      });
    },
    !state.isOk ? state.delay : null,
  );

  const handlePayAgain = () => {
     window.location = paylink;
  };

  return (
    <div className={styles.wxpay}>
      <button onClick={handleOk}>已完成支付</button>
      <button className={styles.payAgain} onClick={handlePayAgain}>
        支付遇到问题，重新支付
      </button>
    </div>
  );
}