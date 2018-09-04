/*!
 * JS Custom - Insyst Media
 * Last Update : Feb 6, 2015
 */

$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
  $("body").toggleClass("nav-open");
  $(".burger-trigger").toggleClass("go");
});

// ---> Addon & Additional Bootstrap

	/* center modal */
	function centerModals(){
	  $('.modal').each(function(i){
		var $clone = $(this).clone().css('display', 'block').appendTo('body');
		var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
		top = top > 0 ? top : 0;
		$clone.remove();
		$(this).find('.modal-content').css("margin-top", top);
	  });
	}
	$('.modal').on('show.bs.modal', centerModals);
	$(window).on('resize', centerModals);
	
	/* popover */
	$('.popover-markup>.trigger').popover({
		html: true,
		title: function () {
			return $(this).parent().find('.head').html();
		},
		content: function () {
			return $(this).parent().find('.content').html();
		}
	});
	
	/* accordion */
	function toggleChevron(e) {
		$(e.target)
			.prev('.panel-heading')
			.find("i.indicator")
			.toggleClass('fa-caret-down fa-caret-up');
	}
	$('#accordion').on('hidden.bs.collapse', toggleChevron);
	$('#accordion').on('shown.bs.collapse', toggleChevron);
	
	/* Upload Custom */
	$(function() {

	  // We can attach the `fileselect` event to all file inputs on the page
	  $(document).on('change', ':file', function() {
		var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	  });
	
	  // We can watch for our custom `fileselect` event like this
	  $(document).ready( function() {
		  $(':file').on('fileselect', function(event, numFiles, label) {
	
			  var input = $(this).parents('.input-group').find(':text'),
				  log = numFiles > 1 ? numFiles + ' files selected' : label;
	
			  if( input.length ) {
				  input.val(log);
			  } else {
				  if( log ) alert(log);
			  }
	
		  });
	  });
	  
	});

// ---> Animsition
	
	$(document).ready(function() {
	  $(".animsition").animsition({
		inClass               :   'fade-in',
		outClass              :   'fade-out',
		inDuration            :    800,
		outDuration           :    400,
		linkElement           :   '.ani-link',
		// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
		loading               :    false,
		loadingParentElement  :   'body', //animsition wrapper element
		loadingClass          :   'animsition-loading',
		unSupportCss          : [ 'animation-duration',
								  '-webkit-animation-duration',
								  '-o-animation-duration'
								],
		//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		overlay               :   false,
		overlayClass          :   'animsition-overlay-slide',
		overlayParentElement  :   'body'
	  });
	});

	
// ---> Owl Carousel

    $('.slide-home').owlCarousel({
		loop:true,
		lazyLoad:true,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			420:{
				items:2
			},
			600:{
				items:2
			},
			1000:{
				items:3
			},
			1367:{
				items:4
			}
		}
	})


// ---> Datepicker
	$('.calendar input').datepicker({
    	orientation: "bottom right"								  	
    });

// ---> Sliding Highlight Box

	$(document).ready(function(){
		//To switch directions up/down and left/right just place a "-" in front of the top/left attribute	
		//Full Caption Sliding (Hidden to Visible)
		$('.boxgrid.captionfull').hover(function(){
			$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:250});
		}, function() {
			$(".cover", this).stop().animate({top:'100%'},{queue:false,duration:250});
		});
	});	
	
	
	$(document).ready(function(){
	  var $searchlink = $('#searchtoggle i');
	  var $searchbar  = $('#searchbar');
	  
	  $('.nav-links a#searchtoggle').on('click', function(e){
		e.preventDefault();
		
		if($(this).attr('id') == 'searchtoggle') {
		  if(!$searchbar.is(":visible")) { 
			// if invisible we switch the icon to appear collapsable
			$searchlink.removeClass('fa-search').addClass('fa-search-minus');
		  } else {
			// if visible we switch the icon to appear as a toggle
			$searchlink.removeClass('fa-search-minus').addClass('fa-search');
		  }
		  
		  $searchbar.slideToggle(300, function(){
			// callback after search bar animation
		  });
		}
	  });	
	});	
	
// ---> Fluid youtube By Chris Coyier & tweaked by Mathias Bynens

	// By Chris Coyier & tweaked by Mathias Bynens

	$(function() {
	
		// Find all YouTube videos
		var $allVideos = $("iframe[src^='http://www.youtube.com']"),
	
			// The element that is fluid width
			$fluidEl = $(".video-fluid-wrapper");
	
		// Figure out and save aspect ratio for each video
		$allVideos.each(function() {
	
			$(this)
				.data('aspectRatio', this.height / this.width)
				
				// and remove the hard coded width/height
				.removeAttr('height')
				.removeAttr('width');
	
		});
	
		// When the window is resized
		// (You'll probably want to debounce this)
		$(window).resize(function() {
	
			var newWidth = $fluidEl.width();
			
			// Resize all videos according to their own aspect ratio
			$allVideos.each(function() {
	
				var $el = $(this);
				$el
					.width(newWidth)
					.height(newWidth * $el.data('aspectRatio'));
	
			});
	
		// Kick off one resize to fix all videos on page load
		}).resize();
	
	});
	

