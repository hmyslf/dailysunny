var storedText;
fetch('https://dailysunny.com/dailysunny_mobile_apps/newsurl.txt')
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text.split('\n');
      done();
    });
  });

function done() {
	document.getElementById("img-news").src = storedText[0];
  document.getElementById("img-news1").src = storedText[1];
  document.getElementById("img-news2").src = storedText[2];
  document.getElementById("img-news3").src = storedText[3];
  document.getElementById("img-news4").src = storedText[4];
  document.getElementById("img-news5").src = storedText[5];
}
function openPDF(a) {
  switch(a){  
  case 1: 
  file = storedText[0].substr(0, storedText[0].lastIndexOf(".")) + ".pdf";
  window.open(file, '_system', 'location=yes,EnableViewPortScale=yes');
  break;
  case 2: 
  file = storedText[1].substr(0, storedText[1].lastIndexOf(".")) + ".pdf";
  window.open(file, '_system', 'location=yes,EnableViewPortScale=yes');
  break;
  case 3: 
  file = storedText[2].substr(0, storedText[2].lastIndexOf(".")) + ".pdf";
  window.open(file, '_system', 'location=yes,EnableViewPortScale=yes');
  break;
  case 4: 
  file = storedText[3].substr(0, storedText[3].lastIndexOf(".")) + ".pdf";
  window.open(file, '_system', 'location=yes,EnableViewPortScale=yes');
  break;
  case 5: 
  file = storedText[4].substr(0, storedText[4].lastIndexOf(".")) + ".pdf";
  window.open(file, '_system', 'location=yes,EnableViewPortScale=yes');
  break;
  case 6: 
  file = storedText[5].substr(0, storedText[5].lastIndexOf(".")) + ".pdf";
  window.open(file, '_system', 'location=yes,EnableViewPortScale=yes');
  break;
  
  }
}

monaca.cloud.Push.setHandler(function(data) {
  console.log(data.test);
  console.log(data.framework);
});