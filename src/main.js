const loadDevice = require('./device');
const render = require('./render');
const insert = require('./insert');

window.DeviceDisplay = (frame, opts) => {
    if (!opts) return new Error('Must supply options');
    
    return loadDevice(opts)
    .then(render(opts))
    .then(insert(frame))
}