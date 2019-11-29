const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountsUsersSchema = new Schema(
    {
        lastname: { type: String, required: true },
        firstname: { type: String, required: true },
        address: { type: String, required: true },
        age: { type: Number, required: true },
        sex: { type: String, require: true },
        email: { type: String, required: false },
        contact_no: { type: String, required: false },
        driverlicensed_no: { typre: String, required: false },
        username:{type: String, required: true},
        password:{type: String, required: true}


    }
);

module.exports = mongoose.model('AccountsUsers', AccountsUsersSchema);