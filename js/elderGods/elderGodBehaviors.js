$(document).ready(function() {
	$('#EG-modal').find('.submit-button').click(function() {
		let modal = $('.elder-god-modal');
		let name = modal.find('.name').val();
		let d1 = modal.find('.d1').val();
		let d2 = modal.find('.d2').val();
		let d3 = modal.find('.d3').val();
		let desc = modal.find('.desc').val();
		addElderGod(name, d1, d2, d3, desc);
	});

	// Get the modal
	var modal = document.getElementById('EG-modal');

	// Get the button that opens the modal
	var btn = document.getElementById('myBtn');

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}
});