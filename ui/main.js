var button= document.getElementById('counter');
button.onclick = function() {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
         if(request.status === 200){
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = cunter.toString();
         }
        }
    };
    request.open('GET','http://hackersworkshop.imad.hasura-app.io/counter',true);
    resquest.send(null);
};


