var a=document.getElementById('counter');
a.onclick = function() {
    var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate == XMLHttpRequest.Done){
         if(request.status == 200){
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = cunter.toString();
         }
        }
    };
    request.open('GET','http://hackersworkshop.imad.hasura-app.io/counter',true);
    resquest.send(null);
};


