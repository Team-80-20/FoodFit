
var app = app || {};

(module => { 
    
    const recipeBoxView= {}
    
    const $view = $('#recipe-box')
    
    recipeBoxView.init = () =>{
        $('#recipe-box').empty()
        app.recipeResults = []
        let storedRecipe = JSON.parse(localStorage.getItem('recipeBox'))
        storedRecipe.forEach(recipe => {
            new app.RecipeObj (recipe)
        })
        let template = Handlebars.compile($('#recipe-template').text());       
        app.recipeResults.forEach(item => {
        let newResult = template(item)
        $('#recipe-box').append(newResult)
        $('.recipe-info').hide()
        $('.save-recipe').hide()
        $('.saved').hide()

        $('.recipe-div').one('click', '.view-more', (e) => {
            const id = $(e.target).data('id')
            console.log(`clicked id:${id}`)
            $(`#recipe-info-${id}`).slideToggle('slow')
            $(`#show-id-${id}`).hide()
           })

        $('.recipe-div').on('click', '.delete-recipe', (e) => {
            const id = $(e.target).data('id')
            let newBox = app.recipeResults.splice(id-1, 1)
            localStorage.setItem('recipeBox', JSON.stringify(newBox))
            page('/recipe-box')
        })
    })
    $view.slideToggle('slow')
}

    module.recipeBoxView = recipeBoxView

})(app)