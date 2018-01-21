var app = app || {};

(module => {

    const activitySearchView= {}

    const $view = $('#activitySearch-view')

    activitySearchView.init = () => {
        $('img').hide()
        
        $('#activitySearch-submit').one('click', (e) => {
            e.preventDefault()

            let selection = $('#activity-search').val()
            $(`.${selection}`).show()
        })
        $view.show()
    }

    module.activitySearchView = activitySearchView

})(app)

