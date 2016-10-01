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
        if(request.readystate === XMLHttpRequest.Done){
         if(request.status === 200){
             var counter = request.responseText;
         }
        }
    };
    request.open('GET','http://hackersworkshop.imad.hasura-app.io/counter',true);
    resquest.send(null);
};