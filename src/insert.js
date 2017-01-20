module.exports = frame => ({ device, screen }) => {
    const parent = frame.parentNode;
    parent.insertBefore(device, frame);
    screen.appendChild(frame);
    return device;
}