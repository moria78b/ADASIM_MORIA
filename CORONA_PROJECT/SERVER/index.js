require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const router = require("./routes/api");
app.use('/', router)
const cors = require('cors');

app.use(cors())

//מאזין לבקשת קבל בנתיב '/' (שורש/דף הבית)
app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useCreateIndex: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err); // Log the actual error object
});
//מפעיל את השרת ולהקשיב לבקשות ביציאה ספציפית
app.listen(3030, () => {
    console.log('server listening on port 3030')
})
