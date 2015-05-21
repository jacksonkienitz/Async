/*
	Async
	index.js

	@author Brian Tracy

*/
$(document).ready(function () {

	var socket = io("ws://localhost:4000");
        console.log(socket);

	$('#ui').keydown(function(event) {
        if (event.keyCode == 13) {
		var text = $(this).val();
		console.log(text);


		// We are client side at this point. 



		socket.emit("user input", text);	
		



         }
    });

});



