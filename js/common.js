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
});
