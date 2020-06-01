import superCodePay from '@/utils/handlePay';

//购买大礼包
export function createPackageOrder({ data, dispatch, callback }) {
    superCodePay({ dispatch, type: 'order/openMemberAccount', formData: { ...data, payType: 1 }, callback });
}