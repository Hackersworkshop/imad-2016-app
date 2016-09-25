var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   article1 : {
     title: 'Article One|HackersWorkhop',
     heading: 'Article One',
     content:`
     <p>		This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.
     </p>
     <p>		This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.
     </p>
     <p>		This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.
     </p>`
   },
   article2 : {
   title: 'Article Two | HackersWorkhop',
   heading: 'Article Two',
   content:`
	 <p>		This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.
	 </p>
	 <p>		This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.
	 </p>
	 <p>		This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.	This is the content of article two.
	 </p>`

  },
  article3 : {

   title: 'Article Three | HackersWorkhop',
   heading: 'Article Three',
   content:`
	 <p>		In xanadu did Kubla Khan,<br/><br/>a stately plessure , dom decree<br/><br/>were alphs the heavenly river flow<br/><br/>through caverns measure less to man
	 </p>`


  },
  article4:{
   title: 'Article Four | HackersWorkhop',
   heading: 'Article Four',
   content:`
	 <p>		This article is empty.
	 </p>`
  }
 };
function crtTmp (data) {
  var title= data.title;
  var heading= data.heading;
  var content= data.content;
  var htmltmp=`
  <html>
    <head>
      <title>
  	  ${title}
      </title>
  	<link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
  	 <div class="bold">
  		 <a href="/">Home</a>
  	 </div>
  	 <hr/>
  	 <div class=c1>
    	 <div class="text-big">
  	    <h1>${heading}
        </h1>
  	   </div>
  	   ${content}
  	 </div>
    </body>
  </html>
  `;
  return htmltmp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:article', function (req, res) {
  var artclnm=req.params.artclnm;
  res.send(crtTmp (articles[artclnm]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
