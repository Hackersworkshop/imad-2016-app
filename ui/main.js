var img=document.getElementById('logo');
function movRght(){
    img.style.marginLeft= '100px';
}
img.onclick=function(){
 var interval = setinterval(movRght,100);
  };
var button=document.getElementById('counter');
