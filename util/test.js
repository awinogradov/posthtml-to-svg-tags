var posthtml = require('posthtml'),
    expect = require('chai').expect,
    htmlToSvgTags = require('..');

module.exports = {
    string: test,
    file: function(html, svg, done) {
        return test(file(html), file(svg), done);
    }
};

function test(html, svg, done) {
    posthtml([htmlToSvgTags()])
        .process(html)
        .then(function(result) {
            expect(result.html)
                .to.eql(svg);

            done();
        });
}

function file(pathToFile) {
    return require('fs').readFileSync(require('path').resolve(__dirname, '../test/', pathToFile), 'utf8');
}
