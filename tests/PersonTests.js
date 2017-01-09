(function(){
	
	'use strict'

	var Person = require('../app/main.js').Person;

	describe("Implement a Person class and watch it play out.", function(){

		it("An initialized Person should be of the Object type and and instance of Person", function(){
			var micheal = new Person('Micheal');
			expect(typeof micheal).toEqual(typeof {});
			expect(micheal instanceof Person).toBeTruthy();
		});

		it("A Person initialized to Williams should have first name 'Williams'.", function(){
			var williams = new Person('Williams');
			expect(williams.firstName).toEqual('Williams');
		});

		it("A polymorphic declaration of Persons should only allocate further detail to the initialized person. ", function(){
			var itunu  = new Person('Itunuloluwa', 'Fatoki');
			var loni = new Person('Oluwaloni');
			expect(typeof itunu).toEqual(typeof loni);
		});

		it("The function mentionYourName for Simon should return 'My name is Simon'", function(){
			var sim = new Person('Simon');
			expect(sim.mentionYourName()).toEqual("My name is Simon");
		});

	});

})();