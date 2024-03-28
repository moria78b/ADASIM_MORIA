require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const router = require("./routes/api");
app.use('/', router)
const cors = require('cors');

app.use(cors())

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
    console.error('Error connecting to MongoDB:', err); 
});
app.listen(3030, () => {
    console.log('server listening on port 3030')
})
