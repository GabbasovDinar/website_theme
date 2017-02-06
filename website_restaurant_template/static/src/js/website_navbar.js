$(document).ready(function() {
    var element = $('#wrapwrap header li:not(.hidden, .divider, .dropdown-toggle) a:not(.dropdown-toggle)');
    var count = element.length;
    console.log(element.length);
    console.log(count);
    var element_position = Math.round(count/2-0.1);
    console.log(element_position);
    $('#wrapwrap header li:not(.hidden, .divider)').eq(element_position).before('<li><a href="/" class="navbar-brand logo"><img src="/logo.png" t-att-title="res_company.name"/></a></li>')

	$('#wrapwrap .nav.navbar-nav.navbar-right .dropdown').click(function() {
		if ($(this).hasClass("open")) {
			$('#wrapwrap .nav.navbar-nav.navbar-right .dropdown .dropdown-menu').hide('slow');
		}
		else {
			$('#wrapwrap .nav.navbar-nav.navbar-right .dropdown .dropdown-menu').show('slow');
		}
	});
	var backdrop = '.dropdown-backdrop';
	var toggle   = '[data-toggle="dropdown"]';
	function clearMenus(e) {
		if (e && e.which === 3) return
		$(backdrop).remove()
		$(toggle).each(function () {
			var $this         = $(this)
			var $parent       = getParent($this)
			console.log("$parent.hasClass('open')", $parent.hasClass('open'));
			var relatedTarget = { relatedTarget: this }
			if (!$parent.hasClass('open')) {
				$('#wrapwrap .nav.navbar-nav.navbar-right .dropdown .dropdown-menu').hide('slow');
				return
			}
		})
	}
	function getParent($this) {
		var selector = $this.attr('data-target')

		if (!selector) {
		  selector = $this.attr('href')
		  selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
		}

		var $parent = selector && $(selector)

		return $parent && $parent.length ? $parent : $this.parent()
	}
	$(document).on('click.bs.dropdown.data-api', clearMenus);

	if (!$('div').hasClass("slider_content")) {
		$('#wrap .container').css({'padding-top': '50px'});
		$('#wrap').css({'margin-top': '50px'});
		$('.navbar.navbar-default.navbar-static-top').css({'background-color': 'rgb(34, 34, 34)'});
	}
});

/*
*$('#wrapwrap header li:not(.hidden, .divider, #o_logout)').eq(element_position).before('<li class="new new">666</li>')

*
* */
/*
* EASYFADER - An Ultralight Fading Slideshow For Responsive Layouts
* Version: 1.0
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka
*/

(function($){
	function prefix(el){
		var prefixes = ["Webkit", "Moz", "O", "ms"];
		for (var i = 0; i < prefixes.length; i++){
			if (prefixes[i] + "Transition" in el.style){
				return '-'+prefixes[i].toLowerCase()+'-';
			};
		};
		return "transition" in el.style ? "" : false;
	};
	var methods = {
		init: function(settings){
			return this.each(function(){
				var config = {
					slideDur: 9000,
					fadeDur: 1000
				};
				if(settings){
					$.extend(config, settings);
				};
				this.config = config;
				var $container = $(this),
					slideSelector = '.slide',
					fading = false,
					slideTimer,
					activeSlide,
					newSlide,
					$slides = $container.find(slideSelector),
					totalSlides = $slides.length,
					$pagerList = $container.find('.pager_list');
					prefix = prefix($container[0]);
				function animateSlides(activeNdx, newNdx){
					function cleanUp(){
						$slides.eq(activeNdx).removeAttr('style');
						activeSlide = newNdx;
						fading = false;
						waitForNext();
					};
					if(fading || activeNdx == newNdx){
						return false;
					};
					fading = true;
					$pagers.removeClass('active').eq(newSlide).addClass('active');
					$slides.eq(activeNdx).css('z-index', 3);
					$slides.eq(newNdx).css({
						'z-index': 2,
						'opacity': 1
					});
					if(!prefix){
						$slides.eq(activeNdx).animate({'opacity': 0}, config.fadeDur,
						function(){
							cleanUp();
						});
					} else {
						var styles = {};
						styles[prefix+'transition'] = 'opacity '+config.fadeDur+'ms';
						styles['opacity'] = 0;
						$slides.eq(activeNdx).css(styles);
						var fadeTimer = setTimeout(function(){
							cleanUp();
						},config.fadeDur);
					};
				};
				function changeSlides(target){
					if(target == 'next'){
						newSlide = activeSlide + 1;
						if(newSlide > totalSlides - 1){
							newSlide = 0;
						}
					} else if(target == 'prev'){
						newSlide = activeSlide - 1;
						if(newSlide < 0){
							newSlide = totalSlides - 1;
						};
					} else {
						newSlide = target;
					};
					animateSlides(activeSlide, newSlide);
				};
				function waitForNext(){
					slideTimer = setTimeout(function(){
						changeSlides('next');
					},config.slideDur);
				};
				for(var i = 0; i < totalSlides; i++){
					$pagerList
						.append('<li class="page" data-target="'+i+'">'+i+'</li>');
				};
				$container.find('.page').bind('click',function(){
					var target = $(this).attr('data-target');
					clearTimeout(slideTimer);
					changeSlides(target);
				});
				var $pagers = $pagerList.find('.page');
				$slides.eq(0).css('opacity', 1);
				$pagers.eq(0).addClass('active');
				activeSlide = 0;
				waitForNext();
			});
		}
	};
	$.fn.easyFader = function(settings){
		  return methods.init.apply(this, arguments);
	};
})(jQuery);

$(function(){
  $('#Fader').easyFader({
    slideDur: 6000,
    fadeDur: 800
  });
});
