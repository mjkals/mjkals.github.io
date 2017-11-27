7k	$(document).ready(function() {
    
    // jQuery Function Number 1
	$(".social-media").hover(function() {
		
		// Show the corresponding outfit
        // jQuery Function Number 2
		$(this).addClass('cursor');
	}); 

	$(".menu-item").hover(function() {
		
		// Show the corresponding outfit
		$(this).addClass('color');
	}, function(){
        // jQuery Function Number 3
		$(this).removeClass('color')

	}); 



	$(".logo").hover(function() {
		
		// Show the corresponding outfit
		$(this).addClass('cursor');
	}); 

    // jQuery Function Number 4
	$(".logo").click(function() {
		
		window.location.href = 'index.html';
		
	}); 

}); 