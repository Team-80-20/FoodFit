if (window.location.pathname !== '/') {
    page.base('/FoodFit')
}

page('/*', (ctx, next) => {
    $('.view').hide()
    next()
  });
  
page('/', () => {
    app.homeView.init()
})

page('/about', () => {
  app.aboutView.init()
})

page('/food-search', () => {
  app.foodSearchView.init()
})

page('/food-results', () => {
  app.foodResultsView.init()
})

page('/recipe-box', () => {
  app.recipeBoxView.init()
})

page('/tdee', () => {
  app.tdeeView.init()
})

page('/activity-search', () => {
    app.activitySearchView.init()
  })

page.start();