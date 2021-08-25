(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery







// SLIDER IMMAGINI
(function( $ ) {
	$.fn.slideshow = function( options ) {
		options = $.extend({
			slides: ".slide",
			speed: 5000,
			easing: "linear"
		}, options);
		
		var timer = null;
		var index = 0;
		
		var slideTo = function( slide, element ) {
			var $currentSlide = $( options.slides, element ).eq( slide );
			
			$currentSlide.stop( true, true ).
			animate({
				opacity: 1
			},).
			siblings( options.slides ).
			css( "opacity", 0 );	
			
		};
		
		var autoSlide = function( element ) {
			timer = setInterval(function() {
				index++;
				if( index == $( options.slides, element ).length ) {
					index = 0;
				}
				slideTo( index, element );
			}, options.speed);	
		};
		
		var startStop = function( element ) {
			element.hover(function() {
				clearInterval( timer );
				timer = null;	
			}, function() {
				autoSlide( element );	
			});
		};
		
		return this.each(function() {
			var $element = $( this ),
				$previous = $( options.previous, $element ),
				$next = $( options.next, $element ),
				index = 0,
				total = $( options.slides ).length;
				
				$( options.slides, $element ).each(function() {
					var $slide = $( this );
					var image = $slide.data( "image" );
					$slide.css( "backgroundImage", "url(" + image + ")" );
				});
				
				autoSlide( $element );
				startStop( $element );
			
		});
	};
	
	$(function() {
		$( "#main-slider" ).slideshow();
	});
	
})( jQuery );
