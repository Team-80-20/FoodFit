var app = app || {};

(module => { 

    const foodResultsView= {}

    const $view = $('#foodResults-view')

    var recipeResults = []


    foodResultsView.init = () =>{
        let resultsRecipe = app.recipeResults
        if (resultsRecipe.length > 0) {
        $('#foodResults-view').empty()
        let template = Handlebars.compile($('#recipe-template').text())      
        resultsRecipe.forEach(item => {
            let newResult = template(item)
            $('#foodResults-view').append(newResult)
            $('.delete-recipe').hide()
            $('.saved').hide()
            $('#no-recipes').hide()
        })}
        else {
        $('#no-recipes').show()
        }
    $('.recipe-div').on('click', '.save-recipe', (e) => {
        const id = $(e.target).data('id')
        saveRecipe(app.recipeResults[id])
        $(`#save-recipe-${id}`).hide()
        $(`#saved-${id}`).show()
    })
    $view.show()
}


function saveRecipe(recipeResult) {
    let storedRecipes = []
    if (localStorage.getItem('recipeBox')) {
        storedRecipes = JSON.parse(localStorage.getItem('recipeBox'))
    }
    storedRecipes.push(JSON.stringify(recipeResult))
    localStorage.setItem('recipeBox', JSON.stringify(storedRecipes)
)}
    module.recipeResults = recipeResults

    module.foodResultsView = foodResultsView

})(app)