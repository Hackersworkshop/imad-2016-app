var img=document.getElementById('logo');
var marginLeft=0;
function movRght(){
    marginLeft=marginLeft+10;
    img.style.marginLeft= marginLeft+'px';
}
img.onclick=function(){
 var interval = setinterval(movRght,100);
  };
var button=document.getElementById('counter');
