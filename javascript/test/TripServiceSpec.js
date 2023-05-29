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


    it('should message Error', () => {
        assert.throws(() => {
            tripService.getTripsByUser(user);
        }, { name: 'Error', message: 'TripDAO should not be invoked on a unit test.' });
    });

    it('should return null for getUser', () => {
        const testTripService = new TestTripServices();
        assert.strictEqual(testTripService.getUser(), null);
    });

});
