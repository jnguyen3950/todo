var chai = require('chai');
var request = require('request');
var assert = chai.assert;

var app = require('./server.js');
var RANDOMIZE = 0;
var server = app.listen(RANDOMIZE);
var port = server.address().port;

describe('Todo can', function() {
  it('read todo.', function(done) {
    request({
      method: 'GET',
      url: 'http://localhost:' + port + '/todo'
    }, function(error, response, body) {
      assert.equal(response.statusCode, 200);
      done();
    })
  })

  it('create todo.', function(done) {
    request({
      method: 'POST',
      url: 'http://localhost:' + port + '/todo/doTest'
    }, function(error, response, body) {
      assert.equal(response.statusCode, 200);
      done();
    })
  })

  it('delete todo.', function(done) {
    request({
      method: 'DELETE',
      url: 'http://localhost:' + port + '/todo/doTest'
    }, function(error, response, body) {
      assert.equal(response.statusCode, 200);
      done();
    })
  })

  after(function(done) {
    server.close();
    done();
  })
})
