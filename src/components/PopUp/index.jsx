import React ,{useState}from 'react';
import styles from './index.less'
import {Input} from 'zarm';
import But from './popupinfo/Button/index'
import LayOut from './popupinfo/LayOut'
export default ()=>{
  var css={ 
    change:
    {textAlign: 'center',
    height:'16px',
    fontSize:'16px',
    fontFamily:'PingFangSC-Medium,PingFang SC',
    fontWeight:500,
    color:'rgba(0,0,0,1)',
    lineHeight:'16px'},
    input:{
      width:'315px',
      height:'44px',
      background:'rgba(248,248,248,1)',
      borderRadius:'4px',
      marginTop:'10px',
      height:'44px',
      width:'315px',
      marginBottom:'20px',
      paddingLeft:'10px',
      fontSize:'14px',
      color:'rgba(0,0,0,0.3)',
      paddingRight:'124px',
      paddingTop:'13px',
      paddingBottom:'11px',
    },
    title:{
      marginTop:'3px',
      textAlign:'center',
      fontSize:'16px',
      fontWeight:500,
      color:"rgba(171, 132, 66, 1)"
      


    },confirm:{
      color:'black'
    },
    change1:{
      marginTop:'18px',
      textAlign:'center',
      fontSize:'16px',
      fontWeight:500,

    },
    another:{
      display:'flex',
      justifyContent:'space-around'
      
    },
    another1:{
      width:'152px',
      backgroundColor:'red'

    }


    

  }
  

  return(
    <div>
      <div  className={styles['main']} >
        <LayOut>
        <div style={css.change} >兑换码</div>
        <Input style={css.input}type="text"/>
        <But>兑换</But>
        </LayOut>
      </div>
      {/* <div  className={styles['main']} >
        <LayOut>
        <div style={css.title} ><span style={css.confirm}> 确认领取</span>腾讯视频vip月卡</div>
        <div style={css.change1} >充值账号</div>
        <Input style={css.input}type="text"/>
        <div style={css.another}> 
        <But  width="152px" color='rgba(0, 0, 0, 0.1)'>取消</But>
         <But  width='152px'> 确认领取</But>
        </div>
     
        </LayOut>
      </div> */}
   
    </div>
  
    
  )
}
