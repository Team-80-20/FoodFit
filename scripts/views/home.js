var app = app || {};

(module => { 

    const homeView= {}

    const $view = $('#home-view')

    homeView.init = () => $view.slideToggle('slow')

    module.homeView = homeView

})(app)