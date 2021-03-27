const { Router } = require('express');
const request = require('superagent')

module.exports = Router()
  .get('/ftemperature', async (req, res, next) => {
    try {
      const data = await request.get('http://192.168.0.14/ftemperature')
      res.send(data.text);
    } catch (err) {
      next(err)
    }
  })
  .get('/temperature', async (req, res, next) => {
    try {
      const data = await request.get('http://192.168.0.14/temperature')
      res.send(data.text);
    } catch (err) {
      next(err)
    }
  })
  .get('/humidity', async (req, res, next) => {
    try {
      const data = await request.get('http://192.168.0.14/humidity')
      res.send(data.text);
    } catch (err) {
      next(err)
    }
  } )