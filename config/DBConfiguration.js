const mongoose = require("mongoose");
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.URI);
        console.log("DB Connected");
	} catch (err) {
		console.log(err);
	}
};
module.exports = connectDB;

//deployed