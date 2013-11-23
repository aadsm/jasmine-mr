Mr-Jasmine
==========
mr-jasmine allows you to create jasmine specs for (`mr`)[https://github.com/montagejs/mr] modules by letting you create specs that are `mr` modules themselves.

Usage
=====
In your `SpecRunner.html`, instead of including `boot.js`, the source files and the spec files, you need to include `mr` and your own module that specifies which module specs to run.

Change this
```html
<script type="text/javascript" src="test/lib/jasmine.js"></script>
<script type="text/javascript" src="test/lib/jasmine-html.js"></script>
<script type="text/javascript" src="test/lib/boot.js"></script>

<!-- include source files here... -->
<script type="text/javascript" src="source.js"></script>

<!-- include spec files here... -->
<script type="text/javascript" src="test/source-spec.js"></script>
```

into this
```html
<script type="text/javascript" src="test/lib/jasmine.js"></script>
<script type="text/javascript" src="test/lib/jasmine-html.js"></script>
<script type="text/javascript" src="node_modules/mr/bootstrap.js" data-module="test/specs"></script>
```

The `test/specs` module that you provide is the place where you define all the specs modules to be run. In order to do that you use the `.run()` function provided by `mr-jasmine`:

`test/specs.js`
```javascript
require("mr-jasmine").run(require, [
    "test/source-spec"
]);
```

API Reference
=============
`run(require, specsModuleIds)` - run all specs defined by their module ids. `require` specifies the require to use to load the specs modules. `specsModuleIds` is the array of the module ids of the specs to run.

Support
=======
* Jasmine 2.0.0