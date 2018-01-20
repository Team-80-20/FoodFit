var app = app || {};

(module => { 

    const foodResultsView= {}

    const $view = $('#foodResults-view')

    function RecipeObj(item) {
        this.label = item.hits.recipe.label
        this.yield = item.hits.recipe.yield
        this.image = item.hits.recipe.image
        this.source = item.hits.recipe.source
        this.url = item.hits.recipe.url
        this.ingredientLines = item.hits.recipe.ingredientLines
        this.calories = item.hits.recipe.calories
        this.totalNutrients = item.hits.recipe.totalNutrients
        this.FAT = item.hits.recipe.totalNutrients.FAT.quantity
        this.CHOCDF = item.hits.recipe.totalNutrients.CHOCDF.quantity
        this.PROCNT = item.hits.recipe.totalNutrients.PROCNT.quantity        
    }

    foodResultsView.init = () =>{
        $view.show()
    }

    module.foodResultsView = foodResultsView

})(app)