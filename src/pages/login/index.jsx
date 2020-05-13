import React from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';

import useStore from '@/hooks/useStore';
import SendCode from '@/components/SendCode';
import { isPhone } from '@/utils/tools';

import './style/index.less';

function LoginPage() {
  const { state, set } = useStore({
    loading: false,
    form: {
      phone: '',
      verificationCode: '',
    }
  })
  const handleInput = (e, field) => {
    set(`form.[${field}]`, e);
  }
  const handleSend = async () => {
    if (!isPhone(state.form.phone)) {
      return;
    }
    // TODO: get code...
    return true;
  }
  const handleLogin = () => {
    if (!state.form.phone) {
       Toast.show('请输入手机号');
       return;
    }
    if (!isPhone(state.form.phone)) {
      return;
    }
    if (!state.form.verificationCode) {
       Toast.show('请输入验证码');
       return;
    }
    set({ loading: true });

    // TODO: login api
    setTimeout(() => {
      set({ loading: false });
    }, 2000);
  }
  return (
    <div className="login-page">
      <Input
        type="tel"
        className="phone"
        placeholder="请输入手机号"
        maxLength={11}
        onChange={e => handleInput(e, 'phone')}
      />
      <div className="code-control">
        <Input
          type="tel"
          className="code"
          placeholder="请输入验证码"
          pattern="[0-9]*"
          onChange={e => handleInput(e, 'verificationCode')}
          maxLength={6}
        />
        <SendCode duration={60} onSend={handleSend} />
      </div>
      <Button onClick={handleLogin}>{state.loading ? '登录中...' : '登录'}</Button>
    </div>
  )
}

export default connect(state => state.user)(LoginPage)