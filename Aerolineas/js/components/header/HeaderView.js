//var headerConfig = {
//    "el": "",
//    "class":"",
//    "logo": {
//        "src": "",
//        "alt":"imagen logo de la empresa"
//    },
//    "telefono": "",
//    "contacto": {
//        "href":"#",
//        "text":""
//    },
//    "idiomas": [{
//        "value": "",
//        "text" : ""
//    }]
//}
var HeaderView = function (configs) {
    this.configs = configs;
    this.$el = document.querySelector(configs.el);

    this.get = function (att) {
        return this.configs[att];
    }
    this.set = function (att, value) {
        this.configs[att] = value;
    }
    this.renderIdiomas = function () {
        var idiomasRendered = configs.idiomas.map(idioma => {
            return `<option value="${idioma.value}">${idioma.text}</option>`
        }).join('');
        return idiomasRendered;
    }
    this.render = function () {

        let template = `<div class="${configs.class}">
                        <img src="${configs.logo.src}" alt="${configs.logo.alt}"/>
                        <div class ="header-contact">
                            <p>
                                ${configs.telefono}
                                <select>
                                    ${this.renderIdiomas()}
                                </select>
                            </p>
                            <a href="${configs.contacto.href}">${configs.contacto.text}</a>
                        </div>
                    </div>`;
        this.$el.innerHTML = template;
     }



}