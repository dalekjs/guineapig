'use strict';
module.exports = {

    // Testsuite name
    name: 'Alert - DalekJS guinea pig',

    'Can write text to a prompt dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .answer('I have a plan')
            .accept()
            .assert.text('#answer', 'I have a plan')
            .done();
    },

    'Can dismiss a prompt dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .dismiss()
            .assert.text('#answer', 'Nope.')
            .done();
    },

    'Can accept an alert (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_alert')
            .accept()
            .done();
    },

    'Can accept an confirm dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .accept()
            .assert.text('#answer', 'Yes')
            .done();
    },

    'Can dismiss an confirm dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .dismiss()
            .assert.text('#answer', 'No')
            .done();
    },

    'Can get text of an alert dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_alert')
            .assert.dialogText('I am an alert')
            .accept()
            .done();
    },

    'Can get text of an prompt dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .assert.dialogText('I am a prompt')
            .accept()
            .done();
    },

    'Can get text of an confirm dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .assert.dialogText('I am a confirm')
            .accept()
            .done();
    },

    'Can get !text of an alert dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_alert')
            .assert.dialogDoesntHaveText('I am an prompt')
            .accept()
            .done();
    },

    'Can get !text of an prompt dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .assert.dialogDoesntHaveText('I am a alert')
            .accept()
            .done();
    },

    'Can get !text of an confirm dialog (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .assert.dialogDoesntHaveText('I am a alert')
            .accept()
            .done();
    },

    'Can get text of an alert dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_alert')
            .assert.dialogText().is('I am an alert')
            .accept()
            .done();
    },

    'Can get text of an prompt dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .assert.dialogText().is('I am a prompt')
            .accept()
            .done();
    },

    'Can get text of an confirm dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .assert.dialogText().is('I am a confirm')
            .accept()
            .done();
    },

    'Can get !text of an alert dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_alert')
            .assert.dialogText().is.not('I am an confirm')
            .accept()
            .done();
    },

    'Can get !text of an prompt dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_prompt')
            .assert.dialogText().is.not('I am a alert')
            .accept()
            .done();
    },

    'Can get !text of an confirm dialog (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .click('#alert_confirm')
            .assert.dialogText().is.not('I am a alert')
            .accept()
            .done();
    },

};