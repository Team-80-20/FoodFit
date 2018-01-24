var app = app || {};

(module => {

    const activitySearchView= {}

    const $view = $('#activitySearch-view')

    activitySearchView.init = () => {
        $('.activity').hide()
        
        $('#activitySearch-submit').one('click', (e) => {
            e.preventDefault()

            let selection = $('#activity-search').val()
            $(`.${selection}`).show()
        })
        $view.slideToggle('slow')
    }

    module.activitySearchView = activitySearchView

})(app)

