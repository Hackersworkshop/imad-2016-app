
  
var count=0;
var button=document.getElementById('count');
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange= function()
    {
       request.readystate == XMLHttpRequest.Done;
    }
    count=count+1;
    var span=document.getElementById('counter');
    span.InnerHTMl=counter.toString();
};