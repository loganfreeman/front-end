// preload the images
$slideshow.imagesLoaded( function() {

  if( Modernizr.backgroundsize ) {
    $items.each( function() {
      var $item = $( this );
      $item.css( 'background-image', 'url(' + $item.find( 'img' ).attr( 'src' ) + ')' );
    } );
  }
  else {
    $slideshow.find( 'img' ).show();
    // for older browsers add fallback here (image size and centering)
  }
  // show first item
  $items.eq( current ).css( 'opacity', 1 );
  // initialize/bind the events
  initEvents();
  // start the slideshow
  startSlideshow();

} );
