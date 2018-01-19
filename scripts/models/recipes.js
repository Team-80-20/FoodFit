var app = app || {};

(module => { 

    Recipe.all = []
    
    function Recipe(){

    }

    Recipe.get = meal => {
       return $.get(meal)
    }

    module.Recipe = Recipe

})(app)