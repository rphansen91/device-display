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