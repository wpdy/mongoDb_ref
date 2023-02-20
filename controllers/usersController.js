


const mongoose = require('mongoose')
const Ad = require('../models/ad')
const User = require('../models/user')

const createUser = async(req, res) => {

    // if(!req.body.name || !req.body.about) res.status(404).send("Not Found")

    const user = new User({
        name: req.body.name,
    })

    const result = await user.save()
    res.status(200).send(result)
}


const listAds = async(req, res) => {
    try {
        const ads = await Ad
        .find()
        .populate('user', '-_id')
        res.status(200).json(ads);
    } 

    catch (error) {
        res.status(404).send(error.message);
    }


}


module.exports = {
    createUser,
    listAds
}
