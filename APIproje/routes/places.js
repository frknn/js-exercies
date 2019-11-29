var express = require("express");
var router = express.Router();
var Place = require("../models/place");

//DB'de olan tüm yerleri JSON olarak gönder
router.get("/",function(req,res){
    Place.find()
    .then(function(placesDB){
        res.json(placesDB);
    })
    .catch(function(err){
        console.log(err);
        res.send(err);
    })
});

//DB'ye yeni yer eklemek için kullanılan route
router.post("/",function(req,res){
    console.log(req.body);
    Place.create(req.body)
    .then(function(newPlace){
        res.status(201).json(newPlace);
    })
    .catch(function(err){
        console.log("============ HATA! ============");
        console.log(err);
        res.send(err);
    })
});

//Show route - secilen datanin detayli bilgisini gosterir
router.get("/:placeID",function(req,res){
    Place.findById(req.params.placeID)
    .then(function(foundPlace){
        res.json(foundPlace);
    })
    .catch(function(err){
        console.log("============ HATA! ============");
        console.log(err);
        res.send(err);
    })
});

//Update route - Guncelleme yapmak icin
router.put("/:placeID",function(req,res){
    Place.findByIdAndUpdate({_id:req.params.placeID}, req.body, {new: true})
    .then(function(updatedPlace){
        res.json(updatedPlace);
    })
    .catch(function(err){
        console.log("============ HATA! ============");
        console.log(err);
        res.send(err);
    })
});

//Delete route - Silmek için
router.delete("/:placeID",function(req,res){
    Place.remove({_id:req.params.placeID})
    .then(function(){
        res.json({message:"Deleted!"})
    })
    .catch(function(err){
        console.log("============ HATA! ============");
        console.log(err);
        res.send(err);
    })
})

module.exports = router;