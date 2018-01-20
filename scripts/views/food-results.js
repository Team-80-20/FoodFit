var app = app || {};

(module => { 

    const foodResultsView= {}

    const $view = $('#foodResults-view')

    foodResultsView.init = () =>{
        $view.show()
    }

    module.foodResultsView = foodResultsView

})(app)