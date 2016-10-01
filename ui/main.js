var img=document.getElementById('logo');
var marginLeft=0;
function movRght(){
    marginLeft=marginLeft+2;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick=function(){
 var interval = setInterval(movRght,10);
  };
  
  
var counter=0;
var button=document.getElementById('counter');

button.onclick=function(){
    var request=new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
       request.readystate == XMLHttpRequest.Done;
    }
    counter=counter+1;
    var span=document.getElementById('count');
    span.InnerHTMl=counter.toString();
};