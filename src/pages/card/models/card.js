
import * as services from '@/services/card';

export default {
  namespace: 'card',
  state: {
      data: [],
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // login
    *getCard({ payload }, { put, call }) {
      debugger
      let res = yield call(services.getCard, payload);
      res = {
        "historyCouponCount": 100,
        "data": [
          { // 充值失败
            "beginDate": "2020-05-29T07:03:32.442Z",
            "cardExpiredTime": "2020-05-29T07:03:32.442Z",
            "cardNo": "string",
            "cardRemark": "string",
            "cardSecret": "string",
            "category": 2,
            "couponCode": "string",
            "couponName": "string",
            "couponRemark": "string",
            "couponTitle": "string",
            "endDate": "2020-05-29T07:03:32.442Z",
            "hasDetail": true,
            "id": 0,
            "productData": [
              {
                "creator": "string",
                "gmtCreated": "2020-05-29T07:03:32.442Z",
                "gmtModified": "2020-05-29T07:03:32.442Z",
                "id": 0,
                "isDeleted": "string",
                "modifier": "string",
                "productId": 0,
                "productItemId": 0,
                "productItemName": "string",
                "productName": "string",
                "productType": 0,
                "templateId": 0,
                "templateNo": "string"
              }
            ],
            "productName": "string",
            "rechargeAccount": "string",
            "rechargeDate": "2020-05-29T07:03:32.442Z",
            "rechargeStatus": 3,
            "templateId": 0,
            "templateNo": "string",
            "viewStatus": 5
          },

          {// 待生效
            "beginDate": "2020-05-29T07:03:32.442Z",
            "cardExpiredTime": "2020-05-29T07:03:32.442Z",
            "cardNo": "string",
            "cardRemark": "string",
            "cardSecret": "string",
            "category": 2,
            "couponCode": "string",
            "couponName": "string",
            "couponRemark": "string",
            "couponTitle": "string",
            "endDate": "2020-05-29T07:03:32.442Z",
            "hasDetail": true,
            "id": 0,
            "productData": [
              {
                "creator": "string",
                "gmtCreated": "2020-05-29T07:03:32.442Z",
                "gmtModified": "2020-05-29T07:03:32.442Z",
                "id": 0,
                "isDeleted": "string",
                "modifier": "string",
                "productId": 0,
                "productItemId": 0,
                "productItemName": "string",
                "productName": "string",
                "productType": 0,
                "templateId": 0,
                "templateNo": "string"
              }
            ],
            "productName": "string",
            "rechargeAccount": "string",
            "rechargeDate": "2020-05-29T07:03:32.442Z",
            "rechargeStatus": 3,
            "templateId": 0,
            "templateNo": "string",
            "viewStatus": 7
          },

          {// 待生效
            "beginDate": "2020-05-29T07:03:32.442Z",
            "cardExpiredTime": "2020-05-29T07:03:32.442Z",
            "cardNo": "string",
            "cardRemark": "string",
            "cardSecret": "string",
            "category": 2,
            "couponCode": "string",
            "couponName": "string",
            "couponRemark": "string",
            "couponTitle": "string",
            "endDate": "2020-05-29T07:03:32.442Z",
            "hasDetail": false,
            "id": 0,
            "productData": [
              {
                "creator": "string",
                "gmtCreated": "2020-05-29T07:03:32.442Z",
                "gmtModified": "2020-05-29T07:03:32.442Z",
                "id": 0,
                "isDeleted": "string",
                "modifier": "string",
                "productId": 0,
                "productItemId": 0,
                "productItemName": "string",
                "productName": "string",
                "productType": 0,
                "templateId": 0,
                "templateNo": "string"
              }
            ],
            "productName": "string",
            "rechargeAccount": "string",
            "rechargeDate": "2020-05-29T07:03:32.442Z",
            "rechargeStatus": 3,
            "templateId": 0,
            "templateNo": "string",
            "viewStatus": 1
          },

          {// 充值成功
            "beginDate": "2020-05-29T07:03:32.442Z",
            "cardExpiredTime": "2020-05-29T07:03:32.442Z",
            "cardNo": "string",
            "cardRemark": "string",
            "cardSecret": "string",
            "category": 2,
            "couponCode": "string",
            "couponName": "string",
            "couponRemark": "string",
            "couponTitle": "string",
            "endDate": "2020-05-29T07:03:32.442Z",
            "hasDetail": false,
            "id": 0,
            "productData": [
              {
                "creator": "string",
                "gmtCreated": "2020-05-29T07:03:32.442Z",
                "gmtModified": "2020-05-29T07:03:32.442Z",
                "id": 0,
                "isDeleted": "string",
                "modifier": "string",
                "productId": 0,
                "productItemId": 0,
                "productItemName": "string",
                "productName": "string",
                "productType": 0,
                "templateId": 0,
                "templateNo": "string"
              }
            ],
            "productName": "string",
            "rechargeAccount": "string",
            "rechargeDate": "2020-05-29T07:03:32.442Z",
            "rechargeStatus": 3,
            "templateId": 0,
            "templateNo": "string",
            "viewStatus": 2
          },
          {// 充值成功
            "beginDate": "2020-05-29T07:03:32.442Z",
            "cardExpiredTime": "2020-05-29T07:03:32.442Z",
            "cardNo": "string",
            "cardRemark": "string",
            "cardSecret": "string",
            "category": 2,
            "couponCode": "string",
            "couponName": "string",
            "couponRemark": "string",
            "couponTitle": "string",
            "endDate": "2020-05-29T07:03:32.442Z",
            "hasDetail": true,
            "id": 0,
            "productData": [
              {
                "creator": "string",
                "gmtCreated": "2020-05-29T07:03:32.442Z",
                "gmtModified": "2020-05-29T07:03:32.442Z",
                "id": 0,
                "isDeleted": "string",
                "modifier": "string",
                "productId": 0,
                "productItemId": 0,
                "productItemName": "string",
                "productName": "string",
                "productType": 0,
                "templateId": 0,
                "templateNo": "string"
              }
            ],
            "productName": "string",
            "rechargeAccount": "string",
            "rechargeDate": "2020-05-29T07:03:32.442Z",
            "rechargeStatus": 3,
            "templateId": 0,
            "templateNo": "string",
            "viewStatus": 6
          }

        ]
      }
    console.log(res,'res---')
      // debugger
      yield put({ type: 'setState', payload: { data: res.data, total: res.historyCouponCount } });
      // return res;
      // yield put({ type: 'setState', payload: { data: '123123' } });
    },
    //history cards
    *getHistoryCard({ payload }, { put, call }) {
      const res = yield call(services.getCard, payload);
      // var historyCards = [
      //   {
      //     "batchNo": "string",
      //     "bindDate": "2020-05-28T07:10:36.948Z",
      //     "bindOrderId": 0,
      //     "bindUserId": 0,
      //     "bindUserName": "string",
      //     "couponAmount": 0,
      //     "couponBeginDate": "2020-05-28T07:10:36.948Z",
      //     "couponCardCode": "string",
      //     "couponCardPassword": "string",
      //     "couponEndDate": "2020-05-28T07:10:36.948Z",
      //     "couponName": "string",
      //     "couponNo": "string",
      //     "couponTitle": "string",
      //     "couponType": 0,
      //     "creator": "string",
      //     "exchangeData": {
      //       "cardNo": "string",
      //       "cardRemark": "string",
      //       "cardSecret": "string",
      //       "couponId": 0,
      //       "couponNo": "string",
      //       "creator": "string",
      //       "gmtCreated": "2020-05-28T07:10:36.948Z",
      //       "gmtModified": "2020-05-28T07:10:36.948Z",
      //       "id": 0,
      //       "isDeleted": "string",
      //       "modifier": "string",
      //       "otherData": "string",
      //       "productId": 0,
      //       "productItemId": 0,
      //       "productItemName": "string",
      //       "productName": "string",
      //       "productRemark": "string",
      //       "productType": 0,
      //       "rechargeAccount": "string",
      //       "rechargeDate": "2020-05-28T07:10:36.948Z",
      //       "thirdRechargeStatus": 3
      //     },
      //     "gmtCreated": "2020-05-28T07:10:36.948Z",
      //     "gmtModified": "2020-05-28T07:10:36.948Z",
      //     "id": 0,
      //     "image": "string",
      //     "isDeleted": "string",
      //     "lockFlag": true,
      //     "modifier": "string",
      //     "ownerId": 0,
      //     "ownerName": "string",
      //     "packageName": "string",
      //     "productData": [
      //       {
      //         "creator": "string",
      //         "gmtCreated": "2020-05-28T07:10:36.948Z",
      //         "gmtModified": "2020-05-28T07:10:36.948Z",
      //         "id": 0,
      //         "isDeleted": "string",
      //         "modifier": "string",
      //         "productId": 0,
      //         "productItemId": 0,
      //         "productItemName": "string",
      //         "productName": "string",
      //         "productType": 0,
      //         "templateId": 0,
      //         "templateNo": "string"
      //       }
      //     ],
      //     "productRange": 0,
      //     "remark": "string",
      //     "status": 3,
      //     "templateId": 0,
      //     "templateNo": "string",
      //     "usedDate": "2020-05-28T07:10:36.948Z",
      //     "usedOrderId": 0,
      //     "usedUserId": 0,
      //     "usedUserName": "string"
      //   },
      //   {
      //     "batchNo": "string",
      //     "bindDate": "2020-05-28T07:10:36.948Z",
      //     "bindOrderId": 0,
      //     "bindUserId": 0,
      //     "bindUserName": "string",
      //     "couponAmount": 0,
      //     "couponBeginDate": "2020-05-28T07:10:36.948Z",
      //     "couponCardCode": "string",
      //     "couponCardPassword": "string",
      //     "couponEndDate": "2020-05-28T07:10:36.948Z",
      //     "couponName": "string",
      //     "couponNo": "string",
      //     "couponTitle": "string",
      //     "couponType": 0,
      //     "creator": "string",
      //     "exchangeData": {
      //       "cardNo": "string",
      //       "cardRemark": "string",
      //       "cardSecret": "string",
      //       "couponId": 0,
      //       "couponNo": "string",
      //       "creator": "string",
      //       "gmtCreated": "2020-05-28T07:10:36.948Z",
      //       "gmtModified": "2020-05-28T07:10:36.948Z",
      //       "id": 0,
      //       "isDeleted": "string",
      //       "modifier": "string",
      //       "otherData": "string",
      //       "productId": 0,
      //       "productItemId": 0,
      //       "productItemName": "string",
      //       "productName": "string",
      //       "productRemark": "string",
      //       "productType": 0,
      //       "rechargeAccount": "string",
      //       "rechargeDate": "2020-05-28T07:10:36.948Z",
      //       "thirdRechargeStatus": 3
      //     },
      //     "gmtCreated": "2020-05-28T07:10:36.948Z",
      //     "gmtModified": "2020-05-28T07:10:36.948Z",
      //     "id": 0,
      //     "image": "string",
      //     "isDeleted": "string",
      //     "lockFlag": true,
      //     "modifier": "string",
      //     "ownerId": 0,
      //     "ownerName": "string",
      //     "packageName": "string",
      //     "productData": [
      //       {
      //         "creator": "string",
      //         "gmtCreated": "2020-05-28T07:10:36.948Z",
      //         "gmtModified": "2020-05-28T07:10:36.948Z",
      //         "id": 0,
      //         "isDeleted": "string",
      //         "modifier": "string",
      //         "productId": 0,
      //         "productItemId": 0,
      //         "productItemName": "string",
      //         "productName": "string",
      //         "productType": 0,
      //         "templateId": 0,
      //         "templateNo": "string"
      //       }
      //     ],
      //     "productRange": 0,
      //     "remark": "string",
      //     "status": 3,
      //     "templateId": 0,
      //     "templateNo": "string",
      //     "usedDate": "2020-05-28T07:10:36.948Z",
      //     "usedOrderId": 0,
      //     "usedUserId": 0,
      //     "usedUserName": "string"
      //   },
      //   {
      //     "batchNo": "string",
      //     "bindDate": "2020-05-28T07:10:36.948Z",
      //     "bindOrderId": 0,
      //     "bindUserId": 0,
      //     "bindUserName": "string",
      //     "couponAmount": 0,
      //     "couponBeginDate": "2020-05-28T07:10:36.948Z",
      //     "couponCardCode": "string",
      //     "couponCardPassword": "string",
      //     "couponEndDate": "2020-05-28T07:10:36.948Z",
      //     "couponName": "string",
      //     "couponNo": "string",
      //     "couponTitle": "string",
      //     "couponType": 0,
      //     "creator": "string",
      //     "exchangeData": {
      //       "cardNo": "string",
      //       "cardRemark": "string",
      //       "cardSecret": "string",
      //       "couponId": 0,
      //       "couponNo": "string",
      //       "creator": "string",
      //       "gmtCreated": "2020-05-28T07:10:36.948Z",
      //       "gmtModified": "2020-05-28T07:10:36.948Z",
      //       "id": 0,
      //       "isDeleted": "string",
      //       "modifier": "string",
      //       "otherData": "string",
      //       "productId": 0,
      //       "productItemId": 0,
      //       "productItemName": "string",
      //       "productName": "string",
      //       "productRemark": "string",
      //       "productType": 0,
      //       "rechargeAccount": "string",
      //       "rechargeDate": "2020-05-28T07:10:36.948Z",
      //       "thirdRechargeStatus": 4
      //     },
      //     "gmtCreated": "2020-05-28T07:10:36.948Z",
      //     "gmtModified": "2020-05-28T07:10:36.948Z",
      //     "id": 0,
      //     "image": "string",
      //     "isDeleted": "string",
      //     "lockFlag": true,
      //     "modifier": "string",
      //     "ownerId": 0,
      //     "ownerName": "string",
      //     "packageName": "string",
      //     "productData": [
      //       {
      //         "creator": "string",
      //         "gmtCreated": "2020-05-28T07:10:36.948Z",
      //         "gmtModified": "2020-05-28T07:10:36.948Z",
      //         "id": 0,
      //         "isDeleted": "string",
      //         "modifier": "string",
      //         "productId": 0,
      //         "productItemId": 0,
      //         "productItemName": "string",
      //         "productName": "string",
      //         "productType": 0,
      //         "templateId": 0,
      //         "templateNo": "string"
      //       }
      //     ],
      //     "productRange": 0,
      //     "remark": "string",
      //     "status": 4,
      //     "templateId": 0,
      //     "templateNo": "string",
      //     "usedDate": "2020-05-28T07:10:36.948Z",
      //     "usedOrderId": 0,
      //     "usedUserId": 0,
      //     "usedUserName": "string"
      //   },
      //   {
      //     "batchNo": "string",
      //     "bindDate": "2020-05-28T07:10:36.948Z",
      //     "bindOrderId": 0,
      //     "bindUserId": 0,
      //     "bindUserName": "string",
      //     "couponAmount": 0,
      //     "couponBeginDate": "2020-05-28T07:10:36.948Z",
      //     "couponCardCode": "string",
      //     "couponCardPassword": "string",
      //     "couponEndDate": "2020-05-28T07:10:36.948Z",
      //     "couponName": "string",
      //     "couponNo": "string",
      //     "couponTitle": "string",
      //     "couponType": 0,
      //     "creator": "string",
      //     "exchangeData": {
      //       "cardNo": "string",
      //       "cardRemark": "string",
      //       "cardSecret": "string",
      //       "couponId": 0,
      //       "couponNo": "string",
      //       "creator": "string",
      //       "gmtCreated": "2020-05-28T07:10:36.948Z",
      //       "gmtModified": "2020-05-28T07:10:36.948Z",
      //       "id": 0,
      //       "isDeleted": "string",
      //       "modifier": "string",
      //       "otherData": "string",
      //       "productId": 0,
      //       "productItemId": 0,
      //       "productItemName": "string",
      //       "productName": "string",
      //       "productRemark": "string",
      //       "productType": 0,
      //       "rechargeAccount": "string",
      //       "rechargeDate": "2020-05-28T07:10:36.948Z",
      //       "thirdRechargeStatus": 4
      //     },
      //     "gmtCreated": "2020-05-28T07:10:36.948Z",
      //     "gmtModified": "2020-05-28T07:10:36.948Z",
      //     "id": 0,
      //     "image": "string",
      //     "isDeleted": "string",
      //     "lockFlag": true,
      //     "modifier": "string",
      //     "ownerId": 0,
      //     "ownerName": "string",
      //     "packageName": "string",
      //     "productData": [
      //       {
      //         "creator": "string",
      //         "gmtCreated": "2020-05-28T07:10:36.948Z",
      //         "gmtModified": "2020-05-28T07:10:36.948Z",
      //         "id": 0,
      //         "isDeleted": "string",
      //         "modifier": "string",
      //         "productId": 0,
      //         "productItemId": 0,
      //         "productItemName": "string",
      //         "productName": "string",
      //         "productType": 0,
      //         "templateId": 0,
      //         "templateNo": "string"
      //       }
      //     ],
      //     "productRange": 0,
      //     "remark": "string",
      //     "status": 4,
      //     "templateId": 0,
      //     "templateNo": "string",
      //     "usedDate": "2020-05-28T07:10:36.948Z",
      //     "usedOrderId": 0,
      //     "usedUserId": 0,
      //     "usedUserName": "string"
      //   },
      // ]
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