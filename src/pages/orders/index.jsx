import { Pull } from 'zarm';
import Order from '@/components/OrderItem';
import  React,{Component} from 'react';
import {queryOrders} from './../../services/order'
import './index.less'
import {connect } from 'dva'

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
class Index extends Component {
  mounted = true;
   page=1
  constructor(props){
    super(props)
    this.state = {
      useBodyScroll: false,
      refreshing: REFRESH_STATE.normal,
      loading: LOAD_STATE.normal,
      dataSource: [],
      data:[],
      page:1
    };
  }

  componentDidUpdate() {
      document.body.style.overflow = 'hidden';
  }

  componentDidMount() {
    queryOrders({}).then((res)=>{
      if(res.code==='0000'){
        this.setState({data:res.data})
      }
    })
  }

  componentWillUnmount() {
    this.mounted = false;
    document.body.style.overflow = 'auto';
  }



  refreshData = () => {
    if (!this.mounted) return;
     queryOrders({}).then((res)=>{
      if(res.code==='0000'){
        this.setState({data:res.data})
        this.setState({ refreshing: REFRESH_STATE.loading });
        this.appendData()
      }else{
         this.setState({ refreshing: REFRESH_STATE.loading });

      }
    })
  }

  // 模拟加载更多数据
  loadData = () => {
    const {data,page}=this.state
    this.setState({page:page+1})
    this.setState({ loading: LOAD_STATE.loading });
    queryOrders({pageNo:page+1}).then((res)=>{
        if(res.code==='0000'){
          data.concat(res.data)
          this.setState({data:data})
          this.appendData()
          let loading = LOAD_STATE.success;
          this.setState({ loading })
        }else{
          let loading = LOAD_STATE.complete;
          this.setState({ loading })
        }
      })
     }

  appendData() {
    const {data,dataSource}=this.state;
    data.map((item)=>{
      dataSource.push(<Order key={item.orderId} info={item} ></Order>);
    })
    dataSource.concat(dataSource)
    this.setState({ dataSource:dataSource });
  }

  render() {
    const {  refreshing, loading, dataSource ,data} = this.state;
    const style ={ position: 'relative', overflowY: 'auto', maxHeight: 1000,};
    data.map((item)=>{
      console.log(item)
      dataSource.push(<Order key={item.orderId} info={item} ></Order>);
    },()=>{console.log(1);this.setState(dataSource)})
    return (
      <>
        <Pull
          style={style}
          refresh={{
            state: refreshing,
            handler: this.refreshData,
          }}
          load={{
            state: loading,
            distance: 200,
            handler: this.loadData,
          }}
        >
          {dataSource}
        </Pull>
      </>
    )
  }
}
export default connect(state=>({order:state.order}))(Index);