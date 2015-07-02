var test = require('../util/test').string;

describe('tag title', function() {

    it('empty tag', function(done) {
        test('<title></title>', '<desc></desc>', done);
    });

    it('text inside', function(done) {
        test('<title>text</title>', '<desc>text</desc>', done);
    });

});