var test = require('../util/test').file;

describe('html wrap', function() {

    it('eql', function(done) {
        test('./examples/wrap/wrap.html', './examples/wrap/wrap.svg', done);
    });

});