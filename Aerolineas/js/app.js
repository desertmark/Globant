//app.js

//This the data I will fill the model
let headerConfig = {
    "el": "#header",
    "class": "",
    "logo": {
        "src": "../Resources/logo_Aerolineas.gif",
        "alt": "Logo de Aerolineas argentinas"
    },
    "telefono": "Ingresá a tu cuenta Aerolíneas Plus 0810-222-86527",
    "contacto": {
        "href": "#contacto",
        "text": "Contacto y preguntas frecuentes"
    },
    "idiomas": [{
        "value": "1",
        "text": "Argentina(Español)"
    }, {
        "value": "2",
        "text": "Other countries (English)"
    }]
}
let headerView = new HeaderView(headerConfig);
headerView.render();


 var menuConfig = {
     "type": "horizontal",
     "el": "#menu",
     "class": ["",""], //optional
     "items":[{
         "text": "La empresa",
         "href": "#",
         "target": "_self",
     },
     {
         "text": "Reserva y servicios",
         "href": "#",
         "target": "_self",
     },
     {
         "text": "Info para tu viaje",
         "href": "#",
         "target": "_self",
     },
     {
         "text": "Aerolineas plus",
         "href": "#",
         "target": "_self",
     }]
 }
 let menuView = new MenuView(menuConfig);
 menuView.render();

 var promos = [{
     "origin": "Buenos Aires",
     "destination": "El Calafate",
     "price": 1200,
     "currency": "ARS",
     "currencySymbol": "$"
 },
 {
     "origin": "Buenos Aires",
     "destination": "El Calafate",
     "price": 1200,
     "currency": "ARS",
     "currencySymbol": "$"
 },
 {
     "origin": "Buenos Aires",
     "destination": "El Calafate",
     "price": 1200,
     "currency": "ARS",
     "currencySymbol": "$"
 },
 {
     "origin": "Buenos Aires",
     "destination": "El Calafate",
     "price": 1200,
     "currency": "ARS",
     "currencySymbol": "$"
 }];

 for (let i = 0; i < promos.length; i++) {
     let promo = promos[i];
     let promoView = new PromoView({
         el: '#promos',
         model: new Promo(promo)
     })
     promoView.render();
 }

 var bigPromos = [{
     "origin": "buenos aires",
     "destination": "el calafate",
     "text": "llegá volando a el calafate. más rápido, más comodo, más cuotas.",
     "img": {
         "src": "../resources/calafate.jpg",
         "alt": "imagen del destino de la promoción"
     },
     "price": 1200,
     "currency": "ars",
     "currencysymbol": "$"
 },
 {
     "origin": "buenos aires",
     "destination": "el calafate",
     "text": "llegá volando a el calafate. más rápido, más comodo, más cuotas.",
     "img": {
         "src": "../resources/calafate.jpg",
         "alt": "imagen del destino de la promoción"
     },
     "price": 1200,
     "currency": "ars",
     "currencysymbol": "$"
 }];

 for (let i = 0; i < bigPromos.length; i++) {
     let bigPromo = bigPromos[i];
     let bigPromoView = new BigPromoView({
         el: '#bigPromos',
         model: bigPromo
     })
     bigPromoView.render();
 }