import React from 'react';
import TopupNote from '@/components/Card/TopupNote';
import ProductSpecGroup from '@/components/ProductSpecGroup';

import CardPage from './card';
import DirectPage from './direct';

import styles from './index.less';

const detail = `<p><i>1</i>激活方式：请通过"订单详情"页面点击链接激活VIP</p><p><i>2</i>请您在2021年12月07日前开通本会员卡</p><p><i>3</i>赠品使用方式：<p>芒果视频：关注“芒果互联网电视助手”微信公众号，点击右下角“开通会员”→“会员卡兑换”输入兑换码激活会员；”</p><p>网易云音乐：“网易云音乐APP”—“账号”—“会员中心”—“立即开通”—“使用会员兑换码”（区分大小写）；</p><p>话费：凭兑换码，微信联系“盎司一起”客服完成充值。</p></p><p><i>4</i>如有疑问，请联系公众号客服：盎司一起</p>`

export default function TopupPage(props) {
  const currentProduct = {
    // type: Math.random() > 0.5 ? 1 : 2,
    type: 1,
  };
  return (
    <>
      <ProductSpecGroup>
        {(tabKey) => {
          return [
            currentProduct.type === 1 && <DirectPage dataSource={tabKey} />,
            currentProduct.type === 2 && <CardPage dataSource={tabKey} />,
          ]
        }}
      </ProductSpecGroup>
      <div className={styles.topupOther}>
        <TopupNote nodes={detail} />
      </div>
    </>
  );
}