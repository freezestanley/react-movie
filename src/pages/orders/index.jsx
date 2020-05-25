import { Pull } from 'zarm';
import Order from '../../components/OrderItem';
import  React,{Component} from 'react';
import styles from './index.less'

const REFRESH_STATE = {
  normal: 0,  // 普通
  pull: 1,    // 下拉刷新（未满足刷新条件）
  drop: 2,    // 释放立即刷新（满足刷新条件）
  loading: 3, // 加载中
  success: 4, // 加载成功
  failure: 5, // 加载失败
};

const LOAD_STATE = {
  normal: 0,   // 普通
  abort: 1,    // 中止
  loading: 2,  // 加载中
  success: 3,  // 加载成功
  failure: 4,  // 加载失败
  complete: 5, // 加载完成（无新数据）
};

const getRandomNum = (min, max) => {
  const Range = max - min;
  const Rand = Math.random();
  return (min + Math.round(Rand * Range));
}

class Index extends Component {
  mounted = true;

  state = {
    useBodyScroll: false,
    refreshing: REFRESH_STATE.normal,
    loading: LOAD_STATE.normal,
    dataSource: [],
  };

  componentDidUpdate() {
      document.body.style.overflow = 'hidden';
  }

  componentDidMount() {
    this.appendData(20);
  }

  componentWillUnmount() {
    this.mounted = false;
    document.body.style.overflow = 'auto';
  }

  // 模拟请求数据
  refreshData = () => {
    this.setState({ refreshing: REFRESH_STATE.loading });
    setTimeout(() => {
      if (!this.mounted) return;
      this.appendData(20, []);
      this.setState({
        refreshing: REFRESH_STATE.success,
      });
    }, 2000);
  }

  // 模拟加载更多数据
  loadData = () => {
    this.setState({ loading: LOAD_STATE.loading });
    setTimeout(() => {
      if (!this.mounted) return;

      const randomNum = getRandomNum(0, 5);
      const { dataSource } = this.state;
      let loading = LOAD_STATE.success;

      console.log(`状态: ${randomNum === 0 ? '失败' : (randomNum === 1 ? '完成' : '成功')}`);

      if (randomNum === 0) {
        loading = LOAD_STATE.failure;
      } else if (randomNum === 1) {
        loading = LOAD_STATE.complete;
      } else {
        this.appendData(20);
      }

      this.setState({ loading });
    }, 2000);
  }

  appendData(length, dataSource) {
    dataSource = dataSource || this.state.dataSource;
    const startIndex = dataSource.length;
    for (let i = startIndex; i < startIndex + length; i++) {
      dataSource.push(<Order key={+i}></Order>);
    }
    this.setState({ dataSource });
  }

  toggleScrollContainer = () => {
    this.setState({
      useBodyScroll: !this.state.useBodyScroll,
    })
  };

  render() {
    const { useBodyScroll, refreshing, loading, dataSource } = this.state;
    const style = useBodyScroll
      ? {}
      : { position: 'relative', overflowY: 'auto', maxHeight: 1200, };

    return (
      <>
  
        <Pull
          style={style}
          refresh={{
            state: refreshing,
            handler: this.refreshData,
            // render: (refreshState, percent) => {
            //   const cls = 'custom-control';
            //   switch (refreshState) {
            //     case REFRESH_STATE.pull:
            //       return (
            //         <div className={cls}>
            //           <ActivityIndicator loading={false} percent={percent} />
            //           <span>下拉刷新</span>
            //         </div>
            //       );

            //     case REFRESH_STATE.drop:
            //       return (
            //         <div className={cls}>
            //           <ActivityIndicator loading={false} percent={100} />
            //           <span>释放立即刷新</span>
            //         </div>
            //       );

            //     case REFRESH_STATE.loading:
            //       return (
            //         <div className={cls}>
            //           <ActivityIndicator type="spinner" />
            //           <span>加载中</span>
            //         </div>
            //       );

            //     case REFRESH_STATE.success:
            //       return (
            //         <div className={cls}>
            //           <Icon type="right-round" theme="success" />
            //           <span>加载成功</span>
            //         </div>
            //       );

            //     case REFRESH_STATE.failure:
            //       return (
            //         <div className={cls}>
            //           <Icon type="wrong-round" theme="danger" />
            //           <span>加载失败</span>
            //         </div>
            //       );

            //     default:
            //   }
            // },
          }}
          load={{
            state: loading,
            distance: 200,
            handler: this.loadData,
            // render: (loadState) => {
            //   const cls = 'custom-control';
            //   switch (loadState) {
            //     case LOAD_STATE.loading:
            //       return <div className={cls}><ActivityIndicator type="spinner" /></div>;

            //     case LOAD_STATE.failure:
            //       return <div className={cls}>加载失败</div>;

            //     case LOAD_STATE.complete:
            //       return <div className={cls}>我是有底线的</div>;
            //   }
            // },
          }}
        >
          {dataSource}
        </Pull>
      </>
    )
  }
}
export default Index;
