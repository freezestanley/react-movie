import React, { useState } from 'react';
import cns from 'classnames';
import useInterval from '@/hooks/useInterval';
import { Button } from 'zarm';

export default ({ className, onSend, duration = 30 }) => {
  const [count, setCount] = useState(duration);
  const [delay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const [txt, setTxt] = useState('获取验证码');
  const [disabled, setDisabled] = useState(false);

  useInterval(
    () => {
      setTxt(`${count - 1}s后重新发送`);
      setCount(count - 1);
      setDisabled(true);
      if (count === 1) {
        setIsRunning(false);
        setDisabled(false);
        setTxt('重新发送');
      }
    },
    isRunning ? delay : null,
  );

  const handleRun = () => {
    onSend &&
      onSend().then(isOk => {
        if (isOk) {
          setTxt(`${duration}s后重新发送`);
          setDisabled(true);
          setIsRunning(true);
          setCount(duration);
        }
      });
  };

  return (
    <Button className={cns(className, 'send-code')} size="sm" disabled={disabled}>
      {disabled ? txt : <span onClick={handleRun}>{txt}</span>}
    </Button>
  );
};
