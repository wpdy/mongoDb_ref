
const Ad = require("../models/ad")

const createAd = async (req, res) => {

    // if(!req.body.name || !req.body.author) {
    //     res.status(404).send("Not Found")
    // }

    const ad = await Ad.create({
        about: req.body.about,
        user: req.body.user
    })

    res.status(200).json(ad)

}

module.exports = {
    createAd
}