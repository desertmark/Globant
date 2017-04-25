var VideoView = function (attributes) {
    this.attributtes = attributes;
    this.$el = document.querySelector(attributes.el);
}

VideoView.prototype.get = function (attribute) {
    return this.attributtes[attribute];
}

VideoView.prototype.set = function (attribute, value) {
    this.attributes[attribute] = value;
}

VideoView.prototype.initialize = function () {
    console.log("iniciando la vista de videos con los datos ", arguments);
}

VideoView.prototype.render = function () {
    var container = document.createElement('div');
    container.innerHTML = this.template();
    this.$el.append(container.firstChild);
}

VideoView.prototype.template = function () {
    let model = this.get("model");
    let template = '';
    template += '<div class="videoView">';
    template +=     '<img src="'+model.get('capture')+'" alt = "imagen de vista previa">';
    template +=     '<p class="video-title"><a href="#">' + model.get('title') + '</a></p>';
    template +=     '<p class="video-descripcion"><a href="#' + model.get('user').profile + '">' + model.get('user').name + '</a></p>';
    template +=     '<p class="video-descripcion">' + model.get('visualizations') + ' visualizaciones</p>';
    template +=     '<p class="video-descripcion">' + model.get('uploaded') + '</p>';
    template += '</div>';
    return template;
}