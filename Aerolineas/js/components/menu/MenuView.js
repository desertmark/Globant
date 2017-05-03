// var config = {
//     "type": "horizontal",
//     "el": "",
//     "class": ["",""], //optional
//     "items":[{
//         "text": "",
//         "href": "",
//         "target": "",
//         "dropdown":  [{ //optional
//             "text": "",
//             "href": "",
//             "target": "",
//         }]
//     }]
// }

/**
 * MenuView class
 * @param {object} attributes 
 */
var MenuView = function(configs) {
    this.configs = configs;
    this.$el = document.querySelector(configs.el);
}

/**
 * Methods
 */
MenuView.prototype= {
    get:function(att) {
        return this.configs[att]//si la clave no existe devuelve null
    },
    set:function(att, value){
        this.configs[att] = value;
    },
    createItemsList:function(){        
        let items = this.configs.items.map(item =>{
            return `<a href="${item.href}" target="${item.target}">${item.text}</a>`
        }).reduce((prev,current)=> {
            return prev + current;
        },"");
        return items;
        
    },    
    render:function(){
        let template = `<nav class="${this.configs.class.join(' ')}">
                            ${this.createItemsList()}
                        </nav>`;
        this.$el.innerHTML = template;
    }
}
