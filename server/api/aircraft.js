const express = require('express')
const router = express.Router()
const  Aircraft  = require('../db/models/aircraft');
const  Country  = require('../db/models/country');

router.get('/', async (req, res, next) => {
  try {
    let aircraft = await Aircraft.findAll({
      include: [Country]
    });
    res.json(aircraft);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:aircraftId', async (req, res, next) => {
  try {
    let result = await Aircraft.findById(req.params.aircraftId, {
      include: [Country]
    });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let result = await Aircraft.create(req.body);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.put('/:aircraftId', async (req, res, next) => {
  try {
    let aircraft = await Aircraft.findById(req.params.aircraftId);
    let result = await aircraft.update(req.body);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:aircraftId', async (req, res, next) => {
  try {
    let aircraft = await Aircraft.findById(req.params.aircraftId);
    await aircraft.destroy();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
