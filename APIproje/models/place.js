var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/placesToVisit",{useNewUrlParser:true});
mongoose.set("debug", true);

mongoose.Promise = Promise;

var placesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "Places can not be empty!"
    },
    isVisited:{
        type: Boolean,
        default: false
    },
    postDate:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Place", placesSchema);