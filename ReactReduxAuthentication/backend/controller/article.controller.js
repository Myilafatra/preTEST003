const Profile = require('../models/article.model');
const fs = require('fs');

//Create new profil
exports.create = (req, res) => {

    Profile.find()
    .then(user => {
        //autoincrement
        let idautom;
        if(user.length == 0){
            idautom = 0
        }else {
            idautom = parseInt(user[user.length - 1]._id) + 1
        }
        
        // //images
        let imageFile = req.files.photo1;
        let nomImage = idautom

        imageFile.mv(`${__dirname}/public/${nomImage }.jpg`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
          
        });
        
        
    const profil = new Profile({   
             
        article: req.body.article , 
        description: req.body.description,
        prix: req.body.prix,
        photo1:'' + nomImage +'.jpg'
    });

    // bcrypt.genSalt((err,salt) =>{
    //     bcrypt.hash(profil.password, salt, (err,hash)=>{
    //         if(err) throw err;
    //         profil.password = hash;
    //         profil
    //             .save()
    //     })
    // })

    // Save p in the database
    profil.save()
    .then(() => {
        Profile.find()
        .then(data=>{
            res.send(data);
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the profil."
            
        });
    });
})
};

exports.findAll = (req, res) => {   
    Profile.find()
    .then(users => {    
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving profils."
        });
    });
};

exports.lireImage =(req, res) =>{
    try {
        let picture = fs.readFileSync('./controller/public/'+req.params.photo_profil)
        res.write(picture)
        res.end()
    } catch (e) {
        console.log("erreur", e.stack);
    }
}

// Find a single profil with a profilId
exports.findOne = (req, res) => {
    Profile.findById(req.params.profilId)
    .then(profilchoix => { 
        if(!profilchoix) {
            return res.status(404).send({
                message: "profil not found with id" + req.params.profilId
            });            
        }
        else{  
            res.send(profilchoix);             
        }
        
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "profil not found with id " + req.params.profilId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving profil with id " + req.params.profilId
        });
    });
};