
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



      // Get that title
      var title = page.evaluate(function() {
        return document.title;
      });

      // Get the desciption
      // var description = page.evaluate(function() {
      //   return document.querySelector("meta[name='description']").content;
      // });

      // Get the form
      form_id = page.evaluate(function() {
        return document.forms[0].id;
      });

      // Get the form Elements
      // form_elements = page.evaluate(function() {
      //   return document.getElementById(document.forms[0].id).elements;
      // });

      inputs = page.evaluate(function() {
        return document.getElementsByTagName("input");
      });

      //var content = page.content;

      // If device is not set from the arguments, print
      // the title, description
      if (typeof device === 'undefined') {
          // console.log('Title: ' + title);
          // console.log('Description: ' + description);
          // console.log(inputs.length);

          //console.log(inputs[1].tagName + inputs[1].getAttribute('name'));
          // console.log(document.getElementById("webform-client-form-6").elements);
          // console.log(document.forms[0].id);
           // console.log(inputs[0]);
           for (var rows in inputs[0][type]) {
             console.log(rows);
           }
            // for (var i=0; i < inputs.length; i++)
            // {
            //    // if (inputs[i].getAttribute('type') == 'text')
            //    // {
            //        //console.log(inputs[i].tagName+inputs[i].getAttribute('name'));
            //        console.log(inputs[i]);
            //    // }
            // }



      }
        else {
          page.render('images/' + name + '_' + device_name + '.png');
      }
    }
  phantom.exit();
});
