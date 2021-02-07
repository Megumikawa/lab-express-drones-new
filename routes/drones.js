const express = require('express');

const DroneModel = require('../models/Drone.models.js')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => {
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
    res.redirect('/drones')
  })
  .catch(() => {
    console.log(error)
    res.render('drones/create-form.hbs')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id
  DroneModel.findById(id)
  .then((drones) => {
    res.render('update-form.hbs', {drones})
  })
  .catch(() => {
    console.log('Something went wrong while getting a drone')
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
