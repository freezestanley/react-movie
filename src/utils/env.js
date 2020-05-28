export default function getEnv(){
  let url = window.location.host;
  if(url.indexOf('localhost')>-1){
    return 'local'
  }else if(url.indexOf('dev')>-1){
    return 'dev'
  }else if(url.indexOf('test')>-1){
    return 'test'
  }else if(url.indexOf('uat')>-1){
    return 'uat'
  }else if(url.indexOf('pre')>-1){
    return 'pre'
  }else{
    return 'prd'
  }
}