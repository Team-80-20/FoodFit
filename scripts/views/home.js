var app = app || {};

(module => { 

    const homeView= {}

    const $view = $('#home-view')

    homeView.init = () => $view.show()

    module.homeView = homeView

})(app)