(function(){

	'use strict'

	var getPrimes = require('../app/main.js').getPrimes;
	require('jasmine-expect');

	describe("Get Primes Test.", function(){
		
		describe("Case for some falsy values", function(){
			it("Should return [] for and number less than 2.", function(){
				expect(getPrimes(1)).toEqual([]);
			});
			it("Should return [] for and number less than 2.", function(){
				expect(getPrimes(0)).toEqual([]);
			});
		});

		it("Should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53] for 55.", function(){
			expect(getPrimes(55)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
		});

		it("Should return [2, 3, 5, 7, 11, 13, 17, 19] for 22.", function(){
			expect(getPrimes(22)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
		});

		it("Should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for 30.", function(){
			expect(getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
		});

		it("Should always return an array no matter the arguement", function(){
			expect(getPrimes(55)).toBeArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
		});

	});

})()