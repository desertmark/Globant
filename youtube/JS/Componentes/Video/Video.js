var Video = function (attributes) {
    this.attributtes = attributes;
    this.initialize.apply(this, arguments);
}

Video.prototype.get = function (attribute) {
    return this.attributtes[attribute];
}

Video.prototype.set = function (attribute, value) {
    this.attributes[attribute] = value;
}

Video.prototype.initialize = function () {
    console.log("iniciando el modelo de videos con los datos ", arguments);
}