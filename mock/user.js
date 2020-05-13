export default {
  'POST /api/login': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    const isOk = req.body.verificationCode === '666666';
    res.send(isOk ? {
      code: '0000',
      msg: 'success',
      data: {
        uid: 0,
        username: 'ants001',
      }
    } : {
      code: '10000',
      msg: 'fail',
      data: null,
    });
  },
}
