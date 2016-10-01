var img=document.getElementById('logo');
var marginLeft=0;
function movRght(){
    marginLeft=marginLeft+2;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick=function(){
 var interval = setInterval(movRght,10);
  };
  
  
var button=document.getElementById('counter');
button.onclick = function(){
    var request=new XMLHttoRequest();
    count=count+1;
    var span=document.getElementbyId('counter')
    span.InnerHTMl=count.toString();
}