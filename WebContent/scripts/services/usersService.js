app.service('usersService', function() {

	this.allUsers = function() {

		return[ {
			  "pic" : "shekar.jpg",
			  "email" : "shekar@gmail.com",
			  "firstname" : "shekar",
			  "lastname" : "g",
			  "mobile" : 8888888888,
			  "userid" : 1
			 }, {
			  "pic" : "robot.jpg",
			  "email" : "ravi900kumar@gmail.com",
			  "firstname" : "ravi",
			  "lastname" : "kumar",
			  "mobile" : 9999999999,
			  "userid" : 2
			 } ];
	};

	this.oneUser = function(userid) {

		var result = this.allUsers();

		for (var i = 0; i < result.length; i++)
			if (result[i].userid === userid)
				return result[i];

		return null;
	};

});