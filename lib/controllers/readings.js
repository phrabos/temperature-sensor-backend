const { Router } = require('express');
const request = require('superagent')

module.exports = Router()
  .get('/ftemperature', async (req, res, next) => {
    try {
      const data = await request.get('https://rickandmortyapi.com/api/character/2')
      res.send(data.text);
    } catch (err) {
      next(err)
    }
  })
  .get('/temperature', async (req, res, next) => {
    try {
      const data = await request.get('https://rickandmortyapi.com/api/character/1')
      res.send(data.text);
    } catch (err) {
      next(err)
    }
  })
  .get('/humidity', async (req, res, next) => {
    try {
      const data = await request.get('https://rickandmortyapi.com/api/character/3')
      res.send(data.text);
    } catch (err) {
      next(err)
    }
  } )