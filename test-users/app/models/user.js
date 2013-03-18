var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blocknodes');

var schema = mongoose.Schema
  , objectId = schema.ObjectId;


var crypto = require('crypto');

mongoose.model('User', {

	setters: {
		password: function(password) {
			this._password = password;
			this.salt = this.makeSalt();
			this.hashed_password = this.encryptPassword(password);
		}
	},
	
	methods: {
		authenticate: function(plainText) {
			return this.encryptPassword(plainText) === this.hashed_password;
		},
	
		makeSalt: function() {
			return Math.round((new Date().valueOf() * Math.random())) + '';
		},
		
		encryptPassword: function(password) {
			return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
		},
		
		save: function(okFn, failedFn) {
			if (this.isValid()) {
				this.__super__(okFn);
			}
			else {
				failedFn();
			}
		}
	
	}
});



