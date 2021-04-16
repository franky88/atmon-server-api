const express = require('express');
const router = express.Router();
const Room = require('../models/rooms');

// router.route('/rooms')
router.get('/', (req, res, next) => {
    Room.find()
    .then((data) => res.json(data))
    .catch(next)
});
router.post('/', (req, res, next) => {
    const room = new Room({
        name: req.body.name
    });
    if(room){
        Room.create(req.body)
        .then((data) =>
            res.json(data)
        )
        .catch(next)
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
    // console.log(user)
});
router.get('/:roomId', (req, res, next) => {
    Room.findById({"_id": req.params.roomId})
    .then(data => res.json(data))
    .catch(next)
    // console.log(req.params.userID);
});
router.patch('/:roomId', (req, res, next) => {
    Room.updateOne({"_id": req.params.roomId},
    { $set: {
      name: req.body.name
    }})
    .then(data => res.json(data))
    .catch(next)
    // console.log(req.params.userID);
});
router.delete('/:roomId', (req, res, next) => {
    Room.findOneAndDelete({"_id": req.params.roomId})
      .then(data => res.json(data))
      .catch(next)
})

module.exports = router