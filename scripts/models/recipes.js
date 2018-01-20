var app = app || {};

(module => { 

    Recipe.all = []

    function Recipe(){

    }

    Recipe.get = meal => {
       return $.get('http://localhost:3000/search', meal)
    }

    

    module.Recipe = Recipe

})(app)