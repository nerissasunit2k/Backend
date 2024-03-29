const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountsProviderSchema = new Schema(
    {
        url: {type: String, required: false},
        companyName: {type: String, required: true},
        companyAddress: {type: String, required: true},
        email: {type: String, required: true},
        username:{type: String, required: true},
        password:{type: String, required: true}

    }
);

module.exports = mongoose.model("AccountsProvider", AccountsProviderSchema);