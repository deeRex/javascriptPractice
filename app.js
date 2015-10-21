//gets a new object (the architecture allows us to not have to use the 'new' keyword here);

var g = G$('Dee','Stirling');

//chainable methods in action
g.greet().setLang('en').greet(true).log();	
//chain order matters
//without end greet, function greeting doesn't get re invoked
// so that whole time, it was working, but you didn't invoke the function lol

console.log(g);

// using object on the click of login button.
$('#login').click(function(){

//create a new 'greetr object (pretending we know name from login'
//make object
	var loginGrtr = G$('Dee','Rex','es');

	//hides login div
	$('#logindiv').hide();

	//fire off an HTML greeting, passing the #greeting as the selector and the chosen lanague, and log the welcome
	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',false).log();

})