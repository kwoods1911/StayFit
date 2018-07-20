$(document).ready(function(){
		// Correct code below

		$('.box').hover(
			function(){$(this).find('.summary:first').fadeIn(500);},
			function(){$(this).find('.summary:first').fadeOut(500);}
			)
		
})