var system = require('system');
var os     = system.os;
var args   = system.args;
var name   = args[1];
var url    = args[2];

var page   = require('webpage').create();

page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';

page.open(url, function(status) {
    if (status !== 'success') {
         console.log('Unable to access ' + url);
         console.log(status);
     } else {

         console.log(name + ' ' + url);

      var title = page.evaluate(function() {
        return document.title;
      });

      var description = page.evaluate(function() {
        return document.querySelector("meta[name='description']").content;
      });

      //var content = page.content;

      console.log(title);
      console.log(description);
      //console.log(content);

         //page.render(name + '.png');
    }
  phantom.exit();
});
