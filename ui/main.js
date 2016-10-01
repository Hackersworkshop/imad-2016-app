var img=document.getElementById('logo');
var marginLeft=0;
function movRght(){
    marginLeft=marginLeft+5;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick=function(){
 var interval = setInterval(movRght,10);
  };
var button=document.getElementById('counter');
