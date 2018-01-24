var app = app || {};

(module => { 
    
    const foodSearchView= {}
    
    const $view = $('#foodSearch-view')
    
    foodSearchView.init = () => {
        if (app.recipeResults.length > 0){
            app.recipeResults = []
        }
        $view.slideToggle('slow')
        $('#foodSearch-submit').one('click', (e) => {
            e.preventDefault()
           
            search()
        })
    }
    
    function search(){
        let meal = {
            food: $('#food').val(),
            minCal: $('#minCal').val(),
            maxCal: $('#maxCal').val(),
            healthLabel: $('#healthLabel').val(),
        }
        app.Recipe.get(meal)
        .then(data => data.hits.forEach(hit => {
            let newRec = new RecipeObj(hit)
        }))
        .then(() => page('/food-results'))
        .then($('#food').val(''), $('#minCal').val(''), $('#maxCal').val(''), $('#healthLabel').val(''))
    }
    

    function RecipeObj(item) {
        this.label = item.recipe.label
        this.yield = item.recipe.yield
        this.image = item.recipe.image
        this.source = item.recipe.source
        this.url = item.recipe.url
        this.ingredients = item.recipe.ingredientLines.join('</li><li>')
        this.calories = Math.round(item.recipe.calories)
        this.servCalories = Math.round(item.recipe.calories / item.recipe.yield)
        this.servFat = Math.round(item.recipe.totalNutrients.FAT.quantity / item.recipe.yield)
        this.servCarb = Math.round(item.recipe.totalNutrients.CHOCDF.quantity / item.recipe.yield)
        this.servPro = Math.round(item.recipe.totalNutrients.PROCNT.quantity / item.recipe.yield)
        app.recipeResults.push(this)
         this.id = app.recipeResults.length -1
    }
    
    module.foodSearchView = foodSearchView

})(app)