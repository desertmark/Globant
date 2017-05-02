/**
 * Menu class
 * @param {object} attributes 
 */
var Menu = function(attributes) {
    this.attributes = attributes;
    this.initialize.apply(this, arguments);
}

/**
 * default getter
 */
Menu.prototype.get = function(attribute) {
    return this.attributes[attribute];
}

/**
 * default setter
 */
Menu.prototype.set = function(attribute, value) {
    this.attributes[attribute] = value;
}

/**
 * This method is an example about calling a metho with apply in a constructor
 */
Menu.prototype.initialize = function() {
    console.log("initializing model Promo with data", arguments);
}