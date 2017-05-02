//app.js

//This the data I will fill the model
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

for(let i = 0; i<promos.length; i++){
    let promo = promos[i];
    let promoView = new PromoView({
        el:'#promos',
        model: new Promo(promo)
    })
    promoView.render();
}

// // Creating view to render
// var promoView = new PromoView({
//     el: '#promos',
//     model: new Promo(promo)
// });

// //As I set attributes to the view I just render its content
// promoView.render();