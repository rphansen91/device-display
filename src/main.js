var DeviceDisplay = window.DeviceDisplay || {}

const loadDevice = require('./device');
const render = require('./render');
const insert = require('./insert');

DeviceDisplay = (frame, opts) => {
    if (!opts) return new Error('Must supply options');
    
    return loadDevice(opts)
    .then(render(opts))
    .then(insert(frame))
}

window.DeviceDisplay = DeviceDisplay;
module.exports = DeviceDisplay;