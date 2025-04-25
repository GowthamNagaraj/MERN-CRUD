const db = require('../database/db');
const ObjectId = db.ObjectId;
module.exports = {
    getAadhar,
    insertAadhar,
    editId,
    updateAadhar,
    deleteAadhar
}

async function getAadhar() {
    try {
        const database = await db.getDatabase()
        const collection = database.collection('peoples');
        const cursor = collection.find({});
        const data = cursor.toArray();
        return data;
    } catch (error) {
        return error
    }
}

async function insertAadhar(params) {
    try {
        const database = await db.getDatabase();
        const collection = database.collection('peoples');
        const result = await collection.insertOne(params);
        return result
    } catch (error) {
        return error
    }
}

async function editId(id) {
    try {
        const database = await db.getDatabase();
        const collection = database.collection("peoples");
        const result = await collection.findOne({_id:new ObjectId(id)});
        return result
    } catch (error) {
        return error
    }
}

// update
async function updateAadhar(params,id) {
    try {
        const database = await db.getDatabase();
        const collection = database.collection("peoples");

        if(id){
            const result = await collection.updateOne({_id:new ObjectId(id)},{$set:params})
            return result
        }

        return "something worng"
    } catch (error) {
        return error
    }
}

// deleteAadhar
async function deleteAadhar(id) {
    try {
        const database = await db.getDatabase();
        const collection = database.collection("peoples");
        if(id){
            const result = await collection.deleteOne({_id:new ObjectId(id)});
            return result
        }
        return "something went wrong"
    } catch (error) {
        return error
    }
}