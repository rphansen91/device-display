Device Display
==============

Render any URL within a fully interactive Desktop, Mobile, or Tablet display.

Usage
-----

1. Add iframes to the DOM as usual
```html
<iframe id="frame" src="http://espn.com" frameborder="0"></iframe>
```

2. Initialize the device
```js

var DeviceDisplay = require('device-display');
var frame = document.getElementById('frame');
            
DeviceDisplay(
    frame, {
    src: '/assets/mac.png',
    scale: 0.4,
    screen: {
        // ABSOLUTE POSITION OF SCREEN WITHIN IMAGE
        // MUST BE HARDCODED FOR NOW
        // MAY OPT TO BUILD AN IMAGE PARSER FOR THIS STEP IN LATER RELEASES
        top: '50px',
        left: '180px',
        width: '1200px',
        height: '760px',
    }
    }).then(function (element) {
        // NEW WRAPPER ELEMENT AROUND IFRAME
    }).catch(function () {
        // ERRORS IF ANY OPTIONS FAIL
    })
```