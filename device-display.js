(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const checkSize = src => new Promise((res, rej) => {
    const img = new Image();
    img.src = src;
    img.onload = () => res(img);
    img.onerror = rej;
}).then(img => ({
    transform: 'scale(0.4)',
    backgroundImage: `url(${src})`,
    backgroundSize: img.width + 'px',
    width: img.width + 'px',
    height: img.height + 'px'
}))

const buildElement = className => style => {
    let element = document.createElement('div');
    element.classList.add(className);
    Object.keys(style).map(s =>
        element.style[s] = style[s]);
    return element;
}
const buildDeviceElement = buildElement('device-display');
const buildScreenElement = buildElement('device-screen');

const buildDevice = opts =>
    checkSize(opts.src)
    .then(size => {
        const device = buildDeviceElement(size);
        const screen = buildScreenElement(opts.screen);
        device.appendChild(screen);
        return { device, screen }
    });

window.DeviceDisplay = (frame, opts) => {
    if (!opts) return new Error('Must supply a device image');
    buildDevice(opts).then(({ device, screen }) => {
        const parent = frame.parentNode;
        parent.insertBefore(device, frame);
        screen.appendChild(frame);
    })
}
},{}]},{},[1]);
