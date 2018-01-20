var app = app || {};

(module => { 

    const foodSearchView= {}

    const $view = $('#foodSearch-view')

    foodSearchView.init = () => {
        $view.show()
        $('#foodSearch-submit').one('click', (e) => {
            e.preventDefault();
            search();
        })
    }

    function search(){
        let meal = {
            food: $('#food').val(),
            minCal: $('#minCal').val(),
            maxCal: $('#maxCal').val(),
            healthLabel: $('#healthLabel').val(),
        }
        console.log(meal)
        app.Recipe.get(meal)
        .then(data => data.hits.forEach(hit => {
            let newRec = new RecipeObj(hit)
            recipeResults.push(newRec)
        }))
        .then(() => page('/food-results'))
        console.log(recipeResults)
    }

    let recipeResults = []

    function RecipeObj(item) {
        this.label = item.recipe.label
        this.yield = item.recipe.yield
        this.image = item.recipe.image
        this.source = item.recipe.source
        this.url = item.recipe.url
        this.ingredientLines = item.recipe.ingredientLines
        this.calories = Math.round(item.recipe.calories)
        this.servCalories = Math.round(item.recipe.calories / item.recipe.yield)
        this.servFat = Math.round(item.recipe.totalNutrients.FAT.quantity / item.recipe.yield)
        this.servCarb = Math.round(item.recipe.totalNutrients.CHOCDF.quantity / item.recipe.yield)
        this.servPro = Math.round(item.recipe.totalNutrients.PROCNT.quantity / item.recipe.yield)
    }

    module.foodSearchView = foodSearchView

})(app)