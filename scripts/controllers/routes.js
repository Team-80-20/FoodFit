page('/*', (ctx, next) => {
    $('.view').hide();
    next();
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

page('/activity-search', () => {
    app.activitySearchView.init()
  })

page.start();