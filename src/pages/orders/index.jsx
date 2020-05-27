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
   
    this.appendData()

  }
  componentWillUnmount() {
    this.mounted = false;
    document.body.style.overflow = 'auto';
  }

  refreshData = () => {
    if (!this.mounted) return;
    this.setState({pageNo:1})
     queryOrders({}).then((res)=>{
       this.setState({ refreshing: REFRESH_STATE.loading });
      //  console.log(60)
      //  console.log(res)
      if(res.code==='0000'){
        
        this.setState({data:res.data,pageNo:1})
        this.appendDa()
        this.setState({
          refreshing: REFRESH_STATE.success,
        });
      }else{
        this.setState({
          refreshing: REFRESH_STATE.success,
        });

      }
    })
  }

  // 模拟加载更多数据
  loadData = () => {
    const {data,page,dataSource}=this.state
    console.log(data)
    this.setState({ loading: LOAD_STATE.loading });
    queryOrders({pageNo:page+1}).then((res)=>{
      let loading = LOAD_STATE.complete;
      this.setState({ loading })
      console.log(res)
      if(res.code==='0000'){
        if(res.data==null){
          let loading = LOAD_STATE.complete;
          this.setState({ loading })
          return
        }
        data.concat(res.data)
        console.log(data)
        this.setState({data:data})
        res.data.map((item)=>{
          dataSource.push(<Order key={item.orderId} info={item} ></Order>);
        })
        this.setState({page:page+1})
        this.setState({dataSource})
        let loading = LOAD_STATE.success;
        this.setState({ loading })
      }else{
        let loading = LOAD_STATE.complete;
        this.setState({ loading })
      }
      })
     }
     

  appendData=()=> {
    queryOrders({}).then((res)=>{
      if(res.code==='0000'){
        this.setState({data:res.data})
        const {data,dataSource}=this.state;
        data.map((item)=>{
          dataSource.push(<Order key={item.orderId} info={item} ></Order>);
        }) 
        this.setState({ dataSource:dataSource });
      }
    })
  }
  appendDa=()=>{
    const {data}=this.state;
    let temp=[]
    data.map((item)=>{
      temp.push(<Order key={item.orderId} info={item} ></Order>);
    })
    this.setState({ dataSource:temp });
  }

  render() {
    const {  refreshing, loading, dataSource } = this.state;
    const style ={ position: 'relative', overflowY: 'auto', maxHeight: 1000,};
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