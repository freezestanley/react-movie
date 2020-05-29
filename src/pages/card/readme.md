券未使用 status = 2-已绑定 , 点击， 只能呈现 充值页面

券已使用 status = 3-已使用, 点击 ，展示不同的tab  
1. ele.coupon_type = 6
        展示  盎司会员tab
2. ele.coupon_type != 6 and  ele.exchangeData.productType = 1        
        展示  商品直冲tab
        充值成功 ele.exchangeData.third_recharge_status
3. ele.coupon_type != 6 and  ele.exchangeData.productType = 2
        展示  卡密tab
        充值成功 ele.exchangeData.third_recharge_status


  `coupon_type`  '1-满减券、2-折扣券、3-商品兑换券、4-月月换券、5-套餐券、6-会员券',
  `third_recharge_status` int(1) DEFAULT NULL COMMENT '兑换的产品充值状态 1-充值中，2-充值成功，3-充值失败',
1. ele.coupon_type = 6
	展示  盎司会员tab
2. ele.coupon_type != 6 and  ele.exchangeData.productType = 1	
	展示  商品直冲tab
	充值成功 ele.exchangeData.third_recharge_status
3. ele.coupon_type != 6 and  ele.exchangeData.productType = 2
	展示  卡密tab
	充值成功 ele.exchangeData.third_recharge_status

`status` '卡券状态：1-未绑定，2-已绑定，3-已使用，4-已过期，5-已销毁',
`third_recharge_status` '兑换的产品充值状态 1-充值中，2-充值成功，3-充值失败',


情况1
coupon_type = 6 盎司会员tab 
兑换
ele.exchangeData.productType = 0
ele.exchangeData.thirdRechargeStatus = 0
ele.status = 0


情况2 
ele.exchangeData.productType = 2  卡密
复制
couponType = 0
ele.exchangeData.thirdRechargeStatus = 0
ele.status = 0


status = 2


情况3 
ele.exchangeData.productType = 1  直冲
充值成功/失败/支付中

couponType = 0
ele.exchangeData.thirdRechargeStatus = 0
ele.status = 0

情况3-1
ele.status = 2已绑定 , 点击， 只能呈现 充值页面
couponType = 0
ele.exchangeData.thirdRechargeStatus = 0

情况3-2
ele.status = 3已使用
couponType = 0
ele.exchangeData.thirdRechargeStatus = 1 充值中

情况3-3
ele.status = 3已使用
couponType = 0
ele.exchangeData.thirdRechargeStatus = 2 充值成功

情况3-3
ele.status = 3已使用
couponType = 0
ele.exchangeData.thirdRechargeStatus = 3 充值失败
-----------------------------------------------------


接口名称换为   /queryUserView , 入参不变，返回值变
	@ApiModelProperty("卡券兑换类型：1兑换码、2直冲、3卡密")
	private Integer category;
	@ApiModelProperty("卡券视图状态：1-充值中，2-充值成功，3-充值失败 4-即将过期、5-已过期、6-已使用、7-待生效")
	private Integer viewStatus;
	@ApiModelProperty("是否有详情信息")
	private boolean hasDetail;
	
if(ele.viewStatus == 7){//7-待生效
	//不可点击
} else if(ele.viewStatus == 4){	//4-即将过期,可兑换
	if(ele.category == 1){
		//展示兑换码兑换页面
		
	} else {
		//展示商品领取页面
	}
} else {
	if(hasDetail){ 
		if(ele.category == 1){
			//展示兑换码详情页面
			商品名称：ele.productName
			兑换码：	ele.couponCode
			有效期至：	ele.endDate
			使用说明：	ele.couponRemark
		} else if(ele.category == 2){
			//展示商品详情页面页面
			商品名称：ele.productName
			充值账号：ele.rechargeAccount
			充值时间：ele.rechargeDate
			充值状态：ele.rechargeStatus  // 1-充值中，2-充值成功，3-充值失败
		} else if(ele.category == 3){
			//展示卡密详情页面
			商品名称：ele.productName
			卡号：ele.cardNo
			兑换码：ele.cardSecret
			有效期至：ele.cardExpiredTime
			使用说明：ele.cardRemark
		}
	} else {
		//不可点击
	}	
}

