
page('/*', (ctx, next) => {
    $('.page').hide();
    next();
  });
  
  page('/', () => {
      app.recipes.initHome()
  })

  page.start();