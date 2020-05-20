import React, { useEffect, useReducer } from 'react';
import { Input, Button, Toast } from 'zarm';
import { connect } from 'dva';
import cns from 'classnames';
import router from 'umi/router';

import SendCode from '@/components/SendCode';
import { isPhone, Store } from '@/utils/tools';

import styles from './index.less';

function LoginPage(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    isRegistered: true,
    disabled: true,
    phone: '',
    verificationCode: '',
  });
  useEffect(() => {
    if (state.phone && state.verificationCode) {
      setState({ disabled: false });
    } else {
      setState({ disabled: true });
    }
  }, [state.phone, state.verificationCode]);
  const handleInput = (e, field) => {
    setState({ [field]: e });
    if (field === 'phone') {
      if (e.length === 11) {
        // console.log('[29] index.jsx: ', 11111);
        // TODO: check registered

        props.dispatch({
          type: 'user/checkRegistered',
          payload: state.phone,
        }).then(hasAccount => {
          if (!hasAccount) setState({ isRegistered: false })
        })
      } else {
        setState({ isRegistered: true })
      }
    }
  };
  const handleSend = async () => {
    if (!isPhone(state.phone)) {
      return;
    }
    // TODO: get code...
    props.dispatch({
      type: 'user/sendCode',
      payload: state.phone,
    });
    return true;
  };
  const handleLogin = () => {
    if (!state.phone) {
      Toast.show('请输入手机号');
      return;
    }
    if (!isPhone(state.phone)) {
      return;
    }
    if (!state.verificationCode) {
      Toast.show('请输入验证码');
      return;
    }

    const oid = Store.get('openId');
    const _data = {
      userName: state.phone,
      verifyCode: state.verificationCode,
    }
    if (oid) {
      _data.openId = oid;
    }

    // TODO: login api
    props
      .dispatch({
        type: 'user/login',
        payload: _data,
      })
      .then(isOk => {
        if (isOk) {
          router.push('/');
        }
      });
  };
  return (
    <div className={cns(styles.loginPage)}>
      <div className="phone-control">
        <Input
          type="tel"
          value={state.phone}
          className="phone"
          placeholder="请输入手机号"
          maxLength={11}
          onChange={e => handleInput(e, 'phone')}
        />
        {state.phone && (
          <img
            className="phone-clear"
            src={require('./img/clear.svg')}
            onClick={() => setState({ phone: '' })}
            alt=""
          />
        )}
      </div>
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
      {!state.isRegistered && <p className="login-tip">未注册的手机号，验证通过后将自动注册</p>}
      <Button block className="login-btn" disabled={state.disabled} onClick={handleLogin}>
        {props.loading ? '登录中' : '登录'}
      </Button>
    </div>
  );
}

export default connect(state => ({
  loading: state.loading.effects['user/login'],
}))(LoginPage);
