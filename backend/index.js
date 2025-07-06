const express = require('express');
require('dotenv').config();
const { DBconnect } = require('./config/DBconnect');
const authRouter = require('./routes/authRouter');
const cors = require('cors');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use('/api/v1', authRouter);

app.listen(PORT, () => {
    DBconnect();
    console.log(`Server is active at : ${PORT}`);
})