var defaultConfig   = require("../../../lib/default-config");
var cli             = require("../../../lib/cli");
var options         = cli.options;
var callbacks       = options.callbacks;

var assert = require("chai").assert;

describe("Merging Options: Files", function () {
    it("should return the files property from string", function () {
        var files = "css/*.css";
        var actual = callbacks.files([], files);
        var expected = ["css/*.css"];
        assert.deepEqual(actual, expected);
    });
    it("should return the files property from string", function () {
        var files = "css/*.css, *.html";
        var actual = callbacks.files([], files);
        var expected = ["css/*.css", "*.html"];
        assert.deepEqual(actual, expected);
    });
    it("should return the files property from string", function () {
        var files = "css/*.css, test/fixtures/*.html";
        var actual = callbacks.files([], files);
        var expected = ["css/*.css", "test/fixtures/*.html"];
        assert.deepEqual(actual, expected);
    });
    it("should return the files property from array", function () {
        var files = ["css/*.css"];
        var actual = callbacks.files([], files);
        var expected = ["css/*.css"];
        assert.deepEqual(actual, expected);
    });
    it("should return the files property from array", function () {
        var files = ["css/*.css", "*.html"];
        var actual = callbacks.files([], files);
        var expected = ["css/*.css", "*.html"];
        assert.deepEqual(actual, expected);
    });

    it("should return the files property Merged with excluded array", function () {
        var files = ["css/*.css", "*.html"];
        var excluded = ["node_modules"];
        var actual = callbacks.files([], files, null, {exclude: excluded});
        var expected = ["css/*.css", "*.html", "!node_modules/**"];
        assert.deepEqual(actual, expected);
    });
    it("should return the files property Merged with excluded string", function () {
        var files = ["css/*.css", "*.html"];
        var excluded = "node_modules";
        var actual = callbacks.files([], files, null, {exclude: excluded});
        var expected = ["css/*.css", "*.html", "!node_modules/**"];
        assert.deepEqual(actual, expected);
    });
});
