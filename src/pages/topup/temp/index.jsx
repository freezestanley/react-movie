import React, { useReducer } from 'react';
import router from 'umi/router';
import useInterval from '@/hooks/useInterval';
import { Query } from '@/utils/tools';
import { orderInfo } from '@/services/order';
import { wxPayLink } from '@/utils/handlePay';

import styles from './index.less';

export default function TopupTemp() {
  const orderId = Query.get('out_trade_no');
  const paylink = Query.get('paylink');
  // console.log('[20] index.jsx: ', orderId, paylink);
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    isOk: false,
    delay: 2000,
    count: 0,
  })

  const handleOk = () => {
    router.replace(`/orderdetail?id=${orderId}`);
  };

  useInterval(
    () => {
      setState({ count: state.count + 1 });
      if (state.count > 5) {
        setState({ delay: null });
      }
      orderInfo(orderId).then(res => {
        if (!res) return;
        if (res.status === 2) { // 已支付
          setState({ isOk: true });
          handleOk();
        } else {
          setState({ isOk: false });
        }
      });
    },
    !state.isOk ? state.delay : null,
  );

  const handlePayAgain = () => {
    let _link = wxPayLink({ outTradeNo: orderId, payLink: paylink })
    //  window.location = paylink;
     window.location.href = _link;
  };

  return (
    <div className={styles.wxpay}>
      <button onClick={handleOk}>已完成支付</button>
      <button className={styles.payAgain} onClick={handlePayAgain}>
        支付遇到问题，重新支付
      </button>
      <button onClick={() => router.push('/')}>返回首页</button>
    </div>
  );
}
