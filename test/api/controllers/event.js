/* global describe, afterEach, beforeEach, it, api, expect */

require('../../spec_helper');

const Event = require('../../../models/event');

describe('Events Controller Tests', () => {
  afterEach(done => {
    Event.collection.drop();
    done();
  });

  // POST ROUTE
  describe('POST /api/events', () => {
    it('should return a 201 response', done => {
      api
        .post('/api/events')
        .set('Accept', 'application/json')
        .send({
          eventName: 'Picnic',
          decsription: 'Let\'s have fun',
          date: '2018 Jan 31 14:30',
          location: 'my back-garden'
        })
        .end((err, res) => {
          expect(res.status).to.eq(201);
          done();
        });
    });

    it('should return created event data in response body', done => {
      api
        .post('/api/events')
        .set('Accept', 'application/json')
        .send({
          eventName: 'Picnic',
          decsription: 'Let\'s have fun',
          date: '2018 Jan 31 14:30',
          location: 'my back-garden'
        })
        .end((err, res) => {
          expect(res.body)
            .to.be.an('object')
            .and.have.all.keys([
              '__v',
              '_id',
              'id',
              'eventName',
              'location',
              'comments',
              'date',
              'decsription',
              'guests',
              'items',
              'photos'
              //createdBy - we should check this too
            ]);
          done();
        });
    });
  });

  // SHOW ROUTE
  describe('GET /api/events/:id', () => {

    let testEvent = null;

    beforeEach(done => {
      Event.create({
        eventName: 'Picnic',
        decsription: 'Let\'s have fun',
        date: '2018 Jan 31 14:30',
        location: 'my back-garden'
      })
        .then(eventData => {
          testEvent = eventData;
          done();
        })
        .catch(done);
    });

    it('should reutrn a 200 response', done => {
      api
        .get(`/api/events/${testEvent.id}`)
        .set('Accept', 'application/json')
        .expect(200, done);
    });

  });

});
