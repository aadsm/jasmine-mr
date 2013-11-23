var Q = require("q");

exports.run = function(suiteRequire, modules) {
    require("boot-2.0.0");

    Q.all(modules.map(suiteRequire.async))
    .then(function() {
        jasmine.getEnv().execute();
    });
};