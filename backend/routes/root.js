'use strict'

const host = require('../action/index')
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/api/beranda', host.beranda);
  fastify.get('/api/data', host.getData);
  fastify.post('/api/save', host.saveData);
  fastify.get('/api/getdatabyid/:id', host.getDatabyId);
}

