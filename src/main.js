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