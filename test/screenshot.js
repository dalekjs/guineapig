'use strict';
module.exports = {

    // Testsuite name
    name: 'Screenshot - DalekJS guinea pig',

    'Can generate a toplevel screenshot (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .screenshot('guineapig.png')
            .done();
    },

    'Can generate a subdir screenshot (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .screenshot('screenshots/guineapig.png')
            .done();
    },

    'Can generate a subdir screenshot with browser placeholder (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .screenshot('screenshots/:browser_guineapig.png')
            .done();
    },

    'Can generate a subdir screenshot with browser & version placeholder (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .screenshot('screenshots/:browser/:version_guineapig.png')
            .done();
    },

    'Can generate a subdir screenshot with browser, version & timestamp placeholder (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .screenshot('screenshots/:browser/:version/:timestamp_guineapig.png')
            .done();
    },

    'Can generate a subdir screenshot with browser, version, timestamp & os placeholder (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .screenshot('screenshots/:browser/:version/:timestamp/:os_guineapig.png')
            .done();
    },

    'Can generate a subdir screenshot with browser, version, timestamp, os & os version placeholder (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .screenshot('screenshots/:browser/:version/:timestamp/:os/:osVersion_guineapig.png')
            .done();
    },

    'Can generate a subdir screenshot with browser, version, timestamp, os, os version & date placeholder (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .screenshot('screenshots/:browser/:version/:timestamp/:os/:osVersion/:date_guineapig.png')
            .done();
    },

    'Can generate a subdir screenshot with browser, version, timestamp, os, os version, date & datetime placeholder (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .screenshot('screenshots/:browser/:version/:timestamp/:os/:osVersion/:date/:datetime_guineapig.png')
            .done();
    },

    'Can generate a subdir screenshot with browser, version, timestamp, os, os version, date, datetime & viewport placeholder (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .screenshot('screenshots/:browser/:version/:timestamp/:os/:osVersion/:date/:datetime/:viewport_guineapig.png')
            .done();
    }
};