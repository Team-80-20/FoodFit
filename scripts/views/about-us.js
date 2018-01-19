var app = app || {};

(module => { 

    const aboutView= {}

    const $view = $('#about-view')

    aboutView.init = () => $view.show()

    module.aboutView = aboutView

})(app)