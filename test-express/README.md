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
		- It is easier to copy and paste the following items:
			- db.users.save({'id': '1', 'name': 'Douwe', 'email': 'douwedehaan@live.nl'})
			- db.users.save({'id': '2', 'name': 'Vincent', 'email': 'v-bremer89@gmail.com'})
			- db.users.save({'id': '3', 'name': 'Tjerk', 'email': 'tjerk.dijkstra@gmail.com'})
			- db.users.save({'id': '4', 'name': 'Edwin', 'email': 'ed.wolde@gmail.com'})
			
