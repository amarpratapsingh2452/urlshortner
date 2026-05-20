const shortid = require('shortid');
const Url = require('../models/url');
async function createShortUrl(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: 'redirectUrl is required' });
    }
    const shortUrl = shortid();
    await Url.create({
        shortUrl: shortUrl,
        redirectUrl: req.body.url,
        visitHistory: []
    });
    res.render("Home", {
        id: shortUrl
    });
}
module.exports = {
    createShortUrl
}