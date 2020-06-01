
import * as services from '@/services/card';

export default {
  namespace: 'card',
  state: {
      data: [],
      historyCards:[],
      cardProductItem:{},//领取券码的详情信息
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // login
    *getCard({ payload }, { put, call }) {
      // debugger
      let res = yield call(services.getCard, payload);
      // res = {
      //   "historyCouponCount": 100,
      //   "data": [
      //     { // 充值失败
      //       "beginDate": "2020-05-29T07:03:32.442Z",
      //       "cardExpiredTime": "2020-05-29T07:03:32.442Z",
      //       "cardNo": "string",
      //       "cardRemark": "string",
      //       "cardSecret": "string",
      //       "category": 2,
      //       "couponCode": "string",
      //       "couponName": "string",
      //       "couponRemark": "string",
      //       "couponTitle": "string",
      //       "endDate": "2020-05-29T07:03:32.442Z",
      //       "hasDetail": true,
      //       "id": 0,
      //       "productData": [
      //         {
      //           "creator": "string",
      //           "gmtCreated": "2020-05-29T07:03:32.442Z",
      //           "gmtModified": "2020-05-29T07:03:32.442Z",
      //           "id": 0,
      //           "isDeleted": "string",
      //           "modifier": "string",
      //           "productId": 0,
      //           "productItemId": 0,
      //           "productItemName": "string",
      //           "productName": "string",
      //           "productType": 0,
      //           "templateId": 0,
      //           "templateNo": "string"
      //         }
      //       ],
      //       "productName": "string",
      //       "rechargeAccount": "string",
      //       "rechargeDate": "2020-05-29T07:03:32.442Z",
      //       "rechargeStatus": 3,
      //       "templateId": 0,
      //       "templateNo": "string",
      //       "viewStatus": 5
      //     },

      //     {// 待生效
      //       "beginDate": "2020-05-29T07:03:32.442Z",
      //       "cardExpiredTime": "2020-05-29T07:03:32.442Z",
      //       "cardNo": "string",
      //       "cardRemark": "string",
      //       "cardSecret": "string",
      //       "category": 2,
      //       "couponCode": "string",
      //       "couponName": "string",
      //       "couponRemark": "string",
      //       "couponTitle": "string",
      //       "endDate": "2020-05-29T07:03:32.442Z",
      //       "hasDetail": true,
      //       "id": 0,
      //       "productData": [
      //         {
      //           "creator": "string",
      //           "gmtCreated": "2020-05-29T07:03:32.442Z",
      //           "gmtModified": "2020-05-29T07:03:32.442Z",
      //           "id": 0,
      //           "isDeleted": "string",
      //           "modifier": "string",
      //           "productId": 0,
      //           "productItemId": 0,
      //           "productItemName": "string",
      //           "productName": "string",
      //           "productType": 0,
      //           "templateId": 0,
      //           "templateNo": "string"
      //         }
      //       ],
      //       "productName": "string",
      //       "rechargeAccount": "string",
      //       "rechargeDate": "2020-05-29T07:03:32.442Z",
      //       "rechargeStatus": 3,
      //       "templateId": 0,
      //       "templateNo": "string",
      //       "viewStatus": 7
      //     },

      //     {// 待生效
      //       "beginDate": "2020-05-29T07:03:32.442Z",
      //       "cardExpiredTime": "2020-05-29T07:03:32.442Z",
      //       "cardNo": "string",
      //       "cardRemark": "string",
      //       "cardSecret": "string",
      //       "category": 2,
      //       "couponCode": "string",
      //       "couponName": "string",
      //       "couponRemark": "string",
      //       "couponTitle": "string",
      //       "endDate": "2020-05-29T07:03:32.442Z",
      //       "hasDetail": false,
      //       "id": 0,
      //       "productData": [
      //         {
      //           "creator": "string",
      //           "gmtCreated": "2020-05-29T07:03:32.442Z",
      //           "gmtModified": "2020-05-29T07:03:32.442Z",
      //           "id": 0,
      //           "isDeleted": "string",
      //           "modifier": "string",
      //           "productId": 0,
      //           "productItemId": 0,
      //           "productItemName": "string",
      //           "productName": "string",
      //           "productType": 0,
      //           "templateId": 0,
      //           "templateNo": "string"
      //         }
      //       ],
      //       "productName": "string",
      //       "rechargeAccount": "string",
      //       "rechargeDate": "2020-05-29T07:03:32.442Z",
      //       "rechargeStatus": 3,
      //       "templateId": 0,
      //       "templateNo": "string",
      //       "viewStatus": 1
      //     },

      //     {// 充值成功
      //       "beginDate": "2020-05-29T07:03:32.442Z",
      //       "cardExpiredTime": "2020-05-29T07:03:32.442Z",
      //       "cardNo": "string",
      //       "cardRemark": "string",
      //       "cardSecret": "string",
      //       "category": 2,
      //       "couponCode": "string",
      //       "couponName": "string",
      //       "couponRemark": "string",
      //       "couponTitle": "string",
      //       "endDate": "2020-05-29T07:03:32.442Z",
      //       "hasDetail": false,
      //       "id": 0,
      //       "productData": [
      //         {
      //           "creator": "string",
      //           "gmtCreated": "2020-05-29T07:03:32.442Z",
      //           "gmtModified": "2020-05-29T07:03:32.442Z",
      //           "id": 0,
      //           "isDeleted": "string",
      //           "modifier": "string",
      //           "productId": 0,
      //           "productItemId": 0,
      //           "productItemName": "string",
      //           "productName": "string",
      //           "productType": 0,
      //           "templateId": 0,
      //           "templateNo": "string"
      //         }
      //       ],
      //       "productName": "string",
      //       "rechargeAccount": "string",
      //       "rechargeDate": "2020-05-29T07:03:32.442Z",
      //       "rechargeStatus": 3,
      //       "templateId": 0,
      //       "templateNo": "string",
      //       "viewStatus": 2
      //     },
      //     {// 充值成功
      //       "beginDate": "2020-05-29T07:03:32.442Z",
      //       "cardExpiredTime": "2020-05-29T07:03:32.442Z",
      //       "cardNo": "string",
      //       "cardRemark": "string",
      //       "cardSecret": "string",
      //       "category": 2,
      //       "couponCode": "string",
      //       "couponName": "string",
      //       "couponRemark": "string",
      //       "couponTitle": "string",
      //       "endDate": "2020-05-29T07:03:32.442Z",
      //       "hasDetail": true,
      //       "id": 0,
      //       "productData": [
      //         {
      //           "creator": "string",
      //           "gmtCreated": "2020-05-29T07:03:32.442Z",
      //           "gmtModified": "2020-05-29T07:03:32.442Z",
      //           "id": 0,
      //           "isDeleted": "string",
      //           "modifier": "string",
      //           "productId": 0,
      //           "productItemId": 0,
      //           "productItemName": "string",
      //           "productName": "string",
      //           "productType": 0,
      //           "templateId": 0,
      //           "templateNo": "string"
      //         }
      //       ],
      //       "productName": "string",
      //       "rechargeAccount": "string",
      //       "rechargeDate": "2020-05-29T07:03:32.442Z",
      //       "rechargeStatus": 3,
      //       "templateId": 0,
      //       "templateNo": "string",
      //       "viewStatus": 6
      //     }

      //   ]
      // }
    // console.log(res,'res---')
      // debugger
      yield put({ type: 'setState', payload: { data: res.data, total: res.historyCouponCount } });
      // return res;
      // yield put({ type: 'setState', payload: { data: '123123' } });
    },
    //history cards
    *getHistoryCard({ payload }, { put, call }) {
      const res = yield call(services.getCard, payload);
      const {data,success} = res;
      if(success) {
        yield put({
          type:'setState',
          payload:{
            // historyCards,
            historyCards:data
          }
        })
      }
      // return res;
      // yield put({ type: 'setState', payload: { data: '123123' } });
    },

    //兑换券码
    *exchangeCard({ payload }, { put, call }) {
      const res = yield call(services.exchangeCard, payload);
      return res
    }, 

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        // if (pathname === '/card') {
        //     debugger
        //   dispatch({ type: 'getCard', payload: query });
        // }
      });
    },
  },
};