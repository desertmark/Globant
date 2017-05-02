/**
 * PromoView class
 * Handles Rendering, events and differents stuff of a UI Component
 * This class is the glue between a model and the DOM
 * This class should only manage user interactions, and updates a model, 
 * without applying business logic
 * @param {object} attributes 
 */
var PromoView = function(attributes) {
    this.attributes = attributes;
    this.$el = document.querySelector(attributes.el);
}

/**
 * default getter
 */
PromoView.prototype.get = function(attribute) {
    return this.attributes[attribute];
}

/**
 * default setter
 */
PromoView.prototype.set = function(attribute, value) {
    this.attributes[attribute] = value;
}

/**
 * This method is an example about calling a metho with apply in a constructor
 * In this case, we can use it as a event binding.
 */
Promo.prototype.initialize = function() {
    console.log("initializing View Promo with data", arguments);
}

/**
 * Render method,
 * given a template, renders a Component content
 * This can be as complex as you want
 */
PromoView.prototype.render = function() {
    var container = document.createElement('div');
    container.innerHTML = this.template();
    this.$el.append(container.firstChild);
}

/**
 * Builds a tamplate layout, attaching model to its container 
 */
PromoView.prototype.template = function() {

    let template = `<div class="grilla-item grilla-item-simple">
                        <div class="promotion">
                            <div class="promotion-description">
                                <p class="origin">${this.get("model").get("origin")}</p>
                                <p class="destination blue-text">${this.get("model").get("destination")}</p>

                                <label for="price">Tarífa</label>
                                <p class="price blue-text" id="price">${this.get("model").get("price")}</p>

                                <br />
                                <a class="blue-text" href="#">Comprar</a>
                            </div>
                        </div>
                    </div>`     
        return template;
}