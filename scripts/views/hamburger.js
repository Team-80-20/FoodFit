$(document).ready(function() {

  $( '.cross' ).hide();
  $( '.menu' ).hide();
  $( '.hamburger' ).click(function() {
    $( '.menu' ).slideToggle( 'fast');
    $( '.hamburger' ).fadeOut('fast');
    $( '.cross' ).fadeIn('fast');
  });

  $( '.cross' ).click(function() {
    $( '.menu' ).slideToggle( 'fast');
    $( '.cross' ).fadeOut('fast');
    $( '.hamburger' ).fadeIn('fast');
  });
});

$( '.menu' ).click(function() {
  $( '.menu' ).slideToggle( 'fast')
  ; $( '.cross' ).fadeOut('fast');
  $( '.hamburger' ).fadeIn('fast');
});