'use strict'

module.exports = {
	dataTypes: function(inputArgument){
		var output = undefined;
		switch (typeof inputArgument){
			case "string":
				output = inputArgument.length;
				break;
			case "boolean":
				output = inputArgument;
				break;
			case "number":
				output = "equal to 100";
				if (inputArgument>100){
					output = "more than 100";
				}
				else if (inputArgument<100){
					output = "less than 100";
				}
				break;
			case "function":
				output = inputArgument(true);
				break;
			case "undefined":
				output = "no value";
				break;
			default:
				if (inputArgument == null){
					output = "no value";
				}
				else if (inputArgument.length>2){
					output = inputArgument[2];
				}
				break;
		}

		return output;
	},

	getPrimes: function(number){


	}
}