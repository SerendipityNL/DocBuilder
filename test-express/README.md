# Test Express framework
Tested by: Vincent Bremer

Website [Express.js](http://expressjs.com/)

## Installation
- sudo npm install express -g
- mkdir test-express
- cd test-express
- Create the package.json
- npm install

## Conclusion
Waaaayy to much work needs to be done when developing a complex application..

## Installing the database
for a detailed description on how to use the database, visit the [documentation website](http://mongoosejs.com/docs/guide.html)

- Make sure you have downloaded and installed the mongoDB files and stuff
- After the download and installation get 2 terminal views
	- In the first, type mongod
	- In the second, type mongo (this will put you into the console view of mongo) and then the following lines
		- use blocknodes
		- db.users
		
## Working with models
To get data in app.js and pass it to the views, use the following syntax:

`var user = new load.model('user');
user.find_all(function(err, users){
	console.log(users);
});`