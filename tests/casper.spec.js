var app = require('../server.js');
var RANDOMIZE = 0;
var server = app.listen(RANDOMIZE);
var port = server.address().port;

casper.test.begin('Todo casper test suit', 4, function suite(test) {
  var initCount;
  var afterCount;
  var finalCount;

  casper.start("http://localhost:" + 8080, function() {
    test.assertTitle("Todo", "Todo title is found.");
    this.click('#show');
  });

  casper.wait(200, function() {
    test.assertUrlMatch('http://localhost:' + 8080 + '/#/todo', "Todo Url match.");
  });

  casper.then(function() {
    beforeCount = casper.getElementsBounds("input").length;
    this.sendKeys('input#newTask', 'set Task');
    this.click('#addButton');
  });

  casper.wait(200, function() {
    afterCount = casper.getElementsBounds("input").length;
    test.assertEquals(beforeCount + 1, afterCount, "New task is added.");
  });

  casper.then(function() {
    this.click('input.finish');
  });

  casper.wait(200, function() {
    finalCount = casper.getElementsBounds("input").length;
    test.assertEquals(finalCount + 1, afterCount, "New task is deleted.");
  });

  casper.run(function() {
    test.done();
  });
});
