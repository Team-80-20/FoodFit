
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
        $('.saved').hide()
    })
    // $('.recipe-div').on('click', '.delete-recipe', (e) => {
    //     const id = $(e.target).data('id')
    //     let currentBox = JSON.parse(localStorage.getItem('recipeBox'))
    //     updateBox(currentBox)
    //     page('/recipe-box')
    // })
    $view.show()
}

// function updateBox(recipeBox) {
//     let parsedBox = []
//     recipeBox.forEach(item =>{
//         parsedBox.push(JSON.parse(item))
//     })
//     let newBox = parsedBox.splice(id, 1)
//     localStorage.setItem('recipeBox', JSON.stringify(newBox)
// )}

    module.recipeBoxView = recipeBoxView

})(app)