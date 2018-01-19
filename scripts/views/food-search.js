var app = app || {};

(module => { 

    const foodSearchView= {}

    const $view = $('#foodSearch-view')

    foodSearchView.init = () => {$view.show()
        $('foodSearch-submit').one('click', (e) => {
            e.preventDefault()
            submit()
        })
    }

    function submit(){
        let meal = {
            food: $('#food').val(),
            minCal: $('#minCal').val(),
            maxCal: $('#maxCal').val(),
            healthLabel: $('healthLabel').val(),
        }
        console.log(meal)
        app.Recipe.get(meal)
        .then(() => page('/food-results'))
    }

    module.foodSearchView = foodSearchView

})(app)