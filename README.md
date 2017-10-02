###phantomJS Checklist Tool

In development for a checklist tool for web development


####Usage
phantomjs [name] [full url] [p|t|d]


[name] can be what ever you wish to mark this run *required*


[full url] including http[s]:// *required*


[p|t|d] phone / tablet / desktop rendering

if not supplied only site content will be returned


phantomjs script.js fleetridge http://www.fleetridge.com p|t|d

=======
This script is still in dev as I was thinking about getting page attributes, and form elements to create a checklist of requirements prior to having a site go live. That has all, somewhat, gone to the wayside for now, and really only using this script to grab screen images.

But who knows...


phantomjs script.js space http://space.com d
phantomjs script.js space http://space.com t
phantomjs script.js space http://space.com p
