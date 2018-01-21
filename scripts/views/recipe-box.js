
var app = app || {};

(module => { 
    
    const recipeBoxView= {}
    
    const $view = $('#recipe-box')
    
    recipeBoxView.init = () =>{
        $('#recipe-box').empty()
        let storedRecipe = JSON.parse(localStorage.getItem('recipeBox'))
        let parsedRecipe = []
        storedRecipe.forEach(item =>{
            parsedRecipe.push(JSON.parse(item))
        })
        let template = Handlebars.compile($('#recipe-template').text());       
        parsedRecipe.forEach(item => {
        let newResult = template(item)
        $('#recipe-box').append(newResult)
        $('.save-recipe').hide()
    })
    $view.show()
}

    module.recipeBoxView = recipeBoxView

})(app)