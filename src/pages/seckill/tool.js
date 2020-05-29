export function getBtnInfo(info, isVIP) {
  const { detail= {}, mystock } = info;
  const {stock, onlyForVip, currStatus} = detail;
  if (currStatus === 2) {
    return { name: '即将开始', active: false}
  }
  if (stock <=0) {
    return { name: '已售罄', active: false }
  }
  if (onlyForVip === 'Y' && !isVIP) {
    return { name: '购买限制', active: false }
  }
  if (currStatus === 1 && mystock <= 0) {
    return { name: '购买限制', active: false }
  }
  return { name: '立即购买', active: true }
}