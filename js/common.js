$(function() {
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 0)
		{
			$('header').addClass('on-scroll');
		}else
		{
			$('header').removeClass('on-scroll');
		}
	});

	$('section.tawi-cards .tc-content .card figure>a').on('click', function(e){
		e.preventDefault();
		$('.cards-modal .cards-modal-content').html('<iframe allowfullscreen="" allow="autoplay; fullscreen" src="//www.youtube-nocookie.com/embed/'+$(this).attr('href').split('.be/')[1]+'?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1" scrolling="no"></iframe>');
		$('.cards-modal').addClass('on-screen');
	});

	$(document).mouseup(function(e) 
	{
	    var container = $('.cards-modal .cards-modal-content');

	    // if the target of the click isn't the container nor a descendant of the container
	    if (!container.is(e.target) && container.has(e.target).length === 0) 
	    {
	        $('.cards-modal').removeClass('on-screen');
	    	$('.cards-modal .cards-modal-content').html('');
	    }
	});

	if($('section.tawi-ref-stories').length)
	{
		$('section.tawi-ref-stories').find('.card').on('click', function(){
			if($(this).find('.card-info').length)
			{
				console.log($(this).find('.card-info').html());

				$('.ref-story-modal .rsm-content').append($(this).find('.card-info').html());
				$('.ref-story-modal').addClass('on-screen');
			}
		});
		$('.ref-story-modal').find('.rsm-close').on('click', function(){
			$('.ref-story-modal').removeClass('on-screen');
			$('.ref-story-modal').find('.ci-outer').remove();
		});
	}

	$('a#tawi-contact-toggle').on('click', function(e){
		e.preventDefault();

		$(this).toggleClass('close');
		$('.tc-form').slideToggle();
	});

	$('li.button-container a').on('click', function(e){
		e.preventDefault();
		console.log($('#tawi-contact').offset().top);

		$('html, body').animate({
	        scrollTop: $('#tawi-contact').offset().top
	    }, 500);

	});
});
