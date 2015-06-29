# posthtml-to-svg-tags

PostHTMLToSvgTags is plugin for [PostHTML](https://github.com/posthtml/posthtml). It convert all HTML tags to SVG equals and maybe with new structure.

## Usage

``` javascript
var posthtml = require('posthtml');
    
var html = '<div class="wow">OMG</div>';    

posthtml([ require('posthtml-to-svg-tags')()])
    .process(html)
    .then(function(result) {
        console.log(result);
    });
    
// <g id="wow">OMG</g>    
```



