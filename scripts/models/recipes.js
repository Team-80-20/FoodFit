var app = app || {};

(module => { 

    function Recipe(){

    }

    Recipe.fetch = meal => {
       return $.getJSON(meal)
    }

    module.Recipe = Recipe

})(app)