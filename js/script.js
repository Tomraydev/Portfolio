/* Google API function is inline in index.html */

$( document ).ready(function() {
  // Current experience calculator
  function writeExperience() {
    var date = new Date();
    var experience = 6 //(date.getFullYear() - 2017) * 12 + 2 + date.getMonth();
    $('#experience').html(experience);
  }
  writeExperience();

  // Smooth scrooling function
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 600, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  $('.btn-contact').click(function() {
       $('.contact-menu').animate({'top':'0'},300);
       $('body').css('overflow', 'hidden');  //Gets rid of double scrollbar
  });
  $('.btn-back').click(function() {
       $('.contact-menu').animate({'top':'-100%'},300);
       $('body').css('overflow', 'auto'); // Makes body scrollable again
  });
});
