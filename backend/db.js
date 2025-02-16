const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/paytm",{
    replicaSet: "rs0" 
})
const useraSchema = new mongoose.Schema({
    username : {
        type: String,
        require: true,
        unique : true
    },
    firstName : {
        type: String,
        require: true
    },
    lastName : {
        type : String,
        require : true
    },
    password : {
        type: String,
        require : true
    }
})
const accountschema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    balance: {
        type: Number,
        required:true

    }
})
const Account = mongoose.model('Account', accountschema)

const User = mongoose.model('User', useraSchema)
module.exports = {
    User,
    Account
}