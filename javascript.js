//Script from w3schools.com/bootstrap/bootstrap_theme_company.asp
  //Creates a smooth scrolling effect when links are clicked.
  $(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".pull-left a, .jumbotron a[href='#learn-more'], .about a, .footer a[href='#jumbo']").on('click', function(event) {
  
    // Prevent default anchor click behavior
    event.preventDefault();
  
    // Store hash
    var hash = this.hash;
  
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
  
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    });
  })
  
   //Fades in elements on scroll.
  $(window).scroll(function() {
    $(".hiddenStuff").each(function(){
      var pos = $(this).offset().top;
  
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("visibleStuff");
      }
    });
  });
