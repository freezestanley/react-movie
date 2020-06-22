
function urltoImage (url){
  var img = new Image();
  img.src = url;
  img.onload = function(){
    imagetoCanvas(img);
  }
}
function imagetoCanvas(image){
  var cvs = document.createElement("canvas");
  var ctx = cvs.getContext('2d');
  cvs.width = image.width;
  cvs.height = image.height;
  ctx.drawImage(image, 0, 0, cvs.width, cvs.height);
  return cvs ;
};
export function getImageBackgroundColor(url){
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.src = url;
    img.onload = function(){
      imagetoCanvas(img);
      const canvas = imagetoCanvas(img);
      resolve(canvas);
    }
    
  })
 
}
