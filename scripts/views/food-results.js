var app = app || {};

(module => { 

    const foodResultsView= {}

    const $view = $('#foodResults-view')

    foodResultsView.init = () =>{
        $view.show()

        // Recipe.prototype.toHtml = function() {
        //     let template = Handlebars.compile($('#recipe-template').text());       
        //     return template(this);
        //   };

        // app.recipeResults.forEach(recipeResult => $('#').append(recipe.toHtml()));
    }

    module.foodResultsView = foodResultsView

})(app)