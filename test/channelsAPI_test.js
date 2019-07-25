
require('dotenv').config({path: 'C:\\Users\\aagarwal\\mochaAPITests\\config\\enVariables.env'});

var ENV = process.env.ENVIRONMENT;
var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api=supertest('https://'+ENV+'-api.thingspeak.com');

describe('Channel',function() {

    it('should update the channel field', function (done) {
        api.get('/update?api_key=10E4MY1FHQBHMNHR&field1=0')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                console.log(res.body.entry_id);
                expect(res.body.role).to.not.equal(null);
                done();
            });
        console.log(ENV);
        console.log('https://'+ENV+'-api.thingspeak.com');
    });
});