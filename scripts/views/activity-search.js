var app = app || {};

(module => {

    const activitySearchView= {}

    const $view = $('#activitySearch-view')

    activitySearchView.init = () => {
        $('.activity').hide()
        
        $('#activitySearch-submit').on('click', (e) => {
            e.preventDefault()
            
            let selection = $('#activity-search').val()
            $('.activity').hide()
            $(`.${selection}`).show()
        })
        $view.slideToggle('slow')
    }

    module.activitySearchView = activitySearchView

})(app)

