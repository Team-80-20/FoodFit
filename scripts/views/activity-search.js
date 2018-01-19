var app = app || {};

(module => { 

    const activitySearchView= {}

    const $view = $('#activitySearch-view')

    activitySearchView.init = () => $view.show()

    module.activitySearchView = activitySearchView

})(app)