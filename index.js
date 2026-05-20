const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const urlRoutes = require('./routes/url');
const connectDB = require('./connection');
const Url = require('./models/url');
const { default: mongoose } = require('mongoose');
connectDB("mongodb://localhost:27017/url-shortener").then(()=>{
    console.log("Connected to MongoDB");
});
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRoutes);
app.get("/", (req, res) => {
    res.render("Home");
})
app.get("/display", async (req, res) => {
    const allurls = await Url.find({});
    res.render("display",
        {
            urls: allurls
        }
    );
});
app.get('/:shortUrl', async (req, res) => {
    const shortUrl = req.params.shortUrl;
    const entry =await Url.findOneAndUpdate({
        shortUrl
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()              
            }
        }
    })
    res.redirect(entry.redirectUrl);
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});