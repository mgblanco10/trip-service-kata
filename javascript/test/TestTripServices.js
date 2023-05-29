const TripService = require( '../src/TripService' );


class TestTripServices extends TripService {
    getUser(){
     return null
    }
    getTripsByUser(user) {
        throw new Error("TripDAO should not be invoked on a unit test.");
    }
}

module.exports = TestTripServices