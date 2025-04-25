const express = require('express');
const router = express.Router();
const aadharServices = require('./aadhar.service');

// api
router.get('/',getAadhar);
router.post('/',insertAadhar);
router.get('/:id',editId);
router.post('/:id',updateAadhar);
router.post('/delete/:id',deleteAadhar);

// export
module.exports = router

// controller
async function getAadhar(req,res,next) {
    try {
        const result = await aadharServices.getAadhar();
        return res.json({
            result,
            status:201,
            message:"Retrive Success"
        })
    } catch (error) {
        res.json({
            error:error,
            status:500,
            message:"Some went problem!!"
        })
    }
}

// insertAadhar

async function insertAadhar(req,res,next) {
    try {
        const result = await aadharServices.insertAadhar(req.body);
        return res.json({
            result:result,
            status:200,
            message:"Inserted Successfully"
        })
    } catch (error) {
        res.json({
            error:error,
            status:500,
            message:"Some went problem!!"
        })
    }
}

// editid
async function editId(req,res,next) {
    try {
        const result = await aadharServices.editId(req.params.id)
        return res.json({
            result:result,
            status:200,
            message:"Retrive id"
        })
    } catch (error) {
        res.json({
            error:error,
            status:500,
            message:"Some went problem!!"
        })
    }
}

// updateAadhar
async function updateAadhar(req,res,next) {
    try {
        const result = await aadharServices.updateAadhar(req.body,req.params.id);
        return res.json({
            result:result,
            status:200,
            message:"updated success"
        })
    } catch (error) {
        res.json({
            error:error,
            status:500,
            message:"Some went problem!!"
        })
    }
}

// deleteAadhar
async function deleteAadhar(req,res,next) {
    try {
        const result = await aadharServices.deleteAadhar(req.params.id);
        return res.json({
            result,
            status:200,
            message:"Deleted success"
        })
    } catch (error) {
        res.json({
            error:error,
            status:500,
            message:"Some went problem!!"
        })
    }
}