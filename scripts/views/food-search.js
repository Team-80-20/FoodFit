var app = app || {};

(module => { 

    const foodSearchView= {}

    const $view = $('#foodSearch-view')

    foodSearchView.init = () => $view.show()

    module.foodSearchView = foodSearchView

})(app)