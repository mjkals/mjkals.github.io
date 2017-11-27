$(document).ready(function() {


	$(".item").hover(function() {
		
        // jQuery Function Number 5
		var number = $(this).attr('id').slice(-1);
		// Show the corresponding outfit
        
        // jQuery Function Number 6
		$("#event" + number).css('visibility','visible');
	},function(){

		var number = $(this).attr('id').slice(-1);
		$("#event" + number).css('visibility','hidden');

});


	$(".social-media").hover(function() {
		
		// Show the corresponding outfit
		$(this).addClass('cursor');
	}); 

	$(".menu-item").hover(function() {
		
		// Show the corresponding outfit
		$(this).addClass('color');
	}, function(){

		$(this).removeClass('color')

	}); 



	$(".logo").hover(function() {
		
		// Show the corresponding outfit
		$(this).addClass('cursor');
	}); 


	$(".logo").click(function() {
		
		window.location.href = 'index.html';
		
	}); 


}); 