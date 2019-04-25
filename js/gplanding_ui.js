/*

	Template Name : GP Responsive Html Landing Page
	Template Version : 1.0
	Template Author : Taner ÖZDEMİR ( As CRTVMax )
	Creation Date : 30 May 2013

	JAVASCRIPT INDEX OF GP LANDING TEMPLATE

	1  - MENU FIXED 							LINE 24
	2  - TO TOP PLUGIN SETTINGS					LINE 49
	3  - ONE PAGE MENU SETTINGS					LINE 53
	4  - RESPONSIVE NAV SETTINGS 				LINE 94
	5  - COVER SLIDER SETTINGS					LINE 98
	6  - LAYERED SLIDER SETTINGS 				LINE 116
	7  - ISOPTE FILTER SETTINGS 				LINE 132
	8  - SHOWCASE SETTINGS 						LINE 148
	9  - BLOG SETTINGS 							LINE 152
	10 - GMAP SETTINGS 							LINE 243
	11 - VALIDATION & AJAX CONTACT SETTINGS     LINE 261

*/


// To Top Plugin Settings

$().UItoTop({ easingType: 'easeOutQuart' });

// One Page Menu Settings

// $('.header nav li a:not(.home_button), .scroll, .mean-bar li a').live('click', function() {
// 	var targetDiv = $(this).attr('href');
// 	var pos = $(''+targetDiv+'').offset().top-50;
// 	$.scrollTo(pos+'px', 700 );
// 	return false;
// });

// $('#backtotop a, .home_button').click( function(event) {
// 	event.stopPropagation();
// 	$.scrollTo('0px', 1000, {easing: 'easeInOutCubic'} );
// 	return false;
// });

function getTargetTop(elem){
    var id = elem.attr("href");
    var offset = 60;
    return $(id).offset().top - offset;
}

var sections = $('.header nav#menu li a:not(.home_button)[href^="#"]');
function checkSectionSelected(scrolledTo){
    var threshold = 100;
    var i;
    for (i = 0; i < sections.length; i++) {
        
        var section = $(sections[i]);
        var target = getTargetTop(section);
        if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
            sections.removeClass("current");
            section.addClass("current");
        }
    };
}

checkSectionSelected($(window).scrollTop());
$(window).scroll(function(e){
    checkSectionSelected($(window).scrollTop())
});

// Responsive Nav Settings

jQuery('header nav').meanmenu();


