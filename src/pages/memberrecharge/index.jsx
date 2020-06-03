import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import router from 'umi/router'
import { Toast } from 'zarm';
import {Session} from '@/utils/tools'
import './index.less';
import Button from './Button'
import Dialog from '@/components/Dialog';
import { AntiCheat } from '@/utils/handlePay';
import SwitchAccount from '@/components/SwitchAccount';
import SelectMember from './SelectMember'
import TobBack from './TopBack'

const Index = ({
  card,
  dispatch,
  user
}) => {
  const { userId } = user
  const cardProductItem = Session.get('cardProductItem') || (card && card.cardProductItem ? card.cardProductItem : {})
  const { productData, couponCode, couponTitle, productName } = cardProductItem || {}
  const [productItem, setProductItem] = useState({})
  const [accountTypeList, setAccountTypeList] = useState([])
  const [countItem, setCountType] = useState()
  const [cardVisible, showVisible] = useState(false)

  
  console.log(Session.get('cardProductItem'),userId,'seeesii')
  console.log((card||{}).cardProductItem,'card')

  useEffect(() => {
    const { rechargeAccountType } = productItem;
    if (rechargeAccountType) {
      setAccountTypeList(rechargeAccountType.split(','))
    }
  }, [productItem])

  const handlePull = () => {
    if(!userId) {
      router.push('/login')
      return;
    }
    const {productItemId} = productItem;
    const {account,accountType} = countItem;
    console.log(countItem,!account,!accountType,!productItemId,'countItem')
    if(!productItemId || !account || !accountType) {
      Toast.show('请填写完整')
      return;
    }
    showVisible(true)
    
  }
  // debugger
  const onExchangeCard = () => {
    const {productItemId} = productItem;
    const {account,accountType} = countItem;
    AntiCheat({
      dispatch,
      formData: {
        productItemId,
        account,
        accountType,
        couponCardCode: couponCode
      },
      type: 'card/exchangeCard',
      callback: (res) => {
        console.log('res', res);
        if (res.code !== '0000') {
          Toast.show(res.msg)
        } else {
          showVisible(false)
          router.push('/card')
        }
      }
    })
  }
  console.log(productItem,'sss')
  return <div>
    <TobBack info={{
      title: productName,
      content: couponTitle
    }} />
    <div className='CardPackage'>
      <div className='CardPackageMain'>
        <SelectMember data={productData || []} onChange={e => setProductItem(e)} />
        <div className='CardPackageMainPut'>
          <SwitchAccount accountTypeList={accountTypeList.map(i => Number(i))} onChange={e => setCountType(e)} />
        </div>
      </div>
      <div className='CardPackageMainGet'>
        <Button onClick={handlePull}>领取</Button>
      </div>
      <Dialog visible={cardVisible} code={couponCode} title={productItem.title} onCancel={() => { showVisible(false) }} step={2} onExchangeCard={onExchangeCard} />
    </div>
  </div>
}

export default connect(state => ({
  card: state.card,
  user: state.user
}))(Index);