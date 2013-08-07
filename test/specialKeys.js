'use strict';
module.exports = {

  // Testsuite name
  name: 'Sending Special Keys - DalekJS guinea pig',

  'Can send special keys as unicode': function (test) {
    test
    .open('http://dalekjs.com/guineapig/')
    .query('#i_am_a_textbox')
      .type('this \uE008has\uE008 special keys')
      .assert.attr('value', 'this HAS special keys', '"has" should be in caps by send shift special key with unicode')
    .done();
  }
}