const { buildDevice, buildScreen } = require('./builders');

module.exports = opts => styles => {
    const device = buildDevice(styles);
    const screen = buildScreen(opts.screen);
    device.appendChild(screen);
    return { device, screen };
};