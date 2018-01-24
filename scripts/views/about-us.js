var app = app || {};

(module => { 

    const aboutView= {}

    const $view = $('#about-view')

    aboutView.init = () => $view.slideToggle('slow')

    module.aboutView = aboutView

})(app)