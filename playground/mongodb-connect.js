const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
	db.collection('Users').insertOne({
		name: 'Arik',
		age: 30,
		location: 'yehud'
	}, (err, result) => {
		if (err){
			return console.log('Unable to insert todo', err);
		}
		
		console.log(JSON.stringify(result.ops, undefined, 2));
	})
	
	db.close();
});