//var headerConfig = {
//    "templateUrl":"",
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
        this.getTemplate().then(this.loadTeamplate.bind(this));
     }
     this.loadTeamplate = function(response){
         
         response = response.replace("${configs.class}",this.configs.class);
         response = response.replace("${configs.logo.src}",this.configs.logo.src);
         response = response.replace("${configs.logo.alt}",this.configs.logo.atl);
         response = response.replace("${configs.telefono}",this.configs.telefono);
         response = response.replace("${this.renderIdiomas()}",this.renderIdiomas());
         response = response.replace("${configs.contacto.href}",this.configs.contacto.href);
         response = response.replace("${configs.contacto.text}",this.configs.contacto.text);
         
         //var html = this.replaceBraces(response);
         this.$el.innerHTML = response;
     }
     this.replaceBraces = function(template){
        console.log(this);
        let bracesPatt = /[$]+[{]+[a-z,.]+[}]/g;
        let keysPatt = /[.]+[a-z]*/g;
        let braces = template.match(bracesPatt);
        let keys = braces.map((m) => {
    		return m.match(keysPatt).join('').replace('.','')
        });

        for (var i = 0; i < braces.length; i++) {
            let brace = brace[i];
            let key = keys[i];
            let value = this.configs[key];
            template.replace(brace,value);            
        }
        return template;
     }
     this.getTemplate = function(){
         return new Promise(function(resolve,reject){
            let req = new XMLHttpRequest();
            req.open("GET",configs.templateUrl)

            req.onload = function(){
                if(req.status === 200){
                    resolve(req.response);
                }else{
                    reject(Error(req.response))
                }            
            }
            req.send();
            });        
     }
     console.log(this);
}