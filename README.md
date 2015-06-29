# posthtml-to-svg-tags

PosthtmlToSvgTags is plugin for PostHTML. It convert all HTML tags to SVG eqauls and maybe with new structure.

## Usage

``` javascript
var posthtml = require('posthtml');
    
var html = '<div class="wow">OMG</div>';    

posthtml([ require('posthtml-to-svg-tags')])
    .process(html)
    .then(function(result) {
        console.log(result);
    });
```

``` bash
> <g id="wow">OMG</g>
```



