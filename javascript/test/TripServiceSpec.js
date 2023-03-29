"use strict";

let assert = require('assert');
const TripService = require( '../src/TripService' );
const user = require ('../src/User');
const TestTripServices = require ('./TestTripServices')

describe('TripService', () => {

    const tripService = new TestTripServices()

    it('should... ', () => {
        assert.equal(2+2, 4);
    });


    it ('should message Error', ()=>{
        assert.throws(tripService.getTripsByUser(user), Error);
    })

});
