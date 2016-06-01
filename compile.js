var compiler = require("vueify").compiler;
var fs = require("fs");
var path = require("path");

function compile(src, dest) {
    var content = fs.readFileSync(src, { encoding: "utf8" });
    compiler.compile(content, function(err, result) {
        if (err) {
            throw err;
        }
        var dir = path.dirname(dest);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.writeFile(dest, result, function(err) {
            if (err) {
                throw err;
            }
        });
    });
}

process.env.NODE_ENV = "production";

var src = path.resolve(__dirname, "src/resizesensor.vue");
var dest = path.resolve(__dirname, "lib/index.js");

compile(src, dest);


