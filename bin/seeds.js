// Iteration #1
require('../configs/db.config.js')
const {Mongoose} = require('mongoose')

let DroneModel = require('../models/Drone.models.js')

DroneModel.create([
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
])
  .then((result) => {
    console.log('Data seeded',result)
    Mongoose.conection.close()
  })
  .catch(() => {
    console.log('Data seeding went wrong!')
  })