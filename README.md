#

```
.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── config/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── pageA                  // A页面
            ├── components         // 私有组件
            ├── img                // 私有图片
            ├── style              // 页面样式
            ├── index.jsx          // 页面文件
        └── page2.js               // 页面 2，任意命名
    ├── less
        ├── index.less             // 统一导入
        ├── variable.less          // 变量
        ├── theme.less             // 抽取主题
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
    ├── app.js                     // 运行时配置文件
├── .umirc.js                      // umi 配置，同 config/config.js，二选一
├── .routes.js                     // 路由配置
├── .env                           // 环境变量
└── package.json
```

# 样式
> 1.组件样式因包含在命名空间内部，不能随意暴露到全局
> 2.颜色主题等变量，请引用src/less/var.less

# httpRequest
> 1.src/services/user.js

```jsx
import request from '@/utils/request';  //引入请求

export function login(data) {           //发起post请求
  return request({
    url: '/api/login',
    method: 'POST',
    data,
  });
}
```

2.src/models/user.js

```jsx
import * as services from '@/services/user'; // 引入请求

export default {
  namespace: 'user',                        // namespace
  state: {},                                // state默认值
  reducers: {                               // 定义reducers
    save(state, { payload: { data: list, total } }) {    // 定义save reducers
      return { ...state, list, total };
    },
  },
  effects: {
    // 定义了fetch 获取数据后 put 触发reducers
    *fetch({ payload: { page } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } });
    },
  },
  subscriptions: {      // 订阅当发生变化时触发dispatch
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  }
};
```

3.connect 链接起来
接受dispatch
method 触发 dispatch namespace/reducers|fetch

```jsx
import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'user/save',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => {
  return {
    changeSex: (url) => dispatch({
      type: 'home/setState',
      payload: '11111111',
    })
  }
}
export default connect(mapStateToProps)(Products)
```





 > dva 用法
react（https://react.docschina.org/）
umi--路由配置（https://umijs.org/）
dva--数据流方案（https://dvajs.com/guide/）


# js




`status` int(1) NOT NULL COMMENT '卡券状态：1-未绑定，2-已绑定，3-已使用，4-已过期，5-已销毁',
`third_recharge_status` int(1) DEFAULT NULL COMMENT '兑换的产品充值状态 1-充值中，2-充值成功，3-充值失败',


if(ele.status == 3){
	//展示充值状态
	return ele.exchangeData.third_recharge_status;
} else {
	return ele.status
}