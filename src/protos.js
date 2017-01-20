Element.prototype.css = function (style) {
    Object.keys(style).map(s => this.style[s] = style[s]);
}