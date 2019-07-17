const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    
    article: {type:String, required:true},
    description: { type: String, required: true},
    prix: { type: String, required: true},
    photo1: String,
    // photo2:String,
    // photo3:String
},
{
    timestamps: true
}
);

module.exports = mongoose.model('article.model', UserSchema);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


