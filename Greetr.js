//greeter requirements

// when given a firstname,last name and optional language, it generates formal and informal greetings
// support English and Spanish
//Reusable library
//Easy type G$() structure
// Support jQuery

//structure around code that will be written
//immediately invoked function 
(function(global, $){

//want to attach this function to global object.
var Greetr = function(firstname,lastname,language){

	//return it as a constructor so you don't always have to write 'new' 
	// using constuctor to set up Greetr object
	return new Greetr.init(firstname,lastname,language)
}

//will have access to these variables because after this function is done, the memory space for them still exists
// because of closures.  And this function creates a closed environment.
//hidden within the scope of the IIFE and never directly accessible 
var supportedLangs = ['en','es'];

var greetings ={
	en: 'Hello',
	es: 'Hola'
}

var formalGreetings ={
	en: 'Greetings',
	es: 'Saludos'
};

var logMessages ={
	en: 'Logged in',
	es: 'Inicio Sesion'
}

Greetr.prototype = {

//anything built in Greetr.init can be accessed here
// ###### adding methods to the prototype


// returns full name 
fullName: function(){
	return this.firstname + ' ' + this.lastname;
},

//checks if language entered is english/spanish, if not, throws error
validate: function(){
	if(supportedLangs.indexOf(this.language) === -1){

		throw ' Invalid Language';
	}
},

//greet returns whatever language was set and the first name of human
greeting: function(){
	console.log('G', this.language);
	return greetings[this.language] + ' ' + this.firstname + '!';
},

//returns current langauge and full name (using fullName method)
formalGreeting: function(){
	console.log('FG', this.language);
	return formalGreetings[this.language] + ', ' + this.fullName();
},

greet: function(formal){

	var msg;

	// if undefined or null it will be false *coerced
	if(formal){
		msg = this.formalGreeting();
	}

	else{
		msg = this.greeting();
	}

	if(console){
		
		console.log(msg);
	}

	//'this' refers to the calling object at execution time
	//makes the method chainable

	return this;
},

log: function(){

	if(console) {
		console.log(logMessages[this.language] + ' ' + this.fullName());
	}

	return this;
},

setLang: function(lang){

	this.language = lang;
	this.validate();

	return this;
},

//jQuery method that accepts a selector and determins whether or not it's a formal greeting
HTMLGreeting: function(selector, formal){
	if(!$){
		throw 'jQuery not loaded'}
	if(!selector){
		throw 'Missing jQuery selector';}

	var msg;
	if(formal){
		msg = this.formalGreeting();}

	else{ 
		msg = this.greeting(); }

		$(selector).html(msg);

		///makes this (not 'this') chainable
		return this;
}

};

	//actual greeter function
	//sets values/ builds object
Greetr.init = function(firstname,lastname,language){

	var self = this;

	self.firstname = firstname || '';
	self.lastname = lastname   || '';
	self.language = language   || 'en';

}

Greetr.init.prototype = Greetr.prototype;
//work prototype isn't referring to actual prototype, it is telling object to point to function that created it

global.Greetr = global.G$ = Greetr;
//sets greeter to global object

}(window,jQuery));