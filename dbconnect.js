const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb://127.0.0.1:27017/chat";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
