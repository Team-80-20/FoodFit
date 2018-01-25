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
            $('.recipe-info').hide()
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
    $('.recipe-div').on('click', '.view-more', (e) => {
        const id = $(e.target).data('id')
        console.log(`clicked id:${id}`)
        $(`#recipe-info-${id}`).slideToggle('slow')
        $(`#show-id-${id}`).hide()
        $(`#quick-view-${id}`).hide()
    })
    $('.recipe-div').on('click', '.view-less', (e) => {
        const id = $(e.target).data('id')
        console.log(`clicked id:${id}`)
        $(`#recipe-info-${id}`).slideToggle('slow')
        $(`#show-id-${id}`).delay(400).fadeIn('slow')
        $(`#quick-view-${id}`).delay(400).fadeIn('slow')
    })
    $view.slideToggle('slow')
}


function saveRecipe(recipeResult) {
    let storedRecipes = []
    if (localStorage.getItem('recipeBox')) {
        storedRecipes = JSON.parse(localStorage.getItem('recipeBox'))
    }
    storedRecipes.push(recipeResult)
    localStorage.setItem('recipeBox', JSON.stringify(storedRecipes)
)}
    module.recipeResults = recipeResults

    module.foodResultsView = foodResultsView

})(app)