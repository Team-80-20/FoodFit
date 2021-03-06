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
        if (item.recipe) {
            this.label = item.recipe.label
            this.yield = item.recipe.yield
            this.image = item.recipe.image
            this.source = item.recipe.source
            this.url = item.recipe.url
            this.ingredients = item.recipe.ingredientLines.join('</li><li class="recipe-list-item">')
            this.calories = Math.round(item.recipe.calories)
            this.servCalories = Math.round(item.recipe.calories / item.recipe.yield)
            this.servFat = Math.round(item.recipe.totalNutrients.FAT.quantity / item.recipe.yield)
            this.servCarb = Math.round(item.recipe.totalNutrients.CHOCDF.quantity / item.recipe.yield)
            this.servPro = Math.round(item.recipe.totalNutrients.PROCNT.quantity / item.recipe.yield)
        }
        else {
            this.label = item.label
            this.yield = item.yield
            this.image = item.image
            this.source = item.source
            this.url = item.url
            this.ingredients = item.ingredients
            this.calories = item.calories
            this.servCalories = item.servCalories
            this.servFat = item.servFat
            this.servCarb = item.servCarb
            this.servPro = item.servPro
        }
        app.recipeResults.push(this)
        this.id = app.recipeResults.length -1
    }
    
    module.RecipeObj = RecipeObj
    module.foodSearchView = foodSearchView

})(app)