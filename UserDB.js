/*
	Async
	UserDB.js

	@author Brian Tracy
*/

	
function UserDB() {
	this.users = [];
}

UserDB.prototype.addUser = function (user) {
	this.users.push(user);
}

////////////////////////
module.exports = UserDB;
////////////////////////
