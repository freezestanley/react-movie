import { BrowserInfo, Query } from './tools';

export default async function weChatAuth(wxLogin) {
  if (BrowserInfo.isWeixin && !/(open\.weixin\.qq\.com)|(code\=)/.test(window.location.href)) {
    const uri = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxef6a2198a1d0c3b4&redirect_uri=${encodeURIComponent(
      window.location.href,
    )}&response_type=code&scope=snsapi_base#wechat_redirect`;
    window.location.href = uri;
    return;
  }
  const code = Query.get('code');
  if (code) {
    await wxLogin(code)
      .then(() => {
        const queryParams = Query.parse();
        delete queryParams.code;
        delete queryParams.state;
        const pureSearchStr = Query.stringify(queryParams);
        window.history.replaceState(null, '', `${window.location.pathname}${pureSearchStr ? `?${pureSearchStr}` : ''}`);
      });
  }
}