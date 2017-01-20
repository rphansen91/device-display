const loadDevice = require('./device');
const render = require('./render');
const insert = require('./insert');

const isFn = fn => x => {
    if (typeof fn === 'function') return fn(x);
    return x;
}

window.DeviceDisplay = (frame, opts) => {
    let ls = [];
    if (!opts) return new Error('Must supply options');
    
    loadDevice(opts)
    .then(render(opts))
    .then(insert(frame))
    .then(d => isFn(ls[0])(d))
    .catch(e => isFn(ls[1])(e));

    return {
        ready: l => ls[0] = l,
        error: e => ls[1] = e
    }
}