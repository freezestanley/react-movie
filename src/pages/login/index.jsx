import React from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';
import { wxClass } from '@/utils/tools';

import useStore from '@/hooks/useStore';
import SendCode from '@/components/SendCode';
import { isPhone } from '@/utils/tools';

import styles from './style/index.less';

function LoginPage(props) {
  const { state, set } = useStore({
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
    props.dispatch({
      type: 'user/login',
      payload: state.form,
    }).then(isOk => {
      if (isOk) {
        router.push('/');
      }
    })
  }
  return (
    <div className={cns(styles.loginPage, wxClass('head'))}>
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
          // pattern="[0-9]*"
          onChange={e => handleInput(e, 'verificationCode')}
          maxLength={6}
        />
        <SendCode duration={60} onSend={handleSend} />
      </div>
      <Button onClick={handleLogin}>{props.loading ? '登录中...' : '登录'}</Button>
    </div>
  )
}

export default connect(state => ({
  loading: state.loading.effects['user/login']
}))(LoginPage)