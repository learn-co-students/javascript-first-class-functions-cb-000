function receivesAFunction(functionToCall) {
	// body...
	functionToCall();
}

function returnsANamedFunction(){
	return function functionWitName(){
		consloe.log("Hi, I am a callback function.");
	};
}

function returnsAnAnonymousFunction(){
	return () => {console.log("Hi, I am anonymous function")}
}