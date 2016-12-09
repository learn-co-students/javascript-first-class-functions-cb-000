function callback(){
	console.log('Call back!');
}

function receivesAFunction(callback){
	callback();

}

receivesAFunction(callback);

function returnsANamedFunction(){
	return function named(){
		console.log('Returning a function');
	}
}

returnsANamedFunction();

function returnsAnAnonymousFunction(){
	return function(){
		console.log("I'm an anonymous function");
	}
}

returnsAnAnonymousFunction();