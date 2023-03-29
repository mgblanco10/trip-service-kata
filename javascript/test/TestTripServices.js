const TripService = require( '../src/TripService' );

class TestTripServices extends TripService {
    getUser(){
     return null
    }
}

module.exports = TestTripServices