(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./protos');

const buildElement = className => style => {
    let element = document.createElement('div');
    element.classList.add(className);
    element.css(style);
    return element;
}

module.exports = {
    buildDevice: buildElement('device-display'),
    buildScreen: buildElement('device-screen')
}
},{"./protos":5}],2:[function(require,module,exports){
const loadDevice = opts => new Promise((res, rej) => {
    const img = new Image();
    img.src = opts.src;
    img.onload = () => res(img);
    img.onerror = rej;
})

const computeStyles = opts => img => ({
    transform: `scale(${opts.scale || 0.4})`,
    backgroundImage: `url(${opts.src})`,
    backgroundSize: img.width + 'px',
    width: img.width + 'px',
    height: img.height + 'px'
})

module.exports = opts => 
    loadDevice(opts)
    .then(computeStyles(opts))
},{}],3:[function(require,module,exports){
module.exports = frame => ({ device, screen }) => {
    const parent = frame.parentNode;
    parent.insertBefore(device, frame);
    screen.appendChild(frame);
    return device;
}
},{}],4:[function(require,module,exports){
const loadDevice = require('./device');
const render = require('./render');
const insert = require('./insert');

window.DeviceDisplay = (frame, opts) => {
    if (!opts) return new Error('Must supply options');
    
    return loadDevice(opts)
    .then(render(opts))
    .then(insert(frame))
}
},{"./device":2,"./insert":3,"./render":6}],5:[function(require,module,exports){
Element.prototype.css = function (style) {
    Object.keys(style).map(s => this.style[s] = style[s]);
}
},{}],6:[function(require,module,exports){
const { buildDevice, buildScreen } = require('./builders');

module.exports = opts => styles => {
    const device = buildDevice(styles);
    const screen = buildScreen(opts.screen);
    device.appendChild(screen);
    return { device, screen };
};
},{"./builders":1}]},{},[4]);
