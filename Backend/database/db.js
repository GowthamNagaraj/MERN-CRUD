const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// id to Object
const ObjectId = mongodb.ObjectId;

let database;

async function getDatabase() {
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
    database = client.db('aadhar');

    if(!database){
        console.log("Not Connected");
    }

    return database;
}

module.exports = {
    getDatabase,
    ObjectId
}