var app = app || {};

(module => { 

    const foodResultsView= {}

    const $view = $('#foodResults-view')

    foodResultsView.init = () =>{
        let template = Handlebars.compile($('#recipe-template').text());       
        app.recipeResults.forEach(item => {
        let newResult = template(item)
        $('#foodResults-view').append(newResult)
    })
    $('.recipe-div').on('click', '.save-recipe', (e) => {
        const id = $(e.target).data('id')
        console.log('clicked!', id)
        saveRecipe(app.recipeResults[id])
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

    module.foodResultsView = foodResultsView

})(app)