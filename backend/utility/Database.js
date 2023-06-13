const { default: mongoose } = require("mongoose")

class Database {
    static DB_URL = process.env.MONGODB_URL || ""
    static connectDB = async ()=>{
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(()=>console.log("DB Connected"))
        .catch(err=>console.log(err))
    }
}

module.exports = Database