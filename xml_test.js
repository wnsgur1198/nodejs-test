function reaFileCallback(err, data) 
{
   if (err) {
      throw err;
   }
      var genreno,
         thisgenreobject,
         thisgenre,
         doc,
         genres;
      
   doc = new xmldom().parseFromString(data, 'application/xml');
  
   genres = doc.getElementsByTagName('genre');
  
  
   for(var i=0; i<genres.length; i++) {
      thisgenreobject = genres[i];
      if (thisgenreobject.firstChild) {
         thisgenre = thisgenreobject.firstChild.nodeValue;
         if (thisgenre === 'Computer') {
         console.log(thisgenreobject.parentNode.getElementsByTagName('title')[0].firstChild.nodeValue);
         }
      }
   }
  
   titles = doc.getElementsByTagName('title');
   console.log(titles.length);
   for(var i=0; i<titles.length; i++) {
      console.log(titles[i].firstChild.nodeValue);
   }
   
   var node = doc.getElementById('bk110');
   var nodes = node.childNodes;
   console.log(node.nodeName);
   console.log(nodes.length);
   for(var i=0; i<nodes.length; i++) {
      if(nodes[i].firstChild) {
         console.log(nodes[i].nodeName, ":", nodes[i].firstChild.nodeValue);
      }
   }
  
}//function freaFileCallback

//=============================================
var xmldom = require('xmldom').DOMParser     // require(모듈이름) : 모듈을 읽어들이는 함수
var fs = require('fs');

fs.readFile('books.xml', 'utf-8', reaFileCallback);
