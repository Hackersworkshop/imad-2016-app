var express = require('express');
var morgan = require('morgan');
var path = require('path');
app.use(morgan('combined'));

var app = express();
var cont1={
   title: 'Article One|HackersWorkhop';
   heading: 'Article One';
   content:`
	 <p>		This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.
	 </p>
	 <p>		This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.
	 </p>
	 <p>		This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.
	 </p>`
 };
function crtTemp(data){
  var title= data.title;
  var heading= data.heading;
  var content= var.content;
  var htmltemp=`
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
  return htmltemp;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1.html', function (req, res) {
  res.sendFile(crtTemp(article1));
});

app.get('/article2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/article3.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
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
