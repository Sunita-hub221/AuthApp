const mongoose = require('mongoose');

exports.DBconnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(`Database is connected with : ${mongoose.connection.host}`);
    }
    catch (e) {
        console.log(e.message);
    }
}