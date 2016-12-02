
// Set Variables
var system = require('system');
var os     = system.os;
var args   = system.args;
var name   = args[1];
var url    = args[2];
var device = args[3];

// Create Page
var page   = require('webpage').create();

// Set that UserAgent
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';


// Third argument set viewport width
  if (device == 'p') {
    var size = 400;
    var device_name = 'phone';
  }
  if (device == 't') {
    var size = 760
    var device_name = 'tablet';
  }
  if (device == 'd') {
    var size = 1200
    var device_name = 'desktop';
   }

// Set the viewportSize
  page.viewportSize = {
    width: size,
    height: 800
  };

// Open that bad boy up
page.open(url, function(status) {
    // Oops, something wrong happened
    if (status !== 'success') {
         console.log('Unable to access ' + url);
         console.log(status);
     } else {

      //console.log(name + ' ' + url);

      // Get that title
      var title = page.evaluate(function() {
        return document.title;
      });

      // Get the desciption
      var description = page.evaluate(function() {
        return document.querySelector("meta[name='description']").content;
      });

      // Find specific class.
      // TESTING ERRORS HERE
      var pnt = page.evaluate(function() {
        return document.querySelectorAll(".pnt");
      });


      //var content = page.content;

      // If device is not set from the arguments, print
      // the title, description
      if (typeof device === 'undefined') {
          console.log('Title: ' + title);
          console.log('Description: ' + description);
          //console.log(pnt);
          //console.log(content);
      }
        else {
          page.render('images/' + name + '_' + device_name + '.png');
      }
    }
  phantom.exit();
});
