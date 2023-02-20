require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();
app.use(express.json());

                    
const { createUser, listAds } = require('./controllers/usersController');
const { createAd } = require('./controllers/adsController');

app.post('/api/user', createUser)
app.post('/api/ad', createAd)
app.get('/api/ads', listAds)


app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});