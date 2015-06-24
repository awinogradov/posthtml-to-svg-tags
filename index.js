var fs = require('fs'),
    traverse = require('traverse'),
    path = require('path');

module.exports = function transformHtmlTags() {
    return function(tree) {
        traverse(tree).forEach(function(entity) {

            this.node.tag && this.after(function() {
                var entity,
                    htmlTagModule = path.join('.', 'lib', this.node.tag + '.js');

                // FIXME: do it async
                if(fs.existsSync(htmlTagModule)) {
                    entity = require(htmlTagModule)(this.node);
                } else {
                    entity = this.node;
                    entity.tag = false;
                }

                this.update(entity);
            });
        });

        return tree;
    }
}
