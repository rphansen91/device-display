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