var img=document.getElementById('logo');
var marginLeft=0;
function movRght(){
    marginLeft=marginLeft+2;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick=function(){
 var interval = setInterval(movRght,10);
  };
  
var count=0;
var button=document.getElementById('counter');
button.onclick =function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange= function(){
       request.readystate == XMLHttpRequest.Done;
    }
    count=count+1;
    var span=document.getElementbyId('count');
    span.InnerHTMl=count.toString();
};