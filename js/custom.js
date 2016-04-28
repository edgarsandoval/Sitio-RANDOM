var userFeed = new Instafeed({
    get: 'user',
    userId: '1382031537',
    accessToken: '1382031537.4796004.0c5100d9f85f464fbf5dca44061f3141'
});
userFeed.run();

(function( $ ){
	$(document).ready(function()
	{
		$('.swipebox').removeClass('swipebox');

		$('.inner').click(function(event)
		{	
			event.preventDefault();
		});

		$('#rev_slider_35_1').click(function(event)
		{
			event.preventDefault();
			return;
		});
	});
})(jQuery);