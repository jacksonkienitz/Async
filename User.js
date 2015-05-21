/*
	Async
	User.js

	@author Brian Tracy
*/

function User(name, password) {	
	

	this.name	= name;
	this.password	= password;
	this.ID		= "";
	
	this.wins	= 0;
	this.losses	= 0;	
		
}


//////////////////////
module.exports = User;
//////////////////////


