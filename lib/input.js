module.exports = function(ctx) {

    ctx.tag = 'g';

    ctx.content = [{
        elem : 'instance',
        tag : 'rect'
    }, ctx.content];

    return ctx;
};
