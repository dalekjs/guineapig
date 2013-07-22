'use strict';
module.exports = {

    // Testsuite name
    name: 'Alert - DalekJS guinea pig',

    'Can write text to a prompt dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .answer('I have a plan')
            .acceptAlert()
            .assert.text('#answer', 'I have a plan')
            .done();
    },

    'Can dismiss a prompt dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .dismissAlert()
            .assert.text('#answer', 'Nope.')
            .done();
    },

    'Can accept an alert (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_alert')
            .acceptAlert()
            .done();
    },

    'Can accept an confirm dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .acceptAlert()
            .assert.text('#answer', 'Yes')
            .done();
    },

    'Can dismiss an confirm dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .dismissAlert()
            .assert.text('#answer', 'No')
            .done();
    },

    'Can get text of an alert dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_alert')
            .assert.alertText('I am an alert')
            .acceptAlert()
            .done();
    },

    'Can get text of an prompt dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .assert.alertText('I am a prompt')
            .acceptAlert()
            .done();
    },

    'Can get text of an confirm dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .assert.alertText('I am a confirm')
            .acceptAlert()
            .done();
    },

    'Can get !text of an alert dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_alert')
            .assert.alertDoesntHaveText('I am an prompt')
            .acceptAlert()
            .done();
    },

    'Can get !text of an prompt dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .assert.alertDoesntHaveText('I am a alert')
            .acceptAlert()
            .done();
    },

    'Can get !text of an confirm dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .assert.alertDoesntHaveText('I am a alert')
            .acceptAlert()
            .done();
    },

    'Can get text of an alert dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_alert')
            .assert.alertText().is('I am an alert')
            .acceptAlert()
            .done();
    },

    'Can get text of an prompt dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .assert.alertText().is('I am a prompt')
            .acceptAlert()
            .done();
    },

    'Can get text of an confirm dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .assert.alertText().is('I am a confirm')
            .acceptAlert()
            .done();
    },

    'Can get !text of an alert dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_alert')
            .assert.alertText().is.not('I am an confirm')
            .acceptAlert()
            .done();
    },

    'Can get !text of an prompt dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .assert.alertText().is.not('I am a alert')
            .acceptAlert()
            .done();
    },

    'Can get !text of an confirm dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .assert.alertText().is.not('I am a alert')
            .acceptAlert()
            .done();
    },

};