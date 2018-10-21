const express = require('express')
const router = express.Router()
const  Country  = require('../db/models/country');
const  Aircraft  = require('../db/models/aircraft');

router.get('/', async (req, res, next) => {
  try {
    let result = await Country.findAll({
      include: {model: Aircraft}
    });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let result = await Country.create(req.body);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.get('/top5', async (req, res, next) => {
  try {
    let result = await Country.getTopFive();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:countryId', async (req, res, next) => {
  try {
    let result = await Country.findById(req.params.countryId);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.put('/updateCountry/:countryId', async (req, res, next) => {
  try {
    let country = await Country.findById(req.params.countryId);
    let result = await country.update(req.body);
    console.log("IN THE BACK END", result)
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

//re-write this route to inclde the where clause in the destroy
router.delete('/:countryId', async (req, res, next) => {
  try {
    let country = await Country.findById(req.params.countryId);
    await country.destroy();
    res.send(country).status(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
