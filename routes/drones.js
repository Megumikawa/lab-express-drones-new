const express = require('express');

const DroneModel = require('../models/Drone.models.js')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => {
      console.log(drones)
      res.render('drones/list.hbs',{drones})
    })
    .catch(() => {
      console.log('Something went wrong while finding')
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {droneName,dronePropellers,droneSpeed} = req.body
  let myNewDrone = {
    name: droneName,
    propellers: dronePropellers,
    maxSpeed: droneSpeed
  }
  DroneModel.create(myNewDrone)
  .then(() => {
    console.log('create drones is success')
    res.redirect('/drones')
  })
  .catch((error) => {
    console.log('create drones error', error)
    res.render('/drones/create-form.hbs')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id
  DroneModel.findById(id)
  .then((drones) => {
    res.render('drones/update-form.hbs', {drones})
  })
  .catch(() => {
    console.log('Something went wrong while getting a drone')
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id
  const {droneName, dronePropellers, droneSpeed} = req.body
  
  let editedDrone = {
    name: droneName,
    propellers: dronePropellers,
    maxSpeed: droneSpeed
  }
  DroneModel.findByIdAndUpdate(id, editedDrone)
  .then(() => {
    res.redirect('/drones')
  })
  .catch(() => {
    console.log('Edit failed')
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  let id = req.params.findById
  DroneModel.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/drones')
  })
  .catch(() => {
    console.log('Delete failed')
  })
});


module.exports = router;
