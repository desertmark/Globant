//{
//    "origin": "Buenos Aires",
//    "destination": "El Calafate",
//    "text": "Llegá volando a el calafate. Más rápido, más comodo, más cuotas.",
//    "img": {
//      "src" : "../Resources/calafate.jpg",
//      "alt" : "Imagen del destino de la promoción"
//    },    
//    "price": 1200,
//    "currency": "ARS",
//    "currencySymbol": "$"
//}

var BigPromoView = function(configs) {
    this.__proto__ = new PromoView(configs)
    this.__proto__.template = function () {
        let template = `<div class="grilla-item grilla-item-complejo">
                        <div class="promotion">
                            <div class="promotion-img">
                                <img src="${this.get('model').img.src}" alt="${this.get('model').img.alt}" />
                            </div>
                            <div class="promotion-description">
                                <p class ="origin">${this.get('model').origin}</p>
                                <p class ="destination blue-text">${this.get('model').destination}</p>

                                <br />

                                <p>${this.get('model').text}</p>

                                <br />

                                <label for="price">Tarífa</label>
                                <p class ="price blue-text" id="price">${this.get('model').currencysymbol} ${this.get('model').price}</p>

                                <br />
                                <a class="blue-text" href="#">Comprar</a>
                            </div>
                        </div>
                    </div>`;
        return template;

    }
}


