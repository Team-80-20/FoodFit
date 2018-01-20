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
    $view.show()
}

    module.foodResultsView = foodResultsView

})(app)