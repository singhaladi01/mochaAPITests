var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api=supertest('https://staging-api.thingspeak.com');

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
    });
});