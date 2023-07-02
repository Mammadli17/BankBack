const { default: mongoose } = require("mongoose");



const db = {
    connect: async () => {

        try {
            await mongoose.connect("mongodb+srv://isaom:Mammadli10@cluster0.jx7nvkn.mongodb.net/")
            console.log('Mongoose connected!!');
        } catch (error) {

            console.log('Mongoose Error', error);
        }
    }
}

module.exports = {
    db
}